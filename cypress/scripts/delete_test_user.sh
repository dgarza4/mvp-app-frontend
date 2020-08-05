#!/bin/sh

SCRIPT_NAME=`basename "$0"`;
USAGE_OPTIONS=$(cat << EOF
-H, --host <HOST>           Keycloak URL.
-R, --realm <REALM>         Keycloak realm.
-C, --client <CLIENT_ID>    Keycloak realm client id.
-S, --secret <SECRET>       Keycloak realm client id secret.
-u, --username <USERNAME>   Keycloak user to be deleted.
-p, --password <PASSWORD>   Keycloak password for the user to be deleted.
EOF
);

function usage () {
  echo "usage: ${SCRIPT_NAME} [options...]"
  echo "${USAGE_OPTIONS}"
}

while [ "$1" != "" ]; do
    case $1 in
        -H | --host )           shift
                                HOST=$1
                                ;;
        -R | --realm )          shift
                                REALM=$1
                                ;;
        -C | --client )         shift
                                CLIENT_ID=$1
                                ;;
        -S | --secret )         shift
                                CLIENT_SECRET=$1
                                ;;
        -u | --username )       shift
                                USERNAME=$1
                                ;;
        -p | --password )       shift
                                PASSWORD=$1
                                ;;
        -h | --help )           usage
                                exit
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done

if [ -z $HOST ] || [ -z $USERNAME ] || [ -z $PASSWORD ] || [ -z $REALM ] || [ -z $CLIENT_ID ] || [ -z $CLIENT_SECRET ]; then
  usage
  exit 1
fi

echo "Getting access token..."

GRANT=$(curl --location --insecure --request POST "${HOST}/realms/${REALM}/protocol/openid-connect/token" \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode "client_id=${CLIENT_ID}" \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_secret=${CLIENT_SECRET}" \
--data-urlencode "username=${USERNAME}" \
--data-urlencode "password=${PASSWORD}" \
--data-urlencode 'scope=openid'
)
TOKEN=$(echo ${GRANT} | sed "s/{.*\"access_token\":\"\([^\"]*\).*}/\1/g")

if [ -z "${TOKEN}" ]; then
  echo "Could not retrieve token from grant: ${GRANT}"
  echo "${GRANT}"
  exit 1
fi

echo "TOKEN: ${TOKEN}"

echo "Getting '${DELETE_USER}' user id..."

USER_INFO=$(curl --location --insecure --request GET "${HOST}/admin/realms/${REALM}/users?briefRepresentation=true&search=${USERNAME}" \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer ${TOKEN}"
)
USER_ID=$(echo ${USER_INFO} | sed "s/\[{.*\"id\":\"\([^\"]*\).*}\]/\1/g")

echo "Deleting '${USERNAME}' ${USER_ID} user..."

curl --location --insecure --request DELETE "${HOST}/admin/realms/${REALM}/users/${USER_ID}" \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer ${TOKEN}"

import React, {
  createContext,
  FC,
  useState,
  useEffect,
  ReactElement,
} from "react";

import Amplify, { Auth, Hub } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { cognitoConfig, signUpFormFields } from "./config";
import { Box } from "react-basic-blocks";
import { useLocation } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";

export interface IAuthState {
  isSignedIn: boolean;
  jwt?: string;
}

export interface IAuthContext extends IAuthState {
  user?: object;
}

interface IUserIdentity {
  account: {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
  };
}

Amplify.configure(cognitoConfig);

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }): ReactElement<any, any> => {
  const [authState, setAuthState] = useState<IAuthState>({ isSignedIn: false });
  const [authEvent, setAuthEvent] = useState<string>("");
  const { data } = fetchSingle<IUserIdentity>(
    `${config.apiUrl}/accounts/v1/identities/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authState.jwt,
      },
    },
    [authState.isSignedIn]
  );

  useEffect(() => {
    if (data?.account?.id) {
      window.analytics.identify(data?.account?.id, {
        givenName: data?.account?.given_name,
        familyName: data?.account?.family_name,
        email: data?.account?.email,
      });
    }
  }, [data]);

  useEffect(() => {
    if (authEvent) {
      window.analytics.track(authEvent);
    }
  }, [authEvent]);

  useEffect(() => {
    Hub.listen("auth", (eventData) => {
      const {
        payload: { event },
      } = eventData;
      if (!["configured"].includes(event)) {
        setAuthEvent(event);
      }
    });

    const initialGuess = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        const currentSession = await Auth.currentSession();
        const accessToken = currentSession.getAccessToken();
        setAuthState({ isSignedIn: true, jwt: accessToken.getJwtToken() });
      } catch (err) {
        // not authenticated
      }
    };

    const authCallback = async (nextAuthState: string) => {
      if (nextAuthState === AuthState.SignedIn) {
        const currentSession = await Auth.currentSession();
        const accessToken = currentSession.getAccessToken();
        setAuthState({ isSignedIn: true, jwt: accessToken.getJwtToken() });
      } else {
        setAuthState({ isSignedIn: false, jwt: undefined });
      }
    };

    initialGuess();
    return onAuthUIStateChange(authCallback);
  }, []);

  // eslint-disable-next-line
  return (
    <AuthContext.Provider value={{ ...authState, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthComponent: FC = () => {
  const location = useLocation();
  const initialAuthState =
    location.pathname === "/auth/signup" ? AuthState.SignUp : AuthState.SignIn;
  return (
    <Box margin="100px 0" alignItems="center" width="100%">
      <Box margin="0 0 30px 0">
        <img
          src="/images/logo-black.png"
          height="100"
          width="100"
          alt="logo-black"
        />
      </Box>
      <AmplifyAuthenticator initialAuthState={initialAuthState}>
        <AmplifySignUp
          headerText="UI Kit Sign Up"
          slot="sign-up"
          formFields={signUpFormFields}
          usernameAlias="email"
        />
      </AmplifyAuthenticator>
    </Box>
  );
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    // do nothing
  }
};

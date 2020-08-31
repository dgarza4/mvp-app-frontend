import React, {
  createContext,
  FC,
  useState,
  useEffect,
  ReactElement,
} from "react";

import Amplify, { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { cognitoConfig, signUpFormFields } from "./config";
import { Box } from "react-basic-blocks";
import { useLocation } from "react-router";

export interface IAuthContext {
  isSignedIn: boolean;
}

Amplify.configure(cognitoConfig);

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }): ReactElement<any, any> => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const initialGuess = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsSignedIn(true);
      } catch (err) {
        // not authenticated
      }
    };

    initialGuess();
    return onAuthUIStateChange((nextAuthState, authData) => {
      setIsSignedIn(nextAuthState === AuthState.SignedIn);
    });
  }, []);

  // eslint-disable-next-line
  return (
    <AuthContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const GetJwt = () => {
  const [jwtToken, setJwtToken] = useState<string>();
  useEffect(() => {
    const getJwtToken = async () => {
      const currentSession = await Auth.currentSession();
      const accessToken = currentSession.getAccessToken();
      setJwtToken(accessToken.getJwtToken());
    };

    getJwtToken();
  }, []);
  return jwtToken;
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

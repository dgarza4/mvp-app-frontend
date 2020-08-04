import React, {
  createContext,
  FC,
  useState,
  useEffect,
  ReactElement,
} from "react";

import { Auth, AuthEvents } from "./Auth";

export interface IAuthContext {
  auth: Auth;
  authenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC = ({ children }): ReactElement<any, any> => {
  const [auth] = useState(new Auth(eventHandler, false));
  const [authenticated, setAuthenticated] = useState(false);

  function eventHandler(event: any, payload: any, auth: Auth) {
    switch (event) {
      case AuthEvents.AUTHENTICATED:
        // USER IS AUTHENTICATED
        setAuthenticated(payload.auth.isAuthenticated());
        break;
      case AuthEvents.NOT_AUTHENTICATED:
        // USER IS NOT AUTHENTICATED
        setAuthenticated(false);
        break;
    }
  }

  useEffect(() => {
    auth.init().then((isAuthenticated: boolean | undefined) => {
      setAuthenticated(isAuthenticated === true);
    });
  }, [auth]);

  // eslint-disable-next-line
  return (
    <AuthContext.Provider value={{ auth, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

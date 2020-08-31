import React, { FC } from "react";
import HeaderTags from "components/HeaderTags";
import { AuthComponent } from "components/CognitoAuth";

const Authentication: FC = () => {
  return (
    <div>
      <HeaderTags
        title="Authentication"
        description="This is the authentication page"
      />
      <AuthComponent />
    </div>
  );
};

export default Authentication;

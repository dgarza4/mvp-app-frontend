import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { config } from "config";

interface IProps {
  title?: string;
  description: string;
}

const HeaderTags: FC<IProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{[title, config.pageTitle].filter((x) => x).join(" | ")}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default HeaderTags;

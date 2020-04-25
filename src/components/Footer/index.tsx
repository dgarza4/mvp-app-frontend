import React, { FC } from "react";
import { FooterLink, LinkWrapper, FooterWrapper } from "./styles";

interface IProps {}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper direction="row" justify="center" align="center">
      <LinkWrapper direction="row" justify="between">
        <FooterLink to="/search">CATEGORIES</FooterLink>
        <FooterLink to="/terms-of-use">TERMS</FooterLink>
        <FooterLink to="/privacy-policy">PRIVACY</FooterLink>
      </LinkWrapper>
    </FooterWrapper>
  );
};

export default Footer;

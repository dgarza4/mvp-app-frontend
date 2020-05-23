import React, { FC } from "react";
import { FooterLink, LinkWrapper, FooterWrapper } from "./styles";

interface IProps {}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <LinkWrapper flexDirection="row" justifyContent="space-between">
        <FooterLink to="/search">CATEGORIES</FooterLink>
        <FooterLink to="/terms-of-use">TERMS</FooterLink>
        <FooterLink to="/privacy-policy">PRIVACY</FooterLink>
      </LinkWrapper>
    </FooterWrapper>
  );
};

export default Footer;

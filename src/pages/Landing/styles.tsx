import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Box } from "react-basic-blocks";

export const HeroWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(/images/hero-bg.jpg) center center no-repeat;
  background-color: #e5e5e5;
  background-size: cover;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 82px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const HeroDescription = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 60px;
  text-align: center;
`;

export const Button = styled.a<{ margin?: string }>`
  text-transform: uppercase;
  color: #fff;
  background-color: #5ca9fb;
  background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  text-decoration: none;
`;

export const Fab = styled.div`
  font-size: 38px;
  margin-bottom: 20px;
  color: #fff;
  width: 100px;
  height: 100px;
  padding: 30px 0;
  border-radius: 50%;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2<{ color?: string }>`
  position: relative;
  text-transform: uppercase;
  margin: 0 0 40px 0;
  font-weight: 800;
  font-size: 36px;
  color: ${(props) => (props.color ? props.color : "#333")};
  text-align: center;

  :after {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 50px);
    content: "";
    background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    height: 4px;
    width: 100px;
  }
`;

export const SubsectionTitle = styled.h3<{ color?: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "#333")};
  margin: 10px 0;
`;

export const SubsectionText = styled.p`
  margin: 0;
  color: #777;
  font-size: 15px;
  text-align: center;
`;

export const PaddedWrapper = styled.div`
  padding: 100px 0;
`;

export const PaddedGradientWrapper = styled.div`
  padding: 100px 0;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: #fff;
`;

export const AppHeaderWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  height: 64px;
  z-index: 10;
`;

export const LogoLink = styled(NavLink)`
  padding-left: 24px;
  text-decoration: none;
`;

export const ClientImg = styled.img`
  object-fit: contain;
`;

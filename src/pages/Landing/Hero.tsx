import React, { FC } from "react";
import { Container, Row, Col, Box } from "react-basic-blocks";
import { HeroWrapper, HeroTitle, HeroDescription, Button } from "./styles";

interface IProps {
  title: string;
  description: string;
  cta: string;
}

const Hero: FC<IProps> = ({ title, description, cta }) => {
  return (
    <header>
      <HeroWrapper>
        <Container>
          <Row>
            <Col md={8} offset={{ md: 2 }}>
              <Box height="100vh" justifyContent="center" alignItems="center">
                <HeroTitle>{title}</HeroTitle>
                <HeroDescription>{description}</HeroDescription>
                <Button href="#features">{cta}</Button>
              </Box>
            </Col>
          </Row>
        </Container>
      </HeroWrapper>
    </header>
  );
};

export default Hero;

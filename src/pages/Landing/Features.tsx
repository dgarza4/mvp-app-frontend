import React, { FC } from "react";
import { Container, Row, Col, Box } from "react-basic-blocks";
import {
  Fab,
  SectionTitle,
  SubsectionTitle,
  SubsectionText,
  PaddedWrapper,
} from "./styles";
import {
  Search,
  FastForward,
  License,
  Deploy,
  Test,
  Dashboard,
  Folder,
  Contract,
} from "grommet-icons";

interface FeatureBoxProps {
  title: string;
  description: string;
}

const FeatureBox: FC<FeatureBoxProps> = ({ children, title, description }) => (
  <Col xs={6} md={3}>
    <Box alignItems="center" margin="20px 0">
      <Fab>{children}</Fab>
      <SubsectionTitle>{title}</SubsectionTitle>
      <SubsectionText>{description}</SubsectionText>
    </Box>
  </Col>
);

const Features: FC = () => {
  return (
    <PaddedWrapper id="features">
      <Container>
        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <SectionTitle>Features</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <Row>
              <FeatureBox
                title="Fast Development"
                description="The UI Kit uses react.js and best-in-class dependencies for fast development"
              >
                <FastForward size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="SEO"
                description="Best-In-Class SEO capabilities and tooling built in"
              >
                <Search size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Authentication"
                description="Highly customizable authentication flows using AWS Cognito"
              >
                <License size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Deployment Pipeline"
                description="Azure Devops CI/CD Deployment Pipeline included"
              >
                <Deploy size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Automated Testing"
                description="Consistent and reliable e2e tests using cypress"
              >
                <Test size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Lighthouse"
                description="Lighthouse benchmarking included in our CI pipeline"
              >
                <Dashboard size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Well Organized"
                description="The UI Kit uses industry standard best practices."
              >
                <Folder size="large" color="#FFF" />
              </FeatureBox>
              <FeatureBox
                title="Responsive"
                description="The UI Kit is responsive design oriented out-of-the-box."
              >
                <Contract size="large" color="#FFF" />
              </FeatureBox>
            </Row>
          </Col>
        </Row>
      </Container>
    </PaddedWrapper>
  );
};

export default Features;

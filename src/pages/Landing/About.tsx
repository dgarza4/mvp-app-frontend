import React, { FC } from "react";
import { Container, Row, Col, Box } from "react-basic-blocks";
import { SectionTitle, SubsectionText, PaddedWrapper } from "./styles";
import { Checkmark } from "grommet-icons";

const About: FC = () => {
  return (
    <PaddedWrapper>
      <Container>
        <Row>
          <Col md={5} offset={{ md: 1 }}>
            <img
              src="images/about.jpg"
              className="img-responsive"
              alt=""
              width="100%"
            />
          </Col>
          <Col md={5}>
            <Box height="30px" />
            <SectionTitle>About Us</SectionTitle>
            <SubsectionText>
              The UI Kit is a React.js starter app that has SEO, Authentication,
              Basic Components, and more built into it. Get an app up and
              running in a couple of minutes!
            </SubsectionText>
            <Box
              flexDirection="row"
              justifyContent="center"
              margin="50px 0 0 0"
            >
              <div>
                <p>
                  <Checkmark color="blue" size="small" /> Fast Development
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> SEO
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> Authentication
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> Deployment Pipepne
                </p>
              </div>
              <Box width="30px" />
              <div>
                <p>
                  <Checkmark color="blue" size="small" /> Automated Testing
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> Lighthouse
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> Well Organized
                </p>
                <p>
                  <Checkmark color="blue" size="small" /> Responsive Design
                </p>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </PaddedWrapper>
  );
};

export default About;

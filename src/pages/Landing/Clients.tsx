import React, { FC } from "react";
import { Container, Row, Col, Box } from "react-basic-blocks";
import {
  SectionTitle,
  PaddedGradientWrapper,
  SubsectionTitle,
  ClientImg,
} from "./styles";

interface TeamMemberProps {
  name: string;
  description: string;
  imgSrc: string;
}

const Client: FC<TeamMemberProps> = ({ imgSrc, name, description }) => (
  <Col xs={12} md={4}>
    <Box flexDirection="row" margin="20px 0">
      <Box width="200px">
        <ClientImg src={imgSrc} alt="teammember" height="100" />
      </Box>
      <Box margin="0 0 0 10px">
        <SubsectionTitle color="#FFF">
          <i>"{description}"</i>
        </SubsectionTitle>
        <SubsectionTitle color="#FFF">- {name}</SubsectionTitle>
      </Box>
    </Box>
  </Col>
);

const Clients: FC = () => {
  return (
    <PaddedGradientWrapper>
      <Container>
        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <SectionTitle color="#FFF">Clients</SectionTitle>
          </Col>
        </Row>

        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <Row>
              <Client
                imgSrc="/images/greedo.png"
                name="Beck Kloss"
                description="These guys are fast! 12 parsecs fast..."
              />
              <Client
                imgSrc="/images/jawa.png"
                name="Vanessa Hulley"
                description="So much to do, so much time!"
              />
              <Client
                imgSrc="/images/jabba.png"
                name="Trace Johnson"
                description="Point and Blast! Pew Pew!"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </PaddedGradientWrapper>
  );
};

export default Clients;

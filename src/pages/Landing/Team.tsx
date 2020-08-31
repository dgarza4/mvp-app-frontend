import React, { FC } from "react";
import { Container, Row, Col, Box } from "react-basic-blocks";
import {
  SectionTitle,
  PaddedGradientWrapper,
  SubsectionTitle,
  SubsectionText,
} from "./styles";

interface TeamMemberProps {
  name: string;
  description: string;
  imgSrc: string;
}

const TeamMember: FC<TeamMemberProps> = ({ imgSrc, name, description }) => (
  <Col xs={6} md={3}>
    <Box alignItems="center" margin="20px 0">
      <img src={imgSrc} alt="teammember" height="200" />
      <SubsectionTitle color="#FFF">{name}</SubsectionTitle>
      <SubsectionText>{description}</SubsectionText>
    </Box>
  </Col>
);

const Team: FC = () => {
  return (
    <PaddedGradientWrapper>
      <Container>
        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <SectionTitle color="#FFF">Our Team</SectionTitle>
          </Col>
        </Row>

        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <Row>
              <TeamMember
                imgSrc="/images/robot1.png"
                name="Juan C. Garcia"
                description="Full Stack Dev"
              />
              <TeamMember
                imgSrc="/images/robot3.png"
                name="Charlie Holland"
                description="Devops/Infra"
              />
              <TeamMember
                imgSrc="/images/robot2.png"
                name="Alessandro Iob"
                description="Full Stack Dev"
              />
              <TeamMember
                imgSrc="/images/robot4.png"
                name="Roy Camp"
                description="Engineering Lead"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </PaddedGradientWrapper>
  );
};

export default Team;

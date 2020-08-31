import React, { FC } from "react";
import HeaderTags from "components/HeaderTags";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Team from "./Team";
import Footer from "components/Footer";
import Clients from "./Clients";
import AppHeader from "./AppHeader";

const Landing: FC = () => {
  return (
    <>
      <AppHeader />
      <HeaderTags title="Landing" description="This is the landing page" />
      <Hero
        title="UI Kit"
        description="The UI Kit is a React.js starter app that has SEO, Authentication, Basic Components, and more built into it. Get an app up and running in a couple of minutes!"
        cta="Learn More"
      />
      <Features />
      <Clients />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default Landing;

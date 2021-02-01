import React from "react";
import { useEffect } from "react";
import { Container } from "reactstrap";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const About = () => {
  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout>
      <BasePage className="about-page">
        <Container>
          <h2 className={`title ${createFadeInClass()}`}>About Smitty</h2>
        </Container>
      </BasePage>
    </BaseLayout>
  );
};

export default About;

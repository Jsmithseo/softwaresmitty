import React from "react";
import Feature from "@/components/feature";
import { Container } from "reactstrap";
import BaseLayout from "@/components/layouts/BaseLayout";

const Index = () => {
  return (
    <BaseLayout className="cover">
      <Container>
        <Feature />
      </Container>
    </BaseLayout>
  );
};

export default Index;

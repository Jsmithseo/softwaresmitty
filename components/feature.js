import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';

import Link from "next/link";

const Feature = (props) => {
  return (
    <div>
    <Container>
      <Row>
        <Col xs="6">
        <h1 className="iamsmitty">I am Smitty</h1>
          <p className="lead">software developer · marketer · entrepreneur </p>
          <img src="/images/happy_smitty.png"></img>
        </Col>
        <Col xs="6">
          <h2> You can be an engineer without a Computer Science Degree!</h2>
          <li> Learn remote </li>
          <li> Learn at your own pace </li>
          <li>Spend more time on the things that matter most.</li>
          <Button color="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default Feature;

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Feature = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">@Software_Smitty</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p>My experience as a front-end web developer with over ten years of sales and marketing experience gives me a unique vantage point in today's digital market. Not only do I understand the workflow of lead generation and conversion; I can build out the emails, landing pages, and web applications to support marketing campaigns. Often finding myself as the liaison between the product and marketing teams because I can speak both languages. </p>
        <p className="lead">
          <Button color="primary">Schedule time</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Feature;
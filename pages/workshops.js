import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Link from "next/link";

const Workshops = (props) => {
  return (
    <div>
      <Jumbotron>
        <p className="lead"></p>
        <h3 className="center">
          Workshops are currently cancelled due to COVID
        </h3>
      </Jumbotron>
    </div>
  );
};

export default Workshops;

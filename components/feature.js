import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Link from "next/link";

const Feature = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">@Software_Smitty</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p>
          {" "}
          I became an engineer with NO G.E.D or computer science degree. You can
          too!{" "}
        </p>
        <p className="lead">
          <Link href="https://calendly.com/softwaresmitty">
            <Button color="primary">Schedule time</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Feature;

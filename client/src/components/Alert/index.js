import React from "react";
import { Card, Col } from "react-materialize";

function Alert(props) {
  return (
    <div>
      <Col m={12} s={12}>
        <Card className=" red lighten-2" textClassName="white-text" title=""
        style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
        >
          {props.children}
        </Card>
      </Col>
    </div>
  );
}

export default Alert;

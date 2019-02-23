import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css"

// ContactList - renders an unorderd list of book items
export function ContactList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// ContactListItem - details of a contact
export function ContactListItem(props) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="lg-12">
            <h3>{props.firstName} {props.lastName}</h3>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

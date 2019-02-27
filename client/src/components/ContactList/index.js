import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css"

// ContactList - renders an unorderd list of book items
export function ContactList({ children }) {
  return <ul className="collection">{children}</ul>;
}

//Mark - deleteContact - possibly unneeded code 
export function deleteContact(id){
   console.log ("Delete User",id)
}

// ContactListItem - details of a contact
export function ContactListItem(props) {

  return (
    <li className="collection-item">
      <Container>
        <Row>
          <Col size="s12">
            <table class="striped responsive-table">
              <tbody>
                <tr>
                  <td>
                    {props.firstName} {props.lastName}
                  </td>
                  <td>
                    {props.birthDate}
                  </td>
                  <td>
                    {props.email}
                  </td>
                  <td>
                    {/* Mark - onClick to delete user  */}
                    <button onClick={() => deleteContact(1)}><i className="material-icons">delete_forever</i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

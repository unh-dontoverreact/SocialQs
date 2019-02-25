import React, { Component } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar"

class HomePage extends Component {

  // Run this when component starts up
  componentDidMount() {
    console.log("logged in user: ", this.props.user.firstName, this.props.user.lastName);
  }
  
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col size="s3">
            <Sidebar user={this.props.user}/>
          </Col>
          <Col size="s9">
            <h5>Add Home Page content here</h5>
          </Col>
        </Row>
      </Container>   
      </div> )
  }
}

export default HomePage;
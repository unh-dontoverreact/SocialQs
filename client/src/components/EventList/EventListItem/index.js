import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon, Button, Modal, Row, Input } from "react-materialize";
import moment from "moment";
import Axios from "axios";

//table details of one event
class EventListItem extends React.Component {
  state = {
    date: this.props.date,
    title: this.props.title,
    contact: this.props.contact,
    cueFrequency: this.props.frequency
  };

  saveEventUpdate = async (x) => {
    x.preventDefault();
    console.log("save clicked")
    //when we click enter new event, use state as new event and send to db


    let newEvent = {
      date: this.state.date,
      title: this.state.title,
      contact: this.state.contact,
      cueFrequency: this.state.cueFrequency,
    };

    console.log("newEvent:", newEvent)

  };
  

  //set state as user enters event info
  handleEditEvent = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    if(this.props.date === undefined){
      return(null)
    }
    return (
      <tr>
        <td>{moment(this.props.date).format("MM-DD-YYYY")}</td>
        <td>{this.props.title}</td>
        <td>{this.props.contact}</td>
        <td>{this.props.cueFrequency}</td>

        <td>
          <Modal
            header="Edit Event"
            trigger={
              <Button
                waves="light"
                className="eventActions white-text #4a148c purple darken-4 z-depth-5"
              >
                <Icon>edit</Icon>
              </Button>
            }
          >
            <form className="center-align">
              <Row>
                <input
                  defaultValue= {moment(this.props.date).format("MM-DD-YYYY")}
                  s={12}
                  name="date"
                  type="date"
                  onChange={this.handleEditEvent}
            />
              </Row>
              <Row>
                <Input
                defaultValue= {this.props.title}
                  s={12}
                  name="title"
                  type="text"
                  onChange={this.handleEditEvent}
                  
                />
              </Row>
              <Row>
                <Input
                defaultValue= {this.props.contact}
                  s={12}
                  name="contact"
                  type="text"
                  onChange={this.handleEditEvent}
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  name="cueFrequency"
                  type="select"
                  onChange={this.handleEditEvent}
                >
                  <option value="Once">Once</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Off">Off</option>
                </Input>
              </Row>

              <Button
                className="white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
                onClick={this.saveEventUpdate}
              >
                Save
              </Button>
            </form>
          </Modal>
        </td>
        <td>
          <Button
            waves="light"
            className="eventActions white-text #4a148c purple darken-4 z-depth-5"
            onClick={() => this.props.handleDeleteEventClick(this.props.id)}
          >
            <Icon>delete_forever</Icon>
          </Button>
        </td>
      </tr>
    );
  }
}

export default EventListItem;

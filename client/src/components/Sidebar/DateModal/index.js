import { React, Component } from "react";
// import "./style.css";
import { Modal} from "react-materialize";

class CalendarModal extends Component {
  state = {
    showModal: false,
  };
  triggerModal = () => {
    if (this.props.calendarLaunch) {
      this.setState({ showModal: true });
    }
  };
  render() {
    return (
      <Modal
        header="Events"
        trigger={
          this.state.showModal === true
          //   <Button
          //     waves="light"
          //     className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
          //   >
          //     EDIT CONTACT<Icon right>insert_chart</Icon>
          //   </Button>
        }
      >
        {/* <Table>
    <tr>
        <td> date</td>
        </tr>
    </Table> */}
        <div>hello </div>
      </Modal>
    );
  }
}
export default CalendarModal;

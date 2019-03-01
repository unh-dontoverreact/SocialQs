import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class NewEvent extends React.Component {
    render() {
        return (
            
                <div className="new-event-display card z-depth-2 center-align">
                    <h4>Create New Event </h4>

                    <form>
                        <div className="input-field">
                            <input
                                id="date"
                                type="date"
                                placeholder="Event Date"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                id="title"
                                type="text"
                                placeholder="Describe the Event"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                id="contacts"
                                type="text"
                                placeholder="Add contacts"
                            />
                        </div>
                    </form>

                    <button className="white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5">
                        Create
                    </button>
                </div>
            

            //     <tr className="collapsible">
            //     <td className="collapsible-header" onClick={() => {

            //     }}>
            //         <span className="material-icons">add_circle_outline</span>
            //     </td>
            //     <td />
            //     <td />
            //     <td />
            // </tr>
            // <tr>
            //     <td className="input-field">
            //     <input id="eventDate"type="date"></input>
            //     </td>

            //     <td className="input-field">
            //     <input id="eventTitle"type="text"></input>
            //     <label for="eventTitle">Describe Event</label>
            //     </td>

            //     <td className="input-field">
            //     <input id="eventContacts"type="text"></input>
            //     <label for="eventContacts">Add Contatcs</label>
            //     </td>

            //     <td><span className="material-icons">add_circle_outline</span></td>
            // </tr>
        );
    }
}

export default NewEvent;

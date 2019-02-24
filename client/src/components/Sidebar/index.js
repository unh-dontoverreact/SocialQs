import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import User from "../User"

class Sidebar extends Component {
    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
          <div>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li />
                {/* User Profile Section */ }
                <User />

                {/* Contact Section */ }
                <li><a className="subheader">Contacts</a></li>
                <li>
                    <a href="#!">
                        <i className="material-icons waves-effect">person_add</i>Add Contacts
                    </a>
                </li>
                <li>
                <a href="#!"><i className="material-icons waves-effect">person</i>Delete Contacts</a>
                </li>
                <li>
                    <div className="divider" />
                </li>
                {/* Events Section */ }
                <li><a className="subheader">Events</a></li>

                <li><a href="#!"><i className="material-icons waves-effect">event_note</i>List Events</a></li>
                <li>
                    <div className="divider" />
                </li>
                {/* Events Section */ }
                <li><a href="#!"><i className="material-icons">exit_to_app</i>Logout</a></li>
                <li>
                    <div className="divider" />
                </li>
                </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i>
            </a>
          </div>
        );
    }
}

export default Sidebar;
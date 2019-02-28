import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import User from "./User";
import Calendar from "react-calendar";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250,
        });
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <div id="sidebar">
                <ul id="slide-out" className="sidenav">
                    <li />
                    {/* User Profile Section */}
                    <User user={this.props.user} />
                    <li>
                        <div className="divider" />
                    </li>

                    {/* Contact Section */}
                    <li>
                        <a className="subheader" href="/">
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            <i className="material-icons waves-effect">
                                person_add
                            </i>
                            Manage Contacts
                        </a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>

                    {/* Events Section */}
                    <li>
                        <a className="subheader" href="/">
                            Events
                        </a>
                    </li>

                    <li>
                        <a href="#!">
                            <i className="material-icons waves-effect">
                                event_note
                            </i>
                            List Events
                        </a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>

                    {/* Events Section */}
                    <li>
                        <a href="/landing" onClick={this.props.logoutHandler}>
                            <i className="material-icons">exit_to_app</i>Logout
                        </a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>

                    {/* Event Calendar */}
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </ul>

                {/* Hamburger Menu */}
                <a href="/" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;

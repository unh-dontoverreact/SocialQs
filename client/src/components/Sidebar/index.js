import React, { Component } from 'react';
import { Button, SideNav, SideNavItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import User from "./User";
import Calendar from "react-calendar";

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <SideNav        
          trigger={<Button icon="menu"></Button>}
          options={{ closeOnClick: true }}
          >

          <li><User user={this.props.user} /></li>          
          <SideNavItem divider />

          <li><NavLink to="/"><i className="material-icons">home</i>Home Page</NavLink></li>
          <SideNavItem divider />

          <SideNavItem subheader>Contacts</SideNavItem>
          <li><NavLink to="/contacts"><i className="material-icons">person_add</i>Manage Contacts</NavLink></li>
          <SideNavItem divider />

          <SideNavItem subheader>Events</SideNavItem>
          <li><NavLink to="/events"><i className="material-icons">event_note</i>Manage Events</NavLink></li>
          <SideNavItem divider />

          <li><NavLink to="/landing"><i className="material-icons">exit_to_app</i>Logout</NavLink></li>
          <SideNavItem divider />

          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </SideNav>    </div>
    );
  }
}

export default Sidebar;


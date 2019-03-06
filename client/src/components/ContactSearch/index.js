
import React, { Component } from 'react'
import PropTypes from "prop-types";



class ContactSearch extends Component {
  // state = {
  //   searching: false
  // }

    static propTypes = {
      contactOptions: PropTypes.instanceOf(Array)
    };
  
    static defaultProps = {
        contactOptions: []
    };
  
    constructor(props) {
      super(props);
  
      this.state = {
        // The active selection's index
        activecontactOptions: 0,
        // The contact that match the user's input
        filteredcontactOptions: [],
        // Whether or not the contact list is shown
        showcontactOptions: false,
        // What the user has entered
        userInput: "",
        searching: false
        
      };
    }
  
    // Event fired when the input value is changed
    onChange = e => {
           const { contactOptions } = this.props;
      const userInput = e.currentTarget.value;
      this.props.test(userInput);
    // console.log(this.props.searchTerm)
      // Filter our contacts that don't contain the user's input
      const filteredcontactOptions = contactOptions.filter(
        contactOptions =>
        contactOptions.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
  
      // Update the user input and filtered suggestions, reset the active
      // suggestion and make sure the suggestions are shown
      this.setState({
        activecontactOptions: 0,
        filteredcontactOptions,
        showcontactOptions: true,
        userInput: e.currentTarget.value
      });
      // this.props.contactHandlers.handleSearchChange("hello");
      // console.log(this.props.searchTerm)
    };
  
    // Event fired when the user clicks on a suggestion
    onClick = e => {
      // Update the user input and reset the rest of the state
      this.setState({
        activecontactOptions: 0,
        filteredcontactOptions: [],
        showcontactOptions: false,
        userInput: e.currentTarget.innerText
      });
      // let searchterm=()=>{this.props.searchTerm(this.state.userInput)}
      this.props.test( e.currentTarget.innerText);
    };
  
    // Event fired when the user presses a key down
    onKeyDown = e => {
      const { activecontactOptions, filteredcontactOptions } = this.state;
  
      // User pressed the enter key, update the input and close the
      // suggestions
      if (e.keyCode === 13) {
        this.setState({
          activecontactOptions: 0,
          showcontactOptions: false,
          userInput: filteredcontactOptions[activecontactOptions]
        });
      }
      // User pressed the up arrow, decrement the index
      else if (e.keyCode === 38) {
        if (activecontactOptions === 0) {
          return;
        }
  
        this.setState({ activecontactOptions: activecontactOptions - 1 });
      }
      // User pressed the down arrow, increment the index
      else if (e.keyCode === 40) {
        if (activecontactOptions - 1 === filteredcontactOptions.length) {
          return;
        }
  
        this.setState({ activecontactOptions: activecontactOptions + 1 });
      }
    };
    searchContactlist=()=>{
      console.log(this.state.userInput)
      this.setState({
        searching:true
      })
      
    }
  
    render() {
     
      const {
        onChange,
        onClick,
        onKeyDown,
        state: {
          activecontactOptions,
          filteredcontactOptions,
          showcontactOptions,
          userInput
        }
      } = this;
  
      let contactOptionsListComponent;
  
      if (showcontactOptions && userInput) {
        if (filteredcontactOptions.length) {
            contactOptionsListComponent = (
            <ul class="contactOptions">
              {filteredcontactOptions.map((contactOptions, index) => {
                let className;
  
                // Tag the active suggestion with a class
                if (index === activecontactOptions) {
                  className = "contactOptions-active";
                }
  
                return (
                  <li
                    className={className}
                    key={contactOptions}
                    onClick={onClick}
                  >
                    {contactOptions}
                  </li>
                );
              })}
            </ul>
          );
        } else {
            contactOptionsListComponent = (
            <div class="no-contactOptionss">
              <em>No contact found by that name.</em>
            </div>
          );
        }
      }
  
      return (
     
        <div>
           <div className = "row">
           <div  className=" col s5  ">
          <input
            type="text"
            placeholder ="Enter Contact Name Here"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          </div>
         <div  className=" col s2  ">
        
                        
                         
                       
       
       </div>
       </div>
        <div>  {contactOptionsListComponent} </div>
        
      
        </div>
        
      )
    
      
    }
  }
  
  export default ContactSearch;
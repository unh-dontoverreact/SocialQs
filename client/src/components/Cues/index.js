// Class = Cues
//
// Description:  A screen element that puts up a button on the screen and cycles through an array of supplied prompt messages
//    render() - puts up a "Get Cue" button conditionally and cylces through the whole array as a toast
//    cueItem() - puts up on cue and prompt

import React from "react";
import { Button, Icon, Toast } from "react-materialize";

const CUE_TIMEOUT = 3000; // 3 seconds

export class Cues extends React.Component {
  state = {
    cues: [],
    displayCueButton: false,
  };

  componentDidMount() {
    console.log("loading cues:", JSON.stringify(this.props.cues, 2));

    this.setState({
      cues: this.props.cues,
      displayCueButton: this.props.cues.length ? true : false,
    });
  }

  render() {
    if (this.state.displayCueButton) {
      // Cues availble, activate button and handlers
      return (
        <div>
          <Button
            id="Cue-btn"
            onClick={() => {
              let cue = "No cues for you today";
              if (this.state.cues.length) {
                const cueIdx = Math.floor(
                  Math.random() * this.state.cues.length
                );
                cue = this.state.cues[cueIdx];
              }
              window.Materialize.toast(cue, CUE_TIMEOUT);
            }}
          >
            <span>Get Cue  <Icon>chat_bubble_outline</Icon></span>
          </Button>
        </div>
      );
    } else {
      // No new cues available for this contact, don't show the button
      return <div />;
    }
  }
}

// Simple way to put one cue on the page
export function CueItem(props) {
  return (
    <div>
      <Toast toast={props.cue}>Get Cue</Toast>
    </div>
  );
}

export default Cues;

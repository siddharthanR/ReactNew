import React from "react";

class Label extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.labelContent}</p>
      </div>
    );
  }
}

export default Label;

import React from "react";

class TextBox extends React.Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          value={this.props.value}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default TextBox;

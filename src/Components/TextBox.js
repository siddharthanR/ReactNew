import React from "react";

class TextBox extends React.Component {
  render() {
    return (
      <div>
        <input
          type={this.props.text}
          // value={this.props.value}
          placeholder={this.props.placeholder}
          id={this.props.id}
          onChange={this.props.onChange}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default TextBox;

import React from "react";
import Button from "../src/Components/Button";
import TextBox from "../src/Components/TextBox";
import Label from "../src/Components/Label";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      aa: ""
    };
  }

  onTextInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  onButtonClick = () => {
    this.setState({
      aa: this.state.value
    });
  };

  onButtonRemove = () => {
    this.setState({
      aa: ""
    });
  };

  render() {
    return (
      <div className="App">
        <TextBox
          type="text"
          value={this.state.value}
          onChange={this.onTextInputChange}
        />
        <Button type="submit" onClick={this.onButtonClick} />
        <Button type="reset" value="Reset" onClick={this.onButtonRemove} />
        <Label labelContent={this.state.aa} />
      </div>
    );
  }
}

export default App;

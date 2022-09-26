import React, { Component } from "react";
import Result from "./Result";
//@flashmike.com
//declare a random num
class App extends Component {
  static defaultProps = {
    //assign to secret
    secret: Math.floor(Math.random() * 10) + 1
  };

  //declare props
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  //setState
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //render the items
  render() {
    return (
      <div>
        <div>
          <label htmlFor="term">Guess A Number between 1 to 10: &nbsp;</label>

          <table width="600" border="1" cellspacing="1" cellpadding="1">
            <tr>
              <td>Name</td>
              <td>Credits</td>
              <td>Guess</td>
              <td>Points Earned</td>
              <td>Total Credits</td>
            </tr>
            <tr>
              <td>Player 1 (user)</td>
              <td>&nbsp;</td>
              <td>
                <input
                  id="term"
                  type="text"
                  name="term"
                  value={this.state.term}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <Result term={this.state.term} secretNum={this.props.secret} />
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Player 2</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Player 3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Player 4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Player 5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
    );
    //set condition if guess is correct or closest
    //add/subtract creditsEarned

    //once fixed, convert table to responsive div
  }
}
export default App;

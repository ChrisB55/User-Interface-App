import React, {Component} from "react";
import Button from '@material-ui/core/Button';


class Main extends Component {
  constructor(props) {
    super(props);
  
    this.state ={
      myForm: ''
    };
    this.inputUpdated = this.inputUpdated.bind(this); }

    inputUpdated(e) {
      const { value } = e.target;

      this.setState({myForm: value});
    }
  
  render() {
    return ( 
      <div>
        <form>
          <label> my form</label>
          <input
          className= "form-control"
          type= "input"
          value= {this.state.myForm}
          name= "myForm"
          onInput= {this.inputUpdated}
          />
          <br/>
          <Button 
          variant = "contained"
          color = "primary" >
          Hello World 
          </Button>

        </form>
      </div>

    );
  }
}

export default Main;

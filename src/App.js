import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //set up state
    this.state = {
      inputValue: "",
      todos: []
    }
  }
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  buttonSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") { // validation
      this.setState({
        todos: [this.state.inputValue, ...this.state.todos],
        inputValue: "",
      });
    }
  };
  buttonDone =(e) => {
    e.preventDefault();
    console.log('click');
  }
  buttonDelete =(e) =>{
    console.log('delete');
    
  }
  render() {
    return (
      <>
        <div className='container'> 
          <h1>TODO APP</h1> <br/>
          <div className='miniContainer'>
          <button>SignIn</button>
          <button>SignUp</button>
          </div>
          <form className='smallContainer' onSubmit={this.buttonSubmit}>
            <input onChange={this.inputChange} value={this.state.inputValue} type="text" placeholder="Nhập nhiệm vụ...." />
            <button onClick={this.buttonSubmit}>Add</button>
            <ol>
              {this.state.todos.map((todo, index) => (
                <div>
                  <li key={index}>{todo}</li>
                  <button onClick={this.buttonDelete}>Xoá</button>
                  <button onClick={this.buttonDone}>Xong</button>
                </div>
              ))}
            </ol>
          </form>
        </div>
      </>
    );
  }
}

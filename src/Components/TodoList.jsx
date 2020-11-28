import React from 'react'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            todos: [],
            line: false,
            hideSignUp: false,
            hideSignIn: false

        }
        this.inputChange = this.inputChange.bind(this);
        this.buttonSubmit = this.buttonSubmit.bind(this);
        this.buttonDone = this.buttonDone.bind(this);
        this.buttonDelete = this.buttonDelete.bind(this);
        this.buttonEdit = this.buttonEdit.bind(this);
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    signUp = (e) => {
        e.preventDefault(e);
        console.log('signUp')
        this.setState({ hideSignUp: !this.state.hideSignUp })
    }
    signIn = (e) =>{
        e.preventDefault(e);
        console.log('signIn')
        this.setState({ hideSignIn: !this.state.hideSignIn })
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
    buttonDone = () => {
        this.setState({ line: !this.state.line });
    }
    buttonEdit = () => {
        console.log('ok')
    }

    buttonDelete = (itemToRemove) => {
        let currentList = this.state.todos;
        currentList.splice(itemToRemove, 1);
        this.setState({ todos: currentList });

    }
    render() {
        const signUp =
            <div className='sign-up'>
                <form>
                    <h3>Đăng ký</h3>
                    <label>Name</label><br/>
                    <input type='text' /><br/>
                    <label>Password</label><br/>
                    <input type='password' /><br/>
                    <button>Đăng ký</button>
                </form>
            </div>
        const signIn = 
        <div className='sign-in'>
                <form>
                    <h3>Đăng nhập</h3>
                    <label>Name</label><br/>
                    <input type='text' /><br/>
                    <label>Password</label><br/>
                    <input type='password' /><br/>
                    <button>Đăng nhập</button>
                </form>
            </div>
            
        const hideS = this.state.hideSignUp ? signUp : '';
        const hideI = this.state.hideSignIn ? signIn : '';
        const li_class = this.state.line ? 't100' : 't001';
        return (
            <>
                <div className='container'>
                    <h1>TODO APP</h1> <br />
                    {hideS}{hideI}
                    <div className='miniContainer'>
                        <button onClick={this.signIn}>SignIn</button>
                        <button onClick={this.signUp}>SignUp</button>
                    </div>
                    <form className='smallContainer' onSubmit={this.buttonSubmit}>
                        <input onChange={this.inputChange} value={this.state.inputValue} type="text" placeholder="Nhập nhiệm vụ...." />
                        <button onClick={this.buttonSubmit}>Add</button>
                        <ol>
                            {this.state.todos.map((todo, index) => (
                                <div>
                                    <li key={index} className={li_class}>{todo}</li>
                                    <button onClick={this.buttonDelete}>Delete</button>
                                    <button onClick={this.buttonDone}>Done</button>
                                    <button onClick={this.buttonEdit}>Edit</button>
                                </div>
                            ))}
                        </ol>
                    </form>
                </div>
            </>
        );
    }
}
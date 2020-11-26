import React from 'react';
import '../css/SearchBar.css';

export default class SeachBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getWeatherByCityName(this.props.value);
        this.setState({ value: '' });
    }
    render() {
        return (
            <section className="top-banner">
                <div className="container">
                    <h1 className="heading">Simple Weather App</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search for a city"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <button type="submit">SUBMIT</button>
                        <span className="msg">{this.props.message}</span>
                    </form>
                </div>
            </section>
        );
    }
}
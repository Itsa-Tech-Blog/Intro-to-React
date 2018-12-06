import React, {Component} from 'react';
import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        let message = event.target.value
		this.setState({formInput: message})
    }

    render() {
        const {formInput} = this.state
        const {messageFromApp} = this.props
        return (
            <div>
                <h3>Form</h3>
                <p>{formInput}</p>
                <input type="text" placeholder='Type a message..' value={formInput} onChange={this.handleChange} />
                <p>{messageFromApp}</p>
            </div>
        )
    }
}

export default Form;

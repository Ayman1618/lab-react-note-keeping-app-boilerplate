import { Component } from "react";
import './Editor.css';

export default class TextEditor extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = { value: ''};
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <>
                <p>Kalvium Note</p>
                <div className="editor-container">
                    <div className="input-section">
                        <h2>Input</h2>
                        <textarea className="input-text" onChange={this.handleInputChange} defaultValue={this.state.value} />
                    </div>
                    <div className="output-section">
                        <h2>Pro Note</h2>
                        <div className="output-text">{this.state.value}</div>
                    </div>
                </div>
            </>
        )
    }
}

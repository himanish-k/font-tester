import { Component } from 'react'

export default class FontSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",
            options: [
                "serif",
                "sans-serif",
                "cursive",
                "system-ui"
            ],
            sampleText: "Lorem ipsum"
        };
        this.optionSelected = this.optionSelected.bind(this);
        this.sampleTextChanged = this.sampleTextChanged.bind(this);
    }

    componentDidMount() {
        console.log("Mounted");
        this.setState({ selectedOption: this.state.options[0] })
    }

    optionSelected(e) {
        const selected = e.target.value;
        console.log("option", selected);
        if (selected)
            this.setState({ selectedOption: selected })
    }

    sampleTextChanged(e) {
        const text = e.target.value;
        console.log("sample text", text);
        if (text)
            this.setState({ sampleText: text });
    }

    render() {
        return (
            <>
                <p>Font: {this.state.selectedOption}</p>
                <select name="fonts" onChange={this.optionSelected}>
                    {this.state.options.map((opt) =>
                        <option key={opt} value={opt}>{opt}</option>
                    )}
                </select>
                <p style={{ "font-family": this.state.selectedOption}}>{this.state.sampleText}</p>
                <textarea onChange={this.sampleTextChanged}></textarea>
            </>
        );
    }
}
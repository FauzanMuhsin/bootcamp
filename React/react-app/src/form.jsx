import { Component, useState, } from "react";

const Form = () => {
    const [first, setfirst] = useState("");
    const [last, setlast] = useState("");

    const handleChange1 = (event) => {
        setfirst(event.target.value);
    }
    const handleChange2 = (event) => {
        setlast(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("A name was submitted: " + first +" "+ last)
    }

    return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name : <br />
                    <input
                        type="text"
                        value={first}
                        onChange={handleChange1} 
                     />
                </label>
                <label>
                    Name : <br />
                    <input
                        type="text"
                        value={last}
                        onChange={handleChange2} 
                     />
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
}

// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ""};

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert("A name was submitted :" + this.state.value);
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input
//                         type="text"
//                         value={this.state.value}
//                         onChange={this.handleChange} 
//                      />
//                 </label>
//                 <input type="submit" value="submit"/>
//             </form>
//         )
//     }
// }

export default Form;
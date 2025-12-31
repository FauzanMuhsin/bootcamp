// import { Component } from "react";
import { useState } from "react";

const Counting = () => {
    const [count, setCount] = useState(0);
    return (
            <div>
            <p>liked: {count}</p>
            <button onClick={() =>setCount(count + 1)}> <p>like</p></button>

            </div>  
    );
};

// class Counting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }
//     render() {
//         return(
//             <div>
//             <h1>you clicked {this.state.count} times</h1>
//             <button onClick={() => this.setState({ count: this.state.count + 1})}>
//                  click me
//                  </button>
//             </div>            
//         )
//         }
// }

export default Counting;
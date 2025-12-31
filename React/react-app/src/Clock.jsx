import { Component, useEffect, useState } from "react";

const Clock = () => {
    const [date, setdate ] = useState(new Date())

    useEffect(() => {
        // mounting
        const timer = setInterval(() => {
            // updating
            setdate(new Date());
        }, 1000)

        // unmounting
        return () => {
            clearInterval(timer);
        }
    },[])
    return(
            <div>
                <h1>{date.toLocaleTimeString()}</h1>
            </div>
        )
}
// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {date : new Date()};
//     };
//     tick() {
//         this.setState({
//             date: new Date(),
//         })
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.state.date.toLocaleTimeString()}</h1>
//             </div>
//         )
//     }
// }

export default Clock;
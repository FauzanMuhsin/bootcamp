// import React,{Component} from "react";
import { useState } from "react";


const CommentItem = ({avatar, name, date, time, comment}) => {
    const [count, setCount] = useState(0);

    return (
        <div className="comment" style={{marginTop: 20}}>
            <a href="/" className="avatar">
                <img src={avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">
                        {date} at {time} | liked {count}
                    </span>
                </div>

                <div className="text"> {comment} </div>
                <div>
                <button onClick={() =>setCount(count + 1)}> <p>like</p></button>
                </div>
            </div>
        </div>
    )
}

// class CommentItem extends Component {
//     render() {
//         const {avatar, name, date, time, comment} = this.props;
//         return (
//         <div className="comment" style={{marginTop: 20}}>
//             <a href="/" className="avatar">
//                 <img src={avatar} alt="avatar" />
//             </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     {name}
//                 </a>
//                 <div className="metadata">
//                     <span className="date">
//                         {date} at {time} | <Counting/>
//                     </span>
//                 </div>

//                 <div className="text"> {comment} </div>
//             </div>
//         </div>
//     )
//     }
// }
export default CommentItem
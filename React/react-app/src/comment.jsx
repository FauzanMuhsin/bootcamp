import {faker} from "@faker-js/faker"
import CommentItem from "./CommentItem.jsx"
import React,{Component} from "react";
import UserContext from "./context.jsx"
import { useContext } from "react";


// --------------
// VERSI FUNCTION
// --------------
const Comment = () => {
    const user = useContext(UserContext)
  const data = [
    {
        avatar :faker.image.avatar(),
        name   :user.name,
        date   :"tanggal",
        time   :"jam 1",
        comment:"woy!!" + user.role,
    },
    {
        avatar :faker.image.avatar(),
        name   :user.name,
        date   :"woy!!",
        time   :"woy!!",
        comment:"woy!!",
    },
    {
        avatar :faker.image.avatar(),
        name   :"f0z0",
        date   :"woy!!",
        time   :"woy!!",
        comment:"woy!!",
    },
    ]
    return (
        <div className="ui comments">
            {data.map((item, index) =>(
                <CommentItem
                key      ={index}
                avatar   ={item.avatar}
                name     ={item.name}
                date     ={item.date}
                time     ={item.time}
                comment  ={item.comment}
                />
            ))}
        </div>
    );
};
// -----------
// VERSI CLASS
// -----------
// class Comment extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             data : [
//                 {
//                     avatar :faker.image.avatar(),
//                     name   :"faza",
//                     date   :"woy!!",
//                     time   :"woy!!",
//                     comment:"woy!!",
//                 },
//                 {
//                     avatar :faker.image.avatar(),
//                     name   :"fizi",
//                     date   :"woy!!",
//                     time   :"woy!!",
//                     comment:"woy!!",
//                 },
//                 {
//                     avatar :faker.image.avatar(),
//                     name   :"f0z0",
//                     date   :"woy!!",
//                     time   :"woy!!",
//                     comment:"woy!!",
//                 },
//             ]
//         }
//     }
//     render() {

//         return (
//             <div className="ui container comments">
//             {this.state.data.map((item, index) =>(
//                 <CommentItem
//                 key      ={index}
//                 avatar   ={item.avatar}
//                 name     ={item.name}
//                 date     ={item.date}
//                 time     ={item.time}
//                 comment  ={item.comment}
//                 />
//             ))}
//         </div>
//     );
// }};

export default Comment

// export default Comment
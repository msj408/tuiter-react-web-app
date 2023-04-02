import React from "react";
const PostSummaryItem = (
    {
        post = {
            "_id":"123",
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tuit": "",
            "handle":""
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                   <img src={post.image} width={70} className="float-start rounded" />
                </div>

                <div className="col-10">
                    <div className="fw-bolder float-left">{post.username} <span className="fw-normal">{post.handle} - {post.time}</span></div>
                    <div>{post.tuit}</div>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;


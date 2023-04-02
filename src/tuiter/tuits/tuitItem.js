import React from "react";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useSelector, useDispatch} from "react-redux";
const tuitItem = (key, post )=> {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={post.image} className="col-12 rounded-circle"/>

                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                        <div className="row">
                        <div className="col-12 fw-light text-secondary"><span
                            className="fw-bold text-black">{post.Name}</span> <i
                            className="fa-check fa-solid text-white"></i> {post.userName} {post.time}</div>
                    </div>
                    <div className="row">
                        <div className="col-12 fw-light text-secondary">{post.tuit}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10"><i className="fa-regular fa-message col-2 text-center"></i> <i
                    className="fa-solid fa-retweet text-center col-3"></i> <i
                    className="fa-regular fa-heart text-center col-3"></i> <i
                    className="fa-solid fa-share  text-center col-3"></i></div>
            </div>
        </li>
    );
};
export default tuitItem;


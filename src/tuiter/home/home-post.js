import React from "react";
import {useSelector} from "react-redux";
const HomePostItem  = () => {
    {
        const postItem = useSelector(
            (state) => state.tuits);

        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={postItem.image} className="col-12 rounded-circle"/>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 fw-light text-secondary"><span
                                className="fw-bold text-black">{postItem.Name}</span> <i
                                className="fa-check fa-solid text-white"></i> {postItem.userName} {postItem.time}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 fw-light text-secondary">{postItem.tuit}</div>
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
    }
}
export default HomePostItem;


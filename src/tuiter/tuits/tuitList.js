import React from "react";
import {useSelector} from "react-redux";
import tuitItem from "./tuitItem";

const TuitsList = () => {
   const homePosts = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
        <li className="list-group-item">Tuits</li>
            {
                homePosts.map(post =>
                    <tuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitsList;
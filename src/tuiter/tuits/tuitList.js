import React from "react";
import {useSelector} from "react-redux";
import tuitItem from "./tuitItem";

const HomePostList = () => {
   const homePosts = useSelector(state => this.state.tuits)
    return(
        <ul className="list-group">
            {
                homePosts.map(post =>
                    <tuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomePostList;
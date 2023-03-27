import React from "react";
import {useSelector} from "react-redux";
import HomePostItem from "./home-post";

const HomePostList = () => {
    const homePosts = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                homePosts.map(post =>
                    <HomePostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomePostList;
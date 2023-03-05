import React from "react";
import homePosts from './home-post.json';
import HomePostItem from "./home-post";

const HomePostList = () => {
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
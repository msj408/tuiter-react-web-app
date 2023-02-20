import postItem from "./PostItem.js";
import PostItemList from "./PostItemList.js";

const PostItemSummary = () =>{
    return(`
      <ul class ="list-group">
         ${
        postItem.map(posts => {
            return(PostItemList(posts));
        }).join('')
    }
      </ul>
   `);
}
export default PostItemSummary;
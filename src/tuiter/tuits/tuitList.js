import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
   const {tuits, loading} = useSelector(
       state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <div className="col-12">
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            { console.log(tuits)}
            {

                tuits.map(post =>
                    <TuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
        </div>
    );
};
export default TuitsList;
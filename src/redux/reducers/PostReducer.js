import PostData from "../../assets/data/DataPosts.json"
import { POST__ADD, POST__DELETE, POST__UPDATE, GET_POST_EDIT, POST_SEARCH } from "../types/PostType";
import toast from 'react-hot-toast';


export const PostReducer = (state = PostData, action) => {

    switch (action.type) {
        case POST__ADD: {
            let postListUpdate = [...state.posts];
            postListUpdate.push(action.postInputData);
            state.posts = postListUpdate;
            toast.success("Add sucess")
            return { ...state }
        }
        case POST__UPDATE: {
            let postListUpdate = [...state.posts];
            let index = postListUpdate.findIndex(post => post.postId === action.editPostData.postId);
            if (index !== -1) {
                postListUpdate[index] = action.editPostData;
            }
            state.posts = postListUpdate;
            toast.success("Edit sucess")
            return { ...state }
        }
        case POST__DELETE: {
            state.posts = state.posts.filter(post => post.postId !== action.postId)
            toast.success("Delete sucess")

            return { ...state }
        }
        case GET_POST_EDIT: {
            let postListGet = [...state.posts];
            let index = postListGet.findIndex(post => post.postId === action.postId);
            if (index !== -1) {
                state.postEdit = postListGet[index];
            }
            return { ...state }

        }
        case POST_SEARCH: {

            return { ...state }

        }
        default: return { ...state }
    }
}
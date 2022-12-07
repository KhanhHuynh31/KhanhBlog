import { POST__ADD, POST__DELETE, POST__UPDATE, GET_POST_EDIT, POST_SEARCH } from '../types/PostType'

export const AddPostAction = (postInputData) => {
    return {
        type: POST__ADD,
        postInputData,
    }
}
export const UpdatePostAction = (editPostData) => {
    return {
        type: POST__UPDATE,
        editPostData,
    }
}
export const DeletePostAction = (postId) => {
    return {
        type: POST__DELETE,
        postId,
    }
}
export const GetPostAction = (postId) => {
    return {
        type: GET_POST_EDIT,
        postId,
    }
}
export const SearchPostAction = (searchText) => {
    return {
        type: POST_SEARCH,
        searchText,
    }
}



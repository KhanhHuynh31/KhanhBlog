import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./ListPost.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { DeletePostAction, GetPostAction } from "../../../redux/actions/PostAction"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function ListPost() {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const postListData = useSelector(state => state.PostReducer.posts);
    const renderPostList = () => {
        return postListData.map((post, index) => {
            return <tr key={index}>
                <td>{post.postId}</td>
                <td>{post.postTitle}</td>
                <td>{post.postTags}</td>
                <td>{post.postType}</td>
                <td>{post.postDescription}</td>
                <td>{post.postDate}</td>
                <td>
                    <Link to={"/edit-post/" + post.postId} className="button__action" onClick={() => { dispatch(GetPostAction(post.postId)) }}> <FontAwesomeIcon icon={faPenToSquare} /></Link>
                    <a className="button__action" onClick={() => {
                        if (window.confirm('Are you sure delete ' + post.postTitle)) {
                            dispatch(DeletePostAction(post.postId));
                        }
                    }}> <FontAwesomeIcon icon={faTrashCan} /></a>
                </td>
            </tr>
        })
    }
    return (
        <div>
            <div className='table__posts'>
                <table className="table__template">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">{t("title")}</th>
                            <th scope="col">{t("Tag")}</th>
                            <th scope="col">{t("category")}</th>
                            <th scope="col">{t("description")}</th>
                            <th scope="col">{t("date")}</th>
                            <th scope="col">{t("action")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPostList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

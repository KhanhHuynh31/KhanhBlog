import React, { useState } from 'react';
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
    let maxPostList = postListData.length;
    let page = parseInt(maxPostList / 5);
    const [pre, setPre] = useState(0);

    const renderPagination = (numberItem) => {
        return Array(page + 1).fill(0).map((item, index) => {
            return <div key={index}>
                <a className={pre / 5 === index ? "active" : null}
                    onClick={() => setPre(index * numberItem)}>
                    {index + 1}
                </a>
            </div>
        })
    }
    const getType = (value) => {
        switch (parseInt(value, 10)) {
            case 1:
                return "React JS"
            case 2:
                return "Utility"
            default:
                return "Other"
        }
    };
    const renderPostList = () => {
        return postListData.slice(pre, pre + 5).map((post, index) => {
            return <tr key={index}>
                <td>{post.postId}</td>
                <td>{post.postTitle}</td>
                <td>{post.postTags}</td>
                <td>{getType(post.postType)}</td>
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
        <div className='list__content'>
            <h2 className='list__title'>List Posts</h2>
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
            <div className="pagination">
                <a onClick={() => { setPre(0) }}>&laquo;</a>
                {renderPagination(5)}
                <a onClick={() => { setPre(page * 5) }}>&raquo;</a>
            </div>
        </div>
    )
}

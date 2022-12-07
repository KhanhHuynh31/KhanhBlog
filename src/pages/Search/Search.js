import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostsItem from '../../components/Posts/PostsItem'
import { SearchModalAction } from '../../redux/actions/ModalAction';
import "./Search.css"

export default function Search() {
    const dispatch = useDispatch();
    let { searchText } = useParams();
    useEffect(() => {
        dispatch(SearchModalAction(false))
    }, [searchText]);
    return (
        <div>
            <div className='search__header'>
                <h3>Search results for keyword: {searchText}</h3>
            </div>
            <div className='search__result'>
                <PostsItem />
            </div>
        </div>
    )
}

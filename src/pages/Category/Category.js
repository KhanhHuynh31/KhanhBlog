import React from 'react'
import PostsItem from '../../components/Posts/PostsItem'
import "./Category.css"
import { Link } from "react-router-dom";

export default function Category() {

    return (
        <div className='category__main'>
            <div className='category__header'>
                <div className='header__category'>
                    <h2>Category</h2>
                    <hr></hr>
                </div>
            </div>

            <div className='category__content'>
                <div className='content__main'>
                    <div className='content__order'>
                        <div className='order__left'>
                            <h3>Order by</h3>
                        </div>
                        <div className='order__right'>
                            <ul>
                                <li><Link to="?sortType=1">A-Z </Link></li>
                                <li><Link to="?sortType=2">Z-A </Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <PostsItem />
                </div>
                <div className='content__list'>
                    <div className='category__item'>
                        <h3>Categories</h3>
                        <ul>
                            <li><Link to={"/category/1"}>React Basic</Link></li>
                            <li><Link to={"/category/2"}>Utilities</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

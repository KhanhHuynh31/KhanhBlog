import React, { useState } from 'react'
import { SearchModalAction } from '../../redux/actions/ModalAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./SearchModal.css"

export default function SearchModal() {
    const dispatch = useDispatch();
    const searchStatus = useSelector(state => state.ModalReducer.searchModal);
    const [searchText, setSearchText] = useState()
    const { t } = useTranslation();
    const navigate = useNavigate();
    const getSearchText = (event) => {
        const value = event.target.value;
        setSearchText(value.trim());
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (searchText === undefined || searchText === "") {
            toast.error("You must enter a keyword")
        }
        else {
            navigate('/search/' + searchText)
        }
    }
    return (
        <div>
            <div id="popup__search" className={searchStatus ? ("modal__box modal__active") : ("modal__box")}>
                <div className="modal__popup">
                    <div className='modal__header'>
                        <div className="modal__close" onClick={() => { dispatch(SearchModalAction(false)) }}>×</div>
                    </div>
                    <div className="modal__content">
                        <form className='search__modal' onSubmit={handleSubmitLogin}>
                            <input type="text" className='search__input' onChange={getSearchText} />
                            <button type='submit' className='search__button'>{t('search')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

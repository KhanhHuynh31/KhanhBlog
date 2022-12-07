import React, { useState, useRef } from 'react'
import "./ManagePost.css"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPostAction, UpdatePostAction } from '../../../redux/actions/PostAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import { useTranslation } from 'react-i18next';

const schema = yup.object({
  postTitle: yup.string().required(),
  postDescription: yup.string().required(),
  postType: yup.string().required(),
  postTags: yup.string().required(),
  postImage: yup.string().required()
}).required();
export default function ManagePost() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const postEditData = useSelector(state => state.PostReducer.postEdit);
  let { id } = useParams();
  const [editorText, setEditorText] = useState(postEditData.postContent);
  const postListData = useSelector(state => state.PostReducer.posts);

  const editorRef = useRef(useState(postEditData.postContent));
  const log = () => {
    if (editorRef.current) {
      setEditorText(editorRef.current.getContent());
    }
  };


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    const date = new Date().toLocaleString();
    if (id !== undefined) {
      let dataEdit = {
        ...data,
        postContent: editorText,
        postDate: date,
        postId: id

      }
      dispatch(UpdatePostAction(dataEdit));
    } else {
      let maxValueOfY = Math.max(...postListData.map(o => o.postId), 0);
      alert(maxValueOfY)
      let dataPost = {
        ...data,
        postContent: editorText,
        postDate: date,
        postId: maxValueOfY + 1

      }
      dispatch(AddPostAction(dataPost));
    }
  };

  return (
    <div className='post__container'>
      <div className='post__content'>
        <form className='post__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='item__left'>
            <div className='post__item'>
              <p>
                {t("post title")}
                {errors.postTitle && <span className='alert__item'> {errors.postTitle.message}</span>}
              </p>
              <input type="text" defaultValue={postEditData.postTitle} {...register("postTitle")} ></input>
            </div>
            <div className='post__item'>
              <p>
                {t("post description")}
                {errors.postDescription && <span className='alert__item'> {errors.postDescription.message}</span>}
              </p>
              <textarea type="text" className="desc__input" defaultValue={postEditData.postDescription} {...register("postDescription")}></textarea>
            </div>
          </div>
          <div className='item__right'>
            <div className='post__item'>
              <p>
                {t("post category")}
                {errors.postType && <span className='alert__item'> {errors.postType.message}</span>}
              </p>
              <input type="text" defaultValue={postEditData.postType} {...register("postType")}></input>
            </div>
            <div className='post__item'>
              <p>
                {t("post tag")}
                {errors.postTags && <span className='alert__item'> {errors.postTags.message}</span>}
              </p>
              <input type="text" placeholder={t("tag 1, tag 2, ...")} defaultValue={postEditData.postTags} {...register("postTags")}></input>
            </div>
            <div className='post__item'>
              <p>
                {t("post image")}
                {errors.postImage && <span className='alert__item'> {errors.postImage.message}</span>}
              </p>
              <input type="text" placeholder={t("image url: https://image.png")} defaultValue={postEditData.postImage} {...register("postImage")}></input>
            </div>
          </div>
          <div className='post__item main__input'>
            <p>
              {t("post content")}
            </p>
            <Editor
              apiKey='qqcfb0qid0ghvvpl2t7ya6zeljdcmk0imjd2xxnnnawodpnn'
              onInit={(evt, editor) => editorRef.current = editor}
              value={editorText}
              init={{
                height: 320,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample',
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              onEditorChange={log}
            />
            <button className='post__save' type='submit'>{t("submit")}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

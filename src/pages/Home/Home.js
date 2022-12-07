import React from 'react'
import LatestPosts from '../../components/Posts/LatestPosts';
import PostsItem from '../../components/Posts/PostsItem';
import Slider from '../../components/Slider/Slider';

export default function Home() {
  return (
    <div>
      <Slider />
      <LatestPosts />
      <PostsItem  />
    </div>
  )
}

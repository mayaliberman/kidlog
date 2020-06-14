import React, { Component, useState, useEffect, Fragment } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
class PostsContainer extends Component {
  state = {
    posts: [],
    loading: true,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await await axios.get(`http://localhost:5000/posts`);
    this.setState({ posts: res.data.data, loading: false });
    console.log(this.state.posts);
  }
  render() {
    const { posts } = this.state;
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {posts.map((post) => {
            return (
              <PostCard
                key={post._id}
                desc={post.desc}
                lessonNum={post.lessonId.lessonNum}
                date={post.createdAt}
                lessonTags={post.lessonId.tags}
                childId={post.childId}
                children={post.userId.children}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default PostsContainer;

import React, { Component } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACESS_KEY, UNSPLAH_SECRET_KEY } from '../config';
import Image from '../assets/welcome-bg.png';

const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACESS_KEY,
  secret: UNSPLAH_SECRET_KEY,
});

class PostsContainer extends Component {
  state = {
    posts: [],
    loading: true,
    photos: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`http://localhost:5000/posts`);
    this.setState({
      posts: res.data.data,
      loading: false,
    });
    await unsplash.search
      .photos('forest', 1, this.state.posts.length, { orientation: 'portrait' })
      .then(toJson)
      .then((json) => {
       
        this.setState({ photos: json });
      });
    
   
    
   
    
    // Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
  }
  render() {
    const { posts } = this.state;
    const { results } = this.state.photos;
   console.log(results)
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {posts.map((post, index) => {
            return (
              <PostCard
                key={post._id}
                desc={post.desc}
                lessonNum={post.lessonId.lessonNum}
                date={post.createdAt}
                lessonTags={post.lessonId.tags}
                childId={post.childId._id}
                childName={post.childId.name}
                defaultPhoto={results ? results[index].urls.regular : Image}
                photoTitle={results ? results[index].alt_description : null}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default PostsContainer;

import React, { Component, useState, useEffect, Fragment } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

// import fetch from 'node-fetch';
// global.fetch = fetch;



class PostsContainer extends Component {
  state = {
    posts: [],
    loading: true,
    photos: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`http://localhost:5000/posts`);
    fetch(
      'https://api.unsplash.com/photos/?client_id=' +
        'XOK4FGW__qzPpLipWLJPZ63m3KBAun3RPmESR9tGO5o'
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ photos: data });
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  //  const photos = await axios.get('https://api.unsplash.com/search/photos', {
  //    params: { query: 'forest' },
  //    headers: {
  //      Authorization: `Client-ID ${process.env.UNSPLASH_ACESS_KEY}`,
  //    },
  //  });
    //api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    this.setState({
      posts: res.data.data,
      loading: false,
      
    });
    console.log(this.state.posts);
    console.log(this.state.photos)
    
    // Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
  }
  render() {
    const { posts } = this.state;
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
                defaultPhoto={this.state.photos}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default PostsContainer;

import React, { useEffect, useContext } from 'react';
import PostCard from './PostCard/PostCard.jsx';
import Image from '../../assets/welcome-bg.png';
import Spinner from '../../components/ui/Spinner';
import PostContext from '../../context/post/postContext';

const PostsContainer = () => {
  const postContext = useContext(PostContext);
  const { posts, photos, loading, getUnsplashPhoto, getPosts } = postContext;
  const { results } = photos;

  useEffect(() => {
    getUnsplashPhoto();
    getPosts();
  }, []);

  // Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else if (posts.length < 1) {
    return (
      <div>
        <h1>No Posts Uploaded Yet</h1>
      </div>
    );
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
};

export default PostsContainer;

import React, { useState , useEffect} from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACESS_KEY, UNSPLAH_SECRET_KEY } from '../../config';
import Image from '../../assets/welcome-bg.png';
import Spinner from '../../components/ui/Spinner'

const unsplash = new Unsplash({
  accessKey: UNSPLASH_ACESS_KEY,
  secret: UNSPLAH_SECRET_KEY,
});

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/posts`);
    await unsplash.search
      .photos('children', 1, posts.length, { orientation: 'portrait' })
      .then(toJson)
      .then((json) => {
        setPhotos(json);
      });
    setPosts(res.data.data);
    setLoading(false);

  }, [])
    
 
  // Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
 
  const { results } = photos;
 
  if (loading) {
    return (
      <div>
        <Spinner />
         
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
  
}

export default PostsContainer;

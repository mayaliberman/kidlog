import React, {useState, useEffect, Fragment} from 'react';
import PostCard from './PostCard';
import axios from 'axios';
const PostsContainer = () => {
 const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const result = await axios('http://localhost:5000/posts');
       if (!ignore) setData(result.data);
    }
    fetchData();
    
     return () => {
       {ignore = true};
     };
 
  }, []);
    console.log(data.data);
 
        return (
          <div>
            {data.data.posts.map(post => {
              return <PostCard desc={post.desc}/>
            })}

          </div>
          
        );
    
};

export default PostsContainer;
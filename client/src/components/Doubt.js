import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./posts/posts"


const Doubt = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
      //   console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return <div>
		<Posts posts={posts} />
	</div>;
};

export default Doubt;

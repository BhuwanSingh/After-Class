import React, { useEffect, useState } from "react";
import axios from "axios";

const Doubt = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
    //   console.log(res);
			setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return <div>discuss karlo</div>;
};

export default Doubt;

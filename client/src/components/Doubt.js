import { useEffect, useState } from "react";
import Posts from "./posts/Posts";
import './Doubt.css';
import axios from "axios";
import { useLocation } from "react-router";

export default function Doubt() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import "./bookpost.css";

export default function Post({img,title,description,price,postedAt,category,contact}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
        {category}
            </Link>
          </span>
       
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{postedAt}</span>
      </div>
      <p className="postDesc">
       {description}
      </p>
       <p className="postDesc">Contact :  
        {contact}
      </p>
        <p className="postDesc">
        {price}
      </p>
    </div>
  );
}
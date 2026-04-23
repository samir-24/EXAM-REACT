import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions";

const PostDetails = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="card p-3 mb-3">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <button 
        className="btn btn-danger"
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default PostDetails;
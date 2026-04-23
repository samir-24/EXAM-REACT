import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={post.id}>
            
            <div className="card h-100 shadow-sm" style={{ borderRadius: "12px" }}>
              
              <img
                src={post.image}
                alt="blog"
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px"
                }}
              />

              <div className="card-body d-flex flex-column">

                <span className="badge bg-primary mb-2">
                  {post.category}
                </span>

                <h5 className="fw-bold">{post.title}</h5>

                <p className="text-muted">
                  {post.description?.slice(0, 70)}...
                </p>

                <div className="mt-auto">
                  <p className="text-muted small mb-1">
                    📅 {post.date}
                  </p>

                  <p className="text-muted small mb-2">
                    ✍ {post.author}
                  </p>

                  {user === post.author && (
                    <div className="d-flex gap-2">
                      
                      <button
                        className="btn btn-outline-danger btn-sm w-50"
                        onClick={() => dispatch(deletePost(post.id))}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-outline-primary btn-sm w-50"
                        onClick={() => navigate(`/edit/${post.id}`)}
                      >
                        Edit
                      </button>

                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default PostList;
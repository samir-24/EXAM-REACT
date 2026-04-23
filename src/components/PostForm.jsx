import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const posts = useSelector((state) => state.posts);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    image: ""
  });
  
  useEffect(() => {
    if (id && posts.length > 0) {
      const existingPost = posts.find(
        (p) => String(p.id) === String(id)
      );

      if (existingPost) {
        setForm(existingPost);
      }
    }
  }, [id, posts]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("user");

    const newPost = {
      ...form,
      author: user
    };

    if (id) {
      dispatch(updatePost(newPost));
    } else {
      dispatch(addPost(newPost));
    }

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Post" : "Add Post"}</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          name="title"
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="category"
          className="form-control mb-2"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="form-control mb-2"
          value={form.date}
          onChange={handleChange}
        />

        <input
          name="image"
          className="form-control mb-2"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button className="btn btn-success">
          {id ? "Update" : "Add"}
        </button>

      </form>
    </div>
  );
};

export default PostForm;
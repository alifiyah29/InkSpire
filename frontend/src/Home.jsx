import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          className="title-color"
          blogs={blogs}
          title={<span style={{ color: "#16325b" }}>All Blogs</span>}
        />
      )}
    </div>
  );
};

export default Home;

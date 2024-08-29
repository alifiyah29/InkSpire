import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "The Future of Web Development",
      body: "Web development is evolving rapidly with new frameworks and technologies emerging every day. This blog explores the trends that are shaping the future of the web, including AI-driven tools, serverless architectures, and the rise of Progressive Web Apps (PWAs).",
      author: "Jane Doe",
      id: 1,
    },
    {
      title: "10 Tips for Effective Remote Work",
      body: "Remote work has become the new norm, but staying productive while working from home can be challenging. In this article, we share ten practical tips to help you stay focused, manage your time effectively, and maintain a healthy work-life balance.",
      author: "John Smith",
      id: 2,
    },
    {
      title: "Understanding the Basics of Machine Learning",
      body: "Machine learning is a crucial aspect of modern AI, but understanding its core concepts can be daunting. This post breaks down the basics of machine learning, explaining key terms, algorithms, and the types of problems it can solve.",
      author: "Alice Johnson",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs)
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Jane Doe")}
        title="Jane's Blogs"
      />
    </div>
  );
};

export default Home;

import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetching data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
      return <p className="text-red-500 text-center">Error: {error.message}</p>;
    }

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Posts</h2>
        <ul className="space-y-2">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="p-3 bg-gray-100 rounded-lg shadow">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;

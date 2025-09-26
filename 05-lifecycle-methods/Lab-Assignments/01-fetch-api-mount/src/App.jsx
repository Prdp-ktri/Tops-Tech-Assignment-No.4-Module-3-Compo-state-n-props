import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=15")
    .then((response) => {
      if(!response.ok){
        throw new Error(`HTTP Error Status: ${response.status}`)
      }
      return response.json();
    })
    .then((data)=>{
      this.setState({
        posts: data,
        loading: false,
      })
    })
    .catch((error)=>{
      this.setState({
        error: error,
        loading: false,
      })
      console.error("Fetch Error:", error)
    })
  }

  render() {
    const {posts, loading, error} = this.state;

    if(loading){
      return <div>Loading posts...</div>
    }

    if(error){
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
        <h1>Latest Posts</h1>
        <ul>
          {posts.map((post)=>(
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

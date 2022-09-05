import React from "react";
import Header from "./Header";
import Post from "./Post";

const posts = [
  { title: 'title#01', subtitle: 'Sub#01', likes: 20},
  { title: 'title#02', subtitle: 'Sub#02', likes: 10},
  { title: 'title#03', subtitle: 'Sub#03', likes: 50}
]


function App() {
  return (
    <>
      <Header>
        <h2>posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;

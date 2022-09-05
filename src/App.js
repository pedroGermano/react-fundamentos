import React from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <>
      <Header>
        <h2>posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />

      <Post
        likes={20}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        likes={20}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03",
        }}
      />
    </>
  );
}

export default App;

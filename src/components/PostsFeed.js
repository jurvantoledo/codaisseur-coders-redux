// src/component/PostFeed.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: false,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `${API_URL}/posts?offset=${data.posts.length}&limit=5`
    );

    const morePosts = response.data.rows;

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
    console.log(morePosts);
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
            {post.tags.map((tag) => {
              return <p key={tag.id}>{tag.tag}</p>;
            })}
          </div>
        );
      })}
      <button onClick={fetchNext5Posts}>Load more</button>
    </div>
  );
}

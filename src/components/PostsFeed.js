// src/component/PostFeed.js

import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, postsFetched } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selector";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  async function fetchNext5Posts() {
    dispatch(startLoading);
    const response = await axios.get(
      `${API_URL}/posts?offset=${posts.length}&limit=5`
    );

    const morePosts = response.data.rows;

    dispatch(postsFetched(morePosts));
    console.log(morePosts);
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map((post) => {
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
      {loading}
      <em>loading...</em>
      <button onClick={fetchNext5Posts}>Load more</button>
    </div>
  );
}

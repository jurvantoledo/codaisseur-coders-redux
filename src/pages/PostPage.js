import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchPost from "../store/PostPage/actions";
import selectFeedPosts from "../store/PostPage/selectors";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { selectPostAndComments } from "../store/PostPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(selectFeedPosts);
  console.log("?", post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  //const postData = useSelector(selectPostAndComments);

  return (
    <div>
      <p>
        <p>{post.title}</p>
        <ReactMarkdown source={post.content} />
        <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
      </p>
    </div>
  );
}

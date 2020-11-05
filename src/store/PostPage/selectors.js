export default function selectPosts(reduxState) {
  console.log(reduxState.PostPage.post);
  return reduxState.PostPage.post;
}

export function selectComments(reduxState) {
  console.log("COMMENTS", reduxState.PostPage.comments);
  return reduxState;
}

export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}

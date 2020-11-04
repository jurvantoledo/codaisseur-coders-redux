export default function selectFeedPosts(reduxState) {
  console.log(reduxState.PostPage);
  return reduxState.PostPage.post;
}

export function selectComments(reduxState) {
  console.log("COMMENTS", reduxState.PostPage.comments);
  return reduxState;
}

import { PostItem } from "./PostItem";

export function PostList({ postItem }) {
  return (
    <div>
      {postItem.map((post) => (
        <PostItem title={post.title} body={post.body} />
      ))}
    </div>
  );
}

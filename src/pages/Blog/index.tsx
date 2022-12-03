import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchArea } from "./components/SearchArea";
import { BlogContainer, PostsAreaContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <main>
        <Profile />
        <SearchArea />

        <PostsAreaContainer>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsAreaContainer>
      </main>
    </BlogContainer>
  );
}

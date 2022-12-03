import { Profile } from "./components/Profile";
import { SearchArea } from "./components/SearchArea";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <main>
        <Profile />
        <SearchArea />
      </main>
    </BlogContainer>
  );
}

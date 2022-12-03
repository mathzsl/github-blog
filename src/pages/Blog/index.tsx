import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchArea } from "./components/SearchArea";
import { BlogContainer, PostsAreaContainer } from "./styles";

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface iPost {
  title: string;
  body: string;
  created_at: string;
  node_id: string;
  html_url: string;
  number: number;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<iPost[]>([]);

  const getPosts = useCallback(
    async function loadPosts(query: string = "") {
      try {
        const response = await api.get(
          `search/issues?q=${query}%20repo:${userName}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts)

  return (
    <BlogContainer>
      <main>
        <Profile />
        <SearchArea />

        <PostsAreaContainer>
          {posts.map((post) => (
            <Post key={post.node_id} data={post} />
          ))}
        </PostsAreaContainer>
      </main>
    </BlogContainer>
  );
}

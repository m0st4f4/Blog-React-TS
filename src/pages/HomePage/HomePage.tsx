import { FeaturedPosts } from "@/components/FeaturedPosts/FeaturedPosts.tsx";
import { LatestPosts } from "@/components/LatestPosts/LatestPosts.tsx";

export const HomePage = () => {
  return (
    <>
      <FeaturedPosts />
      <LatestPosts />
    </>
  );
};

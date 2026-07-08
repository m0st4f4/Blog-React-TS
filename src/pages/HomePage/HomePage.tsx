import { FeaturedPosts } from "@/components/FeaturedPosts/FeaturedPosts.tsx";
import { LatestPosts } from "@/components/LatestPosts/LatestPosts.tsx";

export const HomePage = () => {
  return (
    <div className="container">
      <FeaturedPosts />

      <LatestPosts />
    </div>
  );
};

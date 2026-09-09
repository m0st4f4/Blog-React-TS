import { type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";
import { PostCardTopImgSkeleton } from "@/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";

type Props = {
  className?: string;
};

const ArticleListSkeleton = ({ className = "" }: Props): ReactNode => {
  return (
    <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <PostCardTopImgSkeleton key={index} />
      ))}
    </div>
  );
};

export default ArticleListSkeleton;

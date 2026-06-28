import type { UserType } from "@/types/user.types.ts";

export type ArticleType = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images: string[];
  userId: string;
  categoryId: string;
  tagId: string | string[];
  status: "published" | "draft";
  isFeatured: true;
  isPremium: false;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  category?: CategoryType;
  user?: UserType;
};

export type TagType = {
  id: string;
  name: string;
  slug: string;
  color: string;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  image: string;
  color: string;
  isActive: boolean;
  order: number;
  createdAt: string;
};

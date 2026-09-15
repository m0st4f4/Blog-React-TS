export type CommentType = {
  id: string;
  articleId: string;
  userId: string;
  parentId: null | string;
  content: string;
  status: CommentStatus;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
};

type CommentStatus = "approved" | "pending";

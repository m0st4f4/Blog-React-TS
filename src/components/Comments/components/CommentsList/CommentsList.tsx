import { type ComponentPropsWithRef, type ReactNode } from "react";



import { useTranslation } from "react-i18next";



import { CommentItem } from "@/components/Comments/components/ComponentItem/CommentItem.tsx";
import { CommentItemSkeleton } from "@/components/Comments/components/ComponentItem/CommentItemSkeleton.tsx";
import { useGetComments } from "@/components/Comments/hooks/useGetComments.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";



import { useLocalizedDate } from "@/hooks/useLocalizedDate.ts";














type Props =ComponentPropsWithRef<"div"> &  {
  className?: string;
  articleId: string;
};

export const CommentsList = ({
  className = "",
  articleId,
  ref
}: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetComments({
    articleId,
    _expand: ["user"],
  });
  const {t}=useTranslation()

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  return (
    <div ref={ref} className={className}>
      <div className="flex justify-start gap-2 items-center mb-4">
        <h2 className="text-lg font-bold">{t("comment.title")}</h2>
        {data && data?.length > 0 && <span>({data?.length})</span>}
      </div>
      <div className="flex flex-col gap-2">
        {isPending
          ? Array.from({ length: 6 }).map((_, index) => (
              <CommentItemSkeleton key={index} />
            ))
          : data?.map((item) => {
              return <CommentItem key={item.id} item={item} />;
            })}
      </div>
    </div>
  );
};

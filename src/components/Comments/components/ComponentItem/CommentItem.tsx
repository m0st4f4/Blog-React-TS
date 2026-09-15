import { type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";
import type { CommentResponse } from "@/services/commentService.ts";

import { AuthorDetails } from "@/components/AuthorDetails/AuthorDetails.tsx";
import { useLocalizedDate } from "@/hooks/useLocalizedDate.ts";

type Props = {
  className?: string;
  item: CommentResponse | null;
};

export const CommentItem = ({ className = "", item }: Props): ReactNode => {
  const { formatDate } = useLocalizedDate();
  return (
    <div className={cn(className, "p-6 rounded shadow-2xs")}>
      <div className="flex justify-between">
        {item?.user && <AuthorDetails item={item?.user} />}

        {item?.updatedAt && (
          <div className="text-xs">
            {formatDate(item?.updatedAt,"medium")}
          </div>
        )}
      </div>

      <div className="mt-8 text-sm">{item?.content}</div>
    </div>
  );
};

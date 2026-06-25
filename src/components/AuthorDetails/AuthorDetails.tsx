import type { ReactNode } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetUser } from "@/hooks/useGetUser.ts";

type Props = {
  authorId: string;
};
export const AuthorDetails = ({ authorId }: Props): ReactNode => {
  const { data, isPending, isError } = useGetUser(authorId);
  if (!data) {
    return <p>Can't find user</p>;
  }
  if (isPending) {
    return (
      <div className="flex gap-2">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid justify-between">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    );
  }
  if (isError) {
    return <p>Error in loading</p>;
  }
  return (
    <div className="flex gap-2">
      <Avatar size="lg">
        <AvatarImage src={data.avatar} alt={data.name} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="grid justify-between">
        <div className="text-sm">{data.name}</div>
        <div className="text-xs">{data.bio}</div>
      </div>
    </div>
  );
};

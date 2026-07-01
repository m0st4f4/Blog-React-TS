import type { ReactNode } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

import type { UserType } from "@/types/user.types.ts";

type Props = {
  item: UserType;
};
export const AuthorDetails = ({ item }: Props): ReactNode => {
  return (
    <div className="flex gap-2">
      <Avatar size="lg">
        <AvatarImage src={item.avatar} alt={item.name} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="grid justify-between">
        <div className="text-sm">{item.name}</div>
        <div className="text-xs">{item.bio}</div>
      </div>
    </div>
  );
};

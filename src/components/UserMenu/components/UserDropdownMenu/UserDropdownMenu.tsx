import { type ReactNode } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

import MingcuteUploadLine from "@/icons/MingcuteSignout.tsx";
import MingcuteUser1Line from "@/icons/MingcuteUser1Line.tsx";

import type { UserType } from "@/types/user.types.ts";

type Props = {
  user: UserType;
  onLogout: () => void;
};

export const UserDropdownMenu = ({ user, onLogout }: Props): ReactNode => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="user menu"
        >
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <DropdownMenuGroup>
          <DropdownMenuItem disabled className="opacity-100">
            <div className="flex flex-col gap-2">
              {user.name !== user.username ? (
                <>
                  <div>{user.username}</div>
                  <div>{user.name}</div>
                </>
              ) : (
                <div>{user.username}</div>
              )}
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <MingcuteUser1Line />
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={onLogout}
            className="cursor-pointer"
          >
            <MingcuteUploadLine />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

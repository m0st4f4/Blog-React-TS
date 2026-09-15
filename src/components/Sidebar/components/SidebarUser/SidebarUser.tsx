import { type ReactNode } from "react";

import { useParams } from "react-router";

import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { useFetchUser } from "@/hooks/useFetchUser";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import UserInfoCard from "../UserInfoCard/UserInfoCard";

type Props = {
  className?: string;
};

export const SidebarUser = ({ className = "" }: Props): ReactNode => {
  const params = useParams<{ username: string }>();
  const { data, error, isError, isPending, refetch } = useFetchUser(params.username ?? "");

  if (!params.username) {
    return <SidebarGroup title="About User" className={className}>
      <div>Username not found</div>
    </SidebarGroup>
  }

  if (isPending) {
    return <SidebarGroup title="About User" className={className}></SidebarGroup>
  }

  if (isError && error) {
    return <SidebarGroup title="About User" className={className}>
      <ErrorMessage error={error} onRetry={refetch} />
    </SidebarGroup>
  }

  if (!data) {
    return <SidebarGroup title="About User" className={className}>
      <div>Username not found</div>
    </SidebarGroup>
  }

  return (
    <SidebarGroup title="About User" className={className}>
      <UserInfoCard user={data} />
    </SidebarGroup>
  );
};
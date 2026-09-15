import { type ReactNode } from "react";

type Props = {
  className?: string;
};

export const UserPage = ({ className = "" }: Props): ReactNode => {

  return <div className={className}>UserPage Component</div>;
};

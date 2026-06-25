import { useTranslation } from "react-i18next";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group.tsx";

import MingcuteSearch2Line from "@/icons/MingcuteSearch2Line.tsx";

export const SearchForm = () => {
  const { t } = useTranslation();
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder={t("search")} />
      <InputGroupAddon>
        <MingcuteSearch2Line />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{`12 ${t("results")}`}</InputGroupAddon>
    </InputGroup>
  );
};

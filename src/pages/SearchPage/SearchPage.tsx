import { type ReactNode, useContext, useEffect } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { ArticleList } from "@/components/ArticleList/ArticleList.tsx";

import { SearchContext } from "@/context/search-context.ts";

import { useSearchArticle } from "@/hooks/useSearchArticle.ts";

type Props = {
  className?: string;
};

export const SearchPage = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();

  const query =
    useParams<{ query: string }>().query?.trim().toLowerCase() || "";
  const { setQuery } = useContext(SearchContext);
  const { data, isPending } = useSearchArticle(query);

  useEffect(() => {
    setQuery(query);
    document.title =
      t("page.search.title", { siteName: t("common.siteName") }) +
      " " +
      query?.trim().toLowerCase();

    return function () {
      setQuery("");
    };
  }, [query, setQuery, t]);

  return (
    <div className={className}>
      <h1 className="text-center text-2xl mb-8">
        <span> {t("page.search.heading")}</span>
        &nbsp;
        <span className="font-bold ms-1">{query}</span>
      </h1>
      <ArticleList isPending={isPending} data={data} />
    </div>
  );
};

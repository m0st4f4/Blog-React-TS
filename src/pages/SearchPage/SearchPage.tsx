import { type ReactNode, useContext, useEffect } from "react";

import { Link, useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { PostCardTopImg } from "@/components/PostCardTopImg/PostCardTopImg.tsx";
import { PostCardTopImgSkeleton } from "@/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";

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
      t("SearchPage.title", { siteName: t("site name") }) +
      " " +
      query?.trim().toLowerCase();

    return function () {
      setQuery("");
    };
  }, [query, setQuery, t]);

  if (isPending) {
    return (
      <div className={className}>
        <h1 className="text-center text-2xl mb-8">
          <span> {t("SearchPage.heading")}</span>
          &nbsp;
          <span className="font-bold ms-1">{query}</span>
        </h1>
        <div className="grid gap-4 grid-cols-1  md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <PostCardTopImgSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className={className}>
        <h1 className="text-center text-2xl mb-8">
          <span> {t("SearchPage.heading")}</span>
          &nbsp;
          <span className="font-bold ms-1">{query}</span>
        </h1>
        <p className="text-center">{t("SearchPage.noResult")}</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h1 className="text-center text-2xl mb-8">
        <span> {t("SearchPage.heading")}</span>
        &nbsp;
        <span className="font-bold ms-1">{query}</span>
      </h1>
      <div className="grid gap-4 grid-cols-1  md:grid-cols-3">
        {data?.map((item) => (
          <Link key={item.id} to={`/article/${item.id}`}>
            <PostCardTopImg item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

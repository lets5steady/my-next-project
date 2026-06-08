import NewsList from "@/app/_components/NewsList/NewsList";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination/Pagination";

type Props = {
    params: Promise<{
        current: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { current } = await params;
    const currentPage = parseInt(current, 10);

    if (Number.isNaN(currentPage) || currentPage < 1) {
        notFound();
    }

    const { contents: news , totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (currentPage - 1),
    });

    if (news.length === 0) {
        notFound();
    }

    return (
        <>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} current={currentPage} />
        </>
    );
}
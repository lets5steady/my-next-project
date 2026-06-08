import { getNewsList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import SearchField from '@/app/_components/SearchField/SearchField';
import NewsList from '@/app/_components/NewsList/NewsList';

type Props = {
    searchParams: Promise<{
        q?: string,
    }>
};

export default async function Page({ searchParams }: Props) {
    const { q } = await searchParams;
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}
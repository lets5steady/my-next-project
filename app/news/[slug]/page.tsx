import Article from "@/app/_components/Article/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from './page.module.css';
import ButtonLink from "@/app/_components/ButtonLink/ButtonLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ページごとのメタデータを生成する
export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const { slug } = await params;
    const { dk } = await searchParams;

    const data = await getNewsDetail(slug, {
        draftKey: dk,
    }).catch(notFound);

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: data.thumbnail ? [data.thumbnail.url] : [],
        },
    };
}

type Props = {
    params: Promise<{
        slug: string,
    }>,
    searchParams: Promise<{
        dk?: string;
    }>,
};

export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const { dk } = await searchParams;

    const data = await getNewsDetail(slug , {
        draftKey: dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}
import { title } from "process";
import Hero from "../_components/Hero/Hero";
import Sheet from "../_components/Sheet/Sheet";

export const metadata = {
    title: "ニュース",
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>
                {children}
            </Sheet>
        </>
    );
}
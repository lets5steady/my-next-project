import { ReactNode } from 'react';
import styles from './ButtonLink.module.css';

type Props = {
    href: string,
    children: ReactNode,
}

export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}
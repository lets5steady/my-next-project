"use client";

import { createContactData } from "@/app/_actions/contact";
import { useActionState } from "react";
import styles from './ContactForm.module.css';

type ContactState = {
    status: "" | "success" | "error";
    message: string;
};

const initialState: ContactState = {
    status: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction] = useActionState(
        createContactData,
        initialState
    );

    console.log(state);


    if (state.status === "success") {
        return (
            <p className={styles.success}>
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }

    return (
        // フォーム送信すると、formAction関数が実行され、createContactData関数から戻ってきた値がstateに入る
        <form className={styles.form} action={formAction}>
            <div className={styles.horizontal}>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor="lastname">
                        姓
                    </label>
                    <input
                        className={styles.textfield}
                        type="text"
                        id="lastname"
                        name="lastname"
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor="firstname">
                        名
                    </label>
                    <input
                        className={styles.textfield}
                        type="text"
                        id="firstname"
                        name="firstname"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="company">
                    会社名
                </label>
                <input
                    className={styles.textfield}
                    type="text"
                    id="company"
                    name="company"
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="email">
                    メールアドレス
                </label>
                <input
                    className={styles.textfield}
                    type="text"
                    id="email"
                    name="email"
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="message">
                    メッセージ
                </label>
                <textarea className={styles.textarea} id="message" name="message" />
            </div>
            <div className={styles.actions}>
                {state.status === "error" && (
                    <p className={styles.error}>{state.message}</p>
                )}
                <input type="submit" value="送信する" className={styles.button} />
            </div>
        </form>
    );
}
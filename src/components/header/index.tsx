import Link from "next/link";
import styles from "./header.module.css";

export function Header(){
    return(
        <header className={styles.header}>
            <h1>Meu Site</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/repositories">Repositorios</Link><br/>
            <Link href="/contacts">Contatos</Link><br/>
            <Link href="/dashboard">Painel</Link><br/>
        </header>
    )
}
import Link from "next/link";
import styles from "./../../app/page.module.css";

export function LeftMenu() {
    return (
        <div className={styles.leftMenu}>
            <h2>Categories</h2>
            <nav>
                <ul>
                <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Clothing</Link>
                    </li>
                    <li>
                        <Link href="/">Home & Garden</Link>
                    </li>
                    <li>
                        <Link href="/">Books</Link>
                    </li>
                    <li>
                        <Link href="/">Sports & Outdoors</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
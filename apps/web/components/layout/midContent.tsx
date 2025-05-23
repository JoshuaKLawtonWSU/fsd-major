import type { PropsWithChildren } from "react";
import styles from "./../../app/page.module.css";

export function MidContent({ children }: PropsWithChildren) {
    return (
        <div className={styles.midContent}> {/* Added here to give a consistent styling to all below */}
            {children}
        </div>
    );
}

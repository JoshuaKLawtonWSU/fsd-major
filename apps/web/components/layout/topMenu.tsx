import styles from "./../../app/page.module.css";

export function TopMenu({ query }: { query?: string }) {
    return (
        <div className={styles.topMenu}> {/* Add search functionality here (to always filter everything?) */}
            <h2>Top Menu Here</h2>
            <form className={styles.searchForm}> {/* Add get method? */}
                <input
                    placeholder="Search..."
                    defaultValue={query || ''} // Change to also include query? Check through 2.1 Backend TopMenu.tsx file
                    className={styles.searchInput}
                />
            </form>
            {/* Add another TopMenu item? Darkmode switch? */}
            <div className={styles.cart}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 7.67V6.7C7.5 4.45 9.31 2.24 11.56 2.03C14.24 1.77 16.5 3.88 16.5 6.51V7.89" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H8C3.73 8 3.03 9.99 3.3 12.43L4.05 18.43C4.26 20.39 4.98 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Cart here!</h3>
            </div>
        </div>
    );
}
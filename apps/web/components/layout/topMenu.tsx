export function TopMenu({ query }: { query?: string }) {
    return (
        <div> {/* Add search functionality here (to always filter everything?) */}
            <h2>Top Menu Here</h2>
            <form> {/* Add get method? */}
                <input
                    placeholder="Search..."
                    defaultValue={query || ''} // Change to also include query? Check through 2.1 Backend TopMenu.tsx file
                />
            </form>
            {/* Add another TopMenu item? Darkmode switch? */}
            <h3>Cart here!</h3>
        </div>
    );
}
import type { PropsWithChildren } from "react";

export function MidContent({ children }: PropsWithChildren) {
    return (
        <div> {/* Added here to give a consistent styling to all below */}
            {children}
        </div>
    );
}

import { PropsWithChildren } from "react";
import { LeftMenu } from "./leftMenu";
import { MidContent } from "./midContent";
import { TopMenu } from "./topMenu";

export async function AppLayout({
    children,
    query,
}: PropsWithChildren<{ query?: string }>) {
    return (
        <>
            <LeftMenu />
            <MidContent>
                <TopMenu query={query}/>
                {children}
            </MidContent>
        </>
    );
}
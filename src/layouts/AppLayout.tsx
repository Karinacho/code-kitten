import type { ReactNode } from 'react';
import { Main } from "@/layouts/AppLayout.styles";

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {

    return (
        <Main>
            {children}
        </Main>
    )
}
//what is every route in our pages going to have

import { createRootRoute, Outlet} from "@tanstack/react-router";
import { TanStackRouterDevtools} from "@tanstack/router-devtools";
import { Navbar } from '@/components/Navbar'
import {AppLayout} from "@/layouts/AppLayout";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <Navbar />
                <AppLayout>
                    <Outlet />
                </AppLayout>

                <TanStackRouterDevtools />
            </>
        )
    }
})
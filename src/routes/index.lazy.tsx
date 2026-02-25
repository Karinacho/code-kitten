import { createLazyFileRoute } from '@tanstack/react-router';
import {CircularProgressBar} from "@/components/ui/CircularProgressBar/CircularProgressBar";

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div>
            <h1>Hi</h1>

        </div>
    )
}
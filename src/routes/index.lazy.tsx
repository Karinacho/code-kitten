import { createLazyFileRoute } from '@tanstack/react-router';
import {Tabs} from "@/components/Tabs/components/Tabs";


export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div>
            <h1>Hi</h1>
            <Tabs items={[{title: 'Dashboard'},{title: 'Leraning progress'}]}/>
        </div>
    )
}
import { useState } from 'react';
import {TabButton} from "@/components/Tabs/components/Tabs.styled";

interface TabsProps {
    items: {
        title: string;
    }[]
}

export const Tabs = ({ items }: TabsProps) => {
    const [activeTab, setActiveTab] = useState<string>(() => items[0]?.title ?? "");

    return (
        <>
            <div>
                {items.map(item => {
                    return (
                        <TabButton $isActive={activeTab === item.title} key={item.title} onClick={() => setActiveTab(item.title)}>{item.title}</TabButton>
                    )
                })}
            </div>
        </>
    )
}
import type { Route } from "./+types/home";
import { styled } from "styled-components";
import { ActionList } from "../components/ActionList/ActionList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
`;

const MOCK_ACTIONS = [
  { id: "1", label: "Complete profile", completed: true },
  { id: "2", label: "Upload avatar", completed: true },
  { id: "3", label: "Invite teammates", completed: false },
  { id: "4", label: "Set up billing", completed: false },
];

export default function Home() {
  return (
    <PageWrapper>
      <ActionList title="Onboarding Steps" items={MOCK_ACTIONS} />
    </PageWrapper>
  );
}

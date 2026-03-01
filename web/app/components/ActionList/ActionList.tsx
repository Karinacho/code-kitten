import { useState } from "react";
import { styled } from "styled-components";

export interface ActionItemProps {
  id: string;
  label: string;
  completed: boolean;
}

export interface ActionListProps {
  title: string;
  items: ActionItemProps[];
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  overflow: hidden;
  border: 1px solid #f3f4f6;
  max-width: 28rem;
  width: 100%;
`;

const Header = styled.div`
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

const Title = styled.h3`
  font-weight: 600;
  color: #1f2937;
  font-size: 1.125rem;
  margin: 0;
`;

const ToggleButton = styled.button<{ $isOpen: boolean }>`
  padding: 0.25rem;
  border-radius: 9999px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f4f6;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #6b7280;
    transition: transform 0.2s;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const ProgressContainer = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const ProgressTrack = styled.div`
  width: 100%;
  background-color: #f3f4f6;
  border-radius: 9999px;
  height: 0.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $progress: number }>`
  background-color: #22c55e;
  height: 0.5rem;
  transition: width 0.3s ease-in-out;
  width: ${props => props.$progress}%;
`;

const CollapsibleContent = styled.div`
  border-top: 1px solid #f3f4f6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  & > li + li {
    border-top: 1px solid #f3f4f6;
  }
`;

const ItemRow = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StatusIndicator = styled.div<{ $completed: boolean }>`
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.$completed 
    ? `
      background-color: #22c55e;
      color: #ffffff;
    ` 
    : `
      border: 2px solid #d1d5db;
      background-color: #f9fafb;
    `
  }
  
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const ItemLabel = styled.span<{ $completed: boolean }>`
  font-size: 0.875rem;
  ${props => props.$completed 
    ? `
      color: #6b7280;
    ` 
    : `
      color: #374151;
      font-weight: 500;
    `
  }
`;

export function ActionList({ title, items }: ActionListProps) {
  const [isOpen, setIsOpen] = useState(true);

  const completedCount = items.filter((item) => item.completed).length;
  const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  return (
    <Card>
      {/* Header */}
      <Header>
        <Title>{title}</Title>
        <ToggleButton
          onClick={() => setIsOpen(!isOpen)}
          $isOpen={isOpen}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </ToggleButton>
      </Header>

      {/* Progress Bar */}
      <ProgressContainer>
        <ProgressTrack>
          <ProgressFill $progress={progress} />
        </ProgressTrack>
      </ProgressContainer>

      {/* Collapsible Menu */}
      {isOpen && (
        <CollapsibleContent>
          <List>
            {items.map((item) => (
              <ItemRow key={item.id}>
                <StatusIndicator $completed={item.completed}>
                  {item.completed && (
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </StatusIndicator>
                <ItemLabel $completed={item.completed}>
                  {item.label}
                </ItemLabel>
              </ItemRow>
            ))}
          </List>
        </CollapsibleContent>
      )}
    </Card>
  );
}

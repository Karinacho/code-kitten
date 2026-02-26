import styled from "styled-components";

export const TabButton = styled.button<{$isActive: boolean}>`
   background: none;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    font-size: 16px;
    border-bottom: 2px solid ${({ $isActive }) =>
            $isActive ? "#6366f1" : "#a1a1aa"};

    &:hover {
        color: #6366f1;
        border-bottom: 2px solid #6366f1;
    }
`
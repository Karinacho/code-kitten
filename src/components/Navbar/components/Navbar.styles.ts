import styled from "styled-components";

export const NavbarRoot = styled.header`
    height: 84px;
    padding: 16px;
    background-color: var(--primary-color);
    
    @media screen and (min-width: 768px) {
        padding: 32px;
    }
`;

export const MobileMenu = styled.button `
    border: none;
    background: none;
    cursor: pointer; 
    
    @media screen and (min-width: 1280px) {
       display: none;
    }
`
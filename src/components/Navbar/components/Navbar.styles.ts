import styled from "styled-components";

export const NavbarRoot = styled.header`
  height: 84px;
  padding: 16px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: unset;
  }
`;

export const MobileMenuIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: #19297c;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const SlideoutMenu = styled.nav<{ $isOpen: boolean }>`
  width: 300px;
  background-color: var(--secondary-color);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding-inline: 16px;
  border-radius: 10px;
  z-index: 1000;

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
`;

export const SlideoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 34px 24px;
`;

export const DesktopMenuLinks = styled.ul`
  display: none;
  gap: 34px;
  margin: 0;

  li {
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const MobileMenuLinks = styled.ul`
  list-style: none;
  padding-inline-start: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
`;

export const SlideoutCloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

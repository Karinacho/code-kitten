import {useState} from "react";
import {NavbarRoot, MobileMenuIcon, NavbarLogo, MenuLink, SlideoutMenu, SlideoutHeader, MobileMenuLinks,DesktopMenuLinks, SlideoutCloseButton} from "./Navbar.styles";
import {MenuIcon, X} from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <>
        <NavbarRoot>
            <NavbarLogo>
                <a href={"#"}>CodeKitten</a>
            </NavbarLogo>

            <DesktopMenuLinks>
                <li> <MenuLink href={"/"}>Home</MenuLink> </li>
                <li> <MenuLink href={"#"}>Topics </MenuLink></li>
            </DesktopMenuLinks>

            <MobileMenuIcon aria-label="mobile-menu" onClick={() => setIsOpen(prevState => !prevState)}>
                <MenuIcon size={20} />
            </MobileMenuIcon>

        </NavbarRoot>

        <SlideoutMenu $isOpen={isOpen}>
            <SlideoutHeader>
                <NavbarLogo>
                    <a href={"#"}>CodeKitten</a>
                </NavbarLogo>
                <SlideoutCloseButton aria-label={"mobile-menu-close-button"} onClick={() => setIsOpen(false)}>
                    <X size={20}/>
                </SlideoutCloseButton>

            </SlideoutHeader>

            <MobileMenuLinks>
                <li> <MenuLink href={"/"}>Home</MenuLink> </li>
                <li> <MenuLink href={"#"}>Topics </MenuLink></li>
            </MobileMenuLinks>
        </SlideoutMenu>
        </>
    )
}


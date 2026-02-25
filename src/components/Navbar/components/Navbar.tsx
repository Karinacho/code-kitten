import {NavbarRoot, MobileMenu} from "./Navbar.styles.ts";
import {MenuIcon} from "lucide-react";

export const Navbar: React.FC = () => {
    return (
        <NavbarRoot>
            <MobileMenu aria-label="mobile-menu">
                <MenuIcon size={20}/>
            </MobileMenu>

        </NavbarRoot>
    )
}


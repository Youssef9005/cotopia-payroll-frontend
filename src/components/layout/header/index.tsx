import Logo from "../../shared/logo";
import ToggleMenu from "./components/toggle-menu";

export default function Header() {

    return (
        <header className="p-5 w-full flex items-center justify-between">
            <Logo />
            <ToggleMenu />
        </header>
    )
}
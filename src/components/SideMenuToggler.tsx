// Dependencies
import { useState } from "react";

// STYLES
import "../styles/SideMenuToggler.css";

// SVG components
import { ReactComponent as HamIcon } from "../assets/icons/menu-fill.svg";
import { ReactComponent as CloseBtn } from "../assets/icons/close-line.svg";

function sideMenuToggler() {
	const [isMenuShown, setIsMenuShown] = useState(false);

	function toggleSideMenu() {
		const sideMenu = document.querySelector("#side-menu");

		sideMenu?.classList.toggle("hide");

		setIsMenuShown((prev) => !prev);
	}

	return (
		<span className="menu-icon" onClick={toggleSideMenu}>
			{isMenuShown ? <CloseBtn /> : <HamIcon />}
		</span>
	);
}

export default sideMenuToggler;

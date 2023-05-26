import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

import '../styles/Header.css'

import { UserContext } from "../context/UserContext";

function Header() {
    const { user } = useContext(UserContext)

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon="fas fa-home" />
                        </a>
                    </li>
                    <li>
                        <a href="/chat">
                            <FontAwesomeIcon icon="fas fa-comments" />
                        </a>
                    </li>
                </ul>
            </nav>
            <span className="userInfo">Olá, <span>{ user.username }</span></span>
        </header>
    );
}

export default Header;
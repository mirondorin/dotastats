import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './Search.css';
import logo from '../assets/dota-2-logo.png';

export default function Search() {
    const [accountId, setAccountId] = useState("");
    const navigate = useNavigate();
    const navigateToPlayer = () => {
        navigate(`/players/${accountId}`);
    }

    return (
        <div className={"search-container"}>
            <img src={logo} className={"search-logo"} alt="Logo"/>
            <div className={"search-bar"}>
                <input type="search" className={"search-input"} id="player-search"
                       placeholder={"32-bit steam account id (e.g 94054712)"}
                       onChange={event => setAccountId(event.target.value)}/>

                <button className={"search-button"} onClick={navigateToPlayer}>Search</button>
            </div>
        </div>
    );
}
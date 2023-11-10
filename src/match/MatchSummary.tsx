import Match from "./MatchModel";
const heroes = require("../assets/json/heroes.json");

function secondsToFullTime(seconds: number) {
    // duration in h:mm:ss format
    let duration = new Date(seconds * 1000).toISOString().substring(12, 19);
    const ZERO_HOURS = "0";
    return duration[0] === ZERO_HOURS ? duration.substring(2) : duration;
}

function playerWon(recentMatch: Match) {
    return recentMatch.radiant_win && isPlayerRadiant(recentMatch.player_slot)
}

function isPlayerRadiant(playerSlot: number) {
    return playerSlot >= 0 && playerSlot <= 127;
}

function getHeroNameFromId(heroId: number) {
    return heroes[heroId].localized_name;
}

export default function MatchSummary({ recentMatch }: { recentMatch: Match }) {

    return (
        <tr>
            <td className="hero">
                <div className="hero-container">
                    <img className="hero-img"></img>
                    <p className="hero-name">{getHeroNameFromId(recentMatch.hero_id)}</p>
                </div>
            </td>
            <td className="match-result">{playerWon(recentMatch) ? "Won Match" : "Lost match"}</td>
            <td className="match-type">Ranked</td>
            <td className="match-duration">{secondsToFullTime(recentMatch.duration)}</td>
            <td className="kda">{recentMatch.kills}/{recentMatch.deaths}/{recentMatch.assists}</td>
        </tr>
    );
}
import Match from "./MatchModel";

function secondsToFullTime(seconds: number) {
    // duration in h:mm:ss format
    let duration = new Date(seconds * 1000).toISOString().substring(12, 19);
    const ZERO_HOURS = "0";
    return duration[0] === ZERO_HOURS ? duration.substring(2) : duration;
}

export default function MatchSummary({ recentMatch }: { recentMatch: Match }) {

    return (
        <tr>
            <td className="hero">
                <div className="hero-container">
                    <img className="hero-img"></img>
                    <div>
                        <p className="hero-name">{recentMatch.hero_id}</p>
                        <p className="player-rank">Immortal</p>
                    </div>
                </div>
            </td>
            <td className="match-result">Won Match</td>
            <td className="match-type">Ranked</td>
            <td className="match-duration">{secondsToFullTime(recentMatch.duration)}</td>
            <td className="kda">{recentMatch.kills}/{recentMatch.deaths}/{recentMatch.assists}</td>
        </tr>
    );
}
import { useParams } from "react-router-dom";
import './Player.css';
import { useEffect, useState } from "react";
import MatchSummary from "../match/MatchSummary";
import Match from "../match/MatchModel";

export default function Player() {

    const { accountId } = useParams();
    const [recentMatches, setRecentMatches] = useState(new Array<Match>());

    async function playerExists(): Promise<boolean> {
        const PLAYER_PROFILE_URL = `https://api.opendota.com/api/players/${accountId}`;
        const response = await fetch(PLAYER_PROFILE_URL);
        const playerProfile = await response.json();
        return playerProfile.profile !== undefined;
    }

    async function fetchData() {
        const isValidPlayer = await playerExists();

        if (isValidPlayer) {
            setRecentMatches(await getPlayerRecentMatches());
        }
    }

    async function getPlayerRecentMatches() {
        const ACCOUNT_RECENT_MATCHES_URL = `https://api.opendota.com/api/players/${accountId}` 
                                            + '/recentMatches';
        const response = await fetch(ACCOUNT_RECENT_MATCHES_URL);
        return await response.json();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ul>
                {recentMatches.map(recentMatch =>
                    <li
                        key={recentMatch.match_id}>
                        <MatchSummary recentMatch={recentMatch}></MatchSummary>
                    </li>)}
            </ul>
        </>
    );
}
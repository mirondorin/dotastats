import { useParams } from "react-router-dom";
import './Player.css';
import { useEffect, useState } from "react";
import MatchSummary from "../match/MatchSummary";

type Match = {
    "match_id": number,
    "player_slot": number,
    "radiant_win": boolean,
    "duration": number,
    "game_mode": number,
    "lobby_type": number,
    "hero_id": number,
    "start_time": number,
    "version": number,
    "kills": number,
    "deaths": number,
    "assists": number,
    "skill": object,
    "average_rank": number,
    "xp_per_min": number,
    "gold_per_min": number,
    "hero_damage": number,
    "tower_damage": number,
    "hero_healing": number,
    "last_hits": number,
    "lane": number,
    "lane_role": number,
    "is_roaming": boolean,
    "cluster": number,
    "leaver_status": number,
    "party_size": number
}

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
    }, [""]);

    return (
        <>
            <ul>
                {recentMatches.map(recentMatch =>
                    <li
                        key={recentMatch.match_id}>
                        <MatchSummary props={recentMatch}></MatchSummary>
                    </li>)}
            </ul>
        </>
    );
}
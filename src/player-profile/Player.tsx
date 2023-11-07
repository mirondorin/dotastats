import {useParams} from "react-router-dom";

export default function Player() {

    const {accountId} = useParams();

    async function playerExists(): Promise<boolean> {
        const PLAYER_PROFILE_URL = `https://api.opendota.com/api/players/${accountId}`;
        const response = await fetch(PLAYER_PROFILE_URL);
        const playerProfile = await response.json();
        return playerProfile.profile !== undefined;
    }

    function getPlayerRecentMatches() {
        const ACCOUNT_RECENT_MATCHES_URL = `https://api.opendota.com/api/players/${accountId}/recentMatches`;
        console.log(ACCOUNT_RECENT_MATCHES_URL);
    }

    return(
      <>{accountId}</>
    );
}
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Match from '../match/MatchModel';
import RecentMatchesTable from '../match/RecentMatchesTable';

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
    const ACCOUNT_RECENT_MATCHES_URL = `https://api.opendota.com/api/players/${accountId}` + '/recentMatches';
    const response = await fetch(ACCOUNT_RECENT_MATCHES_URL);
    return await response.json();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <RecentMatchesTable recentMatches={recentMatches}></RecentMatchesTable>;
}

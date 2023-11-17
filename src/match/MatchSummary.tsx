import Match from './MatchModel';
import './MatchSummary.css';
const heroes = require('../assets/json/heroes.json');
const lobbyTypes = require('../assets/json/lobby_type.json');

enum TeamSlot {
  RADIANT_FIRST_SLOT = 0,
  RADIANT_LAST_SLOT = 127
}

function pad(num: number) {
  return ("0" + num).slice(-2);
}

function toHoursMinutesSeconds(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours > 0 ? hours + ":" : ""}${pad(minutes)}:${pad(seconds)}`;
}

function playerWon(recentMatch: Match) {
  return recentMatch.radiant_win && isPlayerRadiant(recentMatch.player_slot);
}

function isPlayerRadiant(playerSlot: number) {
  return playerSlot >= TeamSlot.RADIANT_FIRST_SLOT && playerSlot <= TeamSlot.RADIANT_LAST_SLOT;
}

function getHeroNameFromId(heroId: number) {
  return heroes[heroId].localized_name;
}

function getLobbyType(match: Match) {
  const LOBBY_PREFIX = 'lobby_type_';
  let lobbyType = lobbyTypes[match.lobby_type];
  let lobbyName = lobbyType.name.split(LOBBY_PREFIX);

  return lobbyName;
}

export default function MatchSummary({ recentMatch }: { recentMatch: Match }) {
  return (
    <tr>
      <td className="hero">
        <div className="hero-container">
          <img className="hero-img" src={heroes[recentMatch.hero_id].image_url}></img>
          <p className="hero-name">{getHeroNameFromId(recentMatch.hero_id)}</p>
        </div>
      </td>
      <td className={`match-result ${playerWon(recentMatch) ? 'match-won' : 'match-lost'}`}>
        {playerWon(recentMatch) ? 'Won Match' : 'Lost Match'}
      </td>
      <td className="match-type">{getLobbyType(recentMatch)}</td>
      <td className="match-duration">{toHoursMinutesSeconds(recentMatch.duration)}</td>
      <td className="kda">
        {recentMatch.kills}/{recentMatch.deaths}/{recentMatch.assists}
      </td>
    </tr>
  );
}

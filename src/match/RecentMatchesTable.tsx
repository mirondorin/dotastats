import Match from "../match/MatchModel";
import MatchSummary from "./MatchSummary";
import "./RecentMatchesTable.css";

export default function RecentMatchesTable({ recentMatches }: { recentMatches: Match[] }) {
    return (
        <div className="recent-matches-container">
            <table className="recent-matches">
                <caption>RECENT MATCHES</caption>
                <thead>
                    <tr>
                        <th scope="col">Hero</th>
                        <th scope="col">Result</th>
                        <th scope="col">Type</th>
                        <th scope="col">Duration</th>
                        <th scope="col">KDA</th>
                    </tr>
                </thead>
                <tbody>
                    {recentMatches.map(recentMatch => <MatchSummary key={recentMatch.match_id}
                        recentMatch={recentMatch}></MatchSummary>)}
                </tbody>
            </table>
        </div>
    );
}
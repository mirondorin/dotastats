import Match from "./MatchModel";

export default function MatchSummary({recentMatch}: {recentMatch: Match}) {
    console.log(recentMatch);
    
    return (
        <div>
            {recentMatch.match_id}
        </div>
    );
}
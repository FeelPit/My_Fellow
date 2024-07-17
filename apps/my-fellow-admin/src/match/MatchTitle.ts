import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "matchedUser";

export const MatchTitle = (record: TMatch): string => {
  return record.matchedUser?.toString() || String(record.id);
};

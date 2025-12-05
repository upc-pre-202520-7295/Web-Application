export interface Match {
  success: boolean;
  predictions: {
    result: {
      home_win_prob: number;
      draw_prob: number;
      away_win_prob: number;
      predicted_outcome: string;
      confidence: string;
      confidence_score: number;
    };
    goals: {
      home_expected: number;
      away_expected: number;
      total_expected: number;
    };
    over_under: {
      over_2_5_probability: number;
      under_2_5_probability: number;
      recommendation: string;
      confidence: string;
      confidence_score: number;
    };
    both_teams_score: {
      probability: number;
      recommendation: string;
    };
  };
  home_team_name: string;
  away_team_name: string;
  home_team_image: string;
  away_team_image: string;
  match_info: {
    date: string;
    time: string;
    league: string;
    season: string;
  };
}
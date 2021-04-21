export type PackType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;

  name: string;
  path: string;
  grade: number;
  shots: number;

  cardsCount: number;
  deckCover: string;

  type: string;
  rating: number;
  more_id: string;

  created: string;
  updated: string;
};

export type PacksStateType = {
    packs: PackType[]
    packUser_id : string
    recent_pack_id: string
    page: number
}

export const PacksInitState: PacksStateType = {
    packs: [],
    packUser_id: '',
    recent_pack_id: '',
    page: 1
}
// Conflict №2 recent_pack_id / page difference (added both)

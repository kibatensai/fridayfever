export type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean

    name: string
    path: string
    grade: number
    shots: number

    cardsCount: number
    deckCover: string

    type: string
    rating: number
    more_id: string

    created: string
    updated: string
}

export type PacksStateType = {
    packs: PackType[]
    packUser_id : string
}

export const PacksInitState: PacksStateType = {
    packs: [],
    packUser_id: ''
}
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { AppStoreType } from "../../../../main/bll/store"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import { PATH } from "../../../../main/ui/routes/Routes"
import { CardType } from "../bll/cardsInitState"
import { addCard, deleteCard, getCards, updateCard } from "../bll/cardsThunks"
import { CardsTable } from "./CardsTable"

export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.cards)
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        dispatch(getCards(id))
    }, [dispatch, id])

    const addCardHandler = (id: string) => {
        dispatch(addCard(id))
    }

    const deleteCardHandler = (cardId: string) => {
        dispatch(deleteCard(cardId, id))
    }

    const updateCardHandler = (cardId: string) => {
        dispatch(updateCard(cardId, id))
    }

    return (
        <>
            Cards Page
            <NavLink to={PATH.PACKS}><CustomButton>Back</CustomButton></NavLink>
            <CardsTable title={['question', 'answer', 'grade', 'udated', 'url']}
                data={cards} cardId={id}
                addItemCallback={addCardHandler}
                deleteItemCallback={deleteCardHandler}
                updateItemCallback={updateCardHandler} />

        </>
    )
}
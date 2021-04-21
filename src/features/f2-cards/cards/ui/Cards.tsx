import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { AppStoreType } from "../../../../main/bll/store"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import CustomInput from "../../../../main/ui/common/CustomInput/CustomInput"
import { CustomModalWindow } from "../../../../main/ui/common/CustomModalWindow/CustomModalWindow"
import { Preloader } from "../../../../main/ui/common/CustomPreloader/CustomPreloader"
import { CustomSnackbar } from "../../../../main/ui/common/CustomSnackbar/CustomSnackbar"
import { PATH } from "../../../../main/ui/routes/Routes"
import { ErrorHandlingActions } from "../../../../main/utils/ErrorHandling/bll/errorHandlingActions"
import { CardsActions } from "../bll/cardsActions"
import { CardType } from "../bll/cardsInitState"
import { addCard, deleteCard, getCards, updateCard } from "../bll/cardsThunks"
import { CardsTable } from "./CardsTable"
import {Search} from "../../../../main/ui/common/SearchComponent/SearchComponent";
import {Sort} from "../../../../main/ui/common/SortComponent/Sort";
import {DoubleRangeSlider} from "../../../../main/ui/common/DoubleRangeSlider/DoubleRangeSlider";
import s from './Cards.module.css'


export const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.cards)
    const loading = useSelector<AppStoreType, boolean>(state => state.errorHandling.loading)
    const error = useSelector<AppStoreType, string>(state => state.errorHandling.error)
    
    const [minGrade, setMinGrade] = useState(0)
    const [maxGrade, setMaxGrade] = useState(6)

    const recent_card_id = useSelector<AppStoreType, string>(state => state.cards.recent_card_id)
    const { id } = useParams<{ id: string }>()

    const [modalActive, setModalActive] = useState<boolean>(false)
    const [questionFromModal, setQuestionFromModal] = useState<string>('')
    const [answerFromModal, setAnswerFromModal] = useState<string>('')

    useEffect(() => {
        dispatch(ErrorHandlingActions.setError(''))
        dispatch(getCards(id))
    }, [dispatch, id])

    const addCardHandler = (id: string) => {
        dispatch(addCard(id))
    }

    const deleteCardHandler = (cardId: string) => {
        dispatch(deleteCard(cardId, id))
    }

    const updateCardHandler = () => {
        dispatch(updateCard(recent_card_id, id, questionFromModal, answerFromModal))
        setModalActive(false)
        setQuestionFromModal('')
        setAnswerFromModal('')
    }

    const cardIdSaver = (id: string) => {
        dispatch(CardsActions.setCardId(id))
    }

    const searchByQuestion = (cardQuestion: string) => {
        dispatch(getCards(id, {cardQuestion, min: minGrade, max: maxGrade}))
    }

    const searchByAnswer = (cardAnswer: string) => {
        dispatch(getCards(id, {cardAnswer, min: minGrade, max: maxGrade}))
    }

    const sortByHigher = () => {
        dispatch(getCards(id, {sortCards: "0grade"}))
    }

    const sortByLower = () => {
        dispatch(getCards(id, {sortCards: "1grade"}))
    }

    const onSearchingGradesChange = (values: [number, number]) => {
        setMinGrade(values[0])
        setMaxGrade(values[1])
    }

    return (
        <>
            Cards Page
            {loading && <Preloader/>}
            {error !== '' && <CustomSnackbar title={error} timer={3000}/>}
            <NavLink to={PATH.PACKS}><CustomButton>Back</CustomButton></NavLink>
            SearchByQuestion
            <div className={s.searchUtils}>
                <div className={s.searchBlock}>
                    Grade range:
                    <DoubleRangeSlider min={0} max={6} value={[minGrade, maxGrade]}
                                       onChangeRange={onSearchingGradesChange}/>
                    Enter card question or enter card answer:
                    <div className={s.searchInputs}>
                        <Search placeholder={"Enter card question"} searchFunction={searchByQuestion}/>
                        <Search placeholder={"Enter card answer"} searchFunction={searchByAnswer}/>
                    </div>
                </div>
                <div className={s.sortBlock}>
                    Sort by grade:
                    <Sort sortByMore={sortByHigher} sortByFewer={sortByLower}/>
                </div>
            </div>
            <CardsTable title={['question', 'answer', 'grade', 'udated', 'url']}
                data={cards} cardId={id}
                addItemCallback={addCardHandler}
                deleteItemCallback={deleteCardHandler}
                saveRecentIdCallback={cardIdSaver}
                setModalView={setModalActive}
                disabled={loading}/>
            <CustomModalWindow active={modalActive} setActive={setModalActive}>
                <p>Change Question and Answer</p>
                <p>Question</p>
                <CustomInput value={questionFromModal} onChange={e => setQuestionFromModal(e.target.value)}/>
                <p>Answer</p>
                <CustomInput value={answerFromModal} onChange={e => setAnswerFromModal(e.target.value)}/>
                <CustomButton onClick={() => updateCardHandler()}>Accept</CustomButton>
                <CustomButton onClick={() => setModalActive(false)}>Cancel</CustomButton>
            </CustomModalWindow>
        </>
    )
}
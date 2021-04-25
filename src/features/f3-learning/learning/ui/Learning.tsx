import React, { useEffect, useState } from "react";
import { ErrorHandlingActions } from "../../../../main/utils/ErrorHandling/bll/errorHandlingActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards, updateCardGrade } from "../../../f2-cards/cards/bll/cardsThunks";
import { CardType } from "../../../f2-cards/cards/bll/cardsInitState";
import { AppStoreType } from "../../../../main/bll/store";
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton";
import { Preloader } from "../../../../main/ui/common/CustomPreloader/CustomPreloader";
import s from './Learning.module.css'

export type AnswerRateType = 1 | 2 | 3 | 4 | 5

export const Learning = () => {
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>()
    const loading = useSelector<AppStoreType, boolean>(state => state.errorHandling.loading)
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.cards)
    const [check, setCheck] = useState<boolean>(false)
    const [first, setFirst] = useState<boolean>(true);
    const [currentCard, setCurrentCard] = useState<CardType>({
        _id: '',
        cardsPack_id: '',
        user_id: '',
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        questionImg: '',
        answerImg: '',
        answerVideo: '',
        questionVideo: '',
        comments: '',
        type: '',
        rating: 0,
        more_id: '',
        created: '',
        updated: ''
    })

    useEffect(() => {
        dispatch(ErrorHandlingActions.setError(''))
        if (first) {
            dispatch(getCards(id));
            setFirst(false);
        }
        if (cards.length > 0) setCurrentCard(getCard(cards));
    }, [dispatch, id, cards, first])

    const getCard = (cards: CardType[]) => {
        const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return { sum: newSum, id: newSum < rand ? i : acc.id }
        }
            , { sum: 0, id: -1 });

        return cards[res.id + 1];
    }


    const onRateButtonClick = (rate: AnswerRateType) => {
        setCheck(false)
        dispatch(updateCardGrade(currentCard._id, rate, id))
        setCurrentCard(getCard(cards))

    }
    return (
        <>
            <p>Learning Page</p>
            {!check ?

                <div className={s.questionBlock}>
                    { loading ?
                        <div className={s.learning_preloader}><Preloader /></div>
                              :
                        <div className={s.question}>

                            <div className={s.text}>Question: {currentCard.question}</div>
                        </div>
                    }
                    <CustomButton onClick={() => setCheck(true)} disabled={loading}>Check</CustomButton>
                </div>
                    :
                <div className={s.answerBlock}>
                    <div className={s.answer}>
                        <div className={s.text}>Answer: {currentCard.answer}</div>
                    </div>
                <div className={s.answerButtons}>
                    <div>Rate your answer:</div>
                    <CustomButton onClick={() => onRateButtonClick(1)} disabled={loading}>Easy to answer</CustomButton>
                    <CustomButton onClick={() => onRateButtonClick(2)} disabled={loading}>Right answer</CustomButton>
                    <CustomButton onClick={() => onRateButtonClick(3)} disabled={loading}>Almost correct answer</CustomButton>
                    <CustomButton onClick={() => onRateButtonClick(4)} disabled={loading}>It was hard to answer</CustomButton>
                    <CustomButton onClick={() => onRateButtonClick(5)} disabled={loading}>Wrong answer</CustomButton>
                </div>
                </div>
            }
        </>
    )

}
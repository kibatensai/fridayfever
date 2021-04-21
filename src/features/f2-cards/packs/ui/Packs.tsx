import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { AppStoreType } from "../../../../main/bll/store"
import { Preloader } from "../../../../main/ui/common/CustomPreloader/CustomPreloader"
import { CustomSnackbar } from "../../../../main/ui/common/CustomSnackbar/CustomSnackbar"
import { CustomTable } from "../../../../main/ui/common/CustomTable/CustomTable"
import { PATH } from "../../../../main/ui/routes/Routes"
import { ErrorHandlingActions } from "../../../../main/utils/ErrorHandling/bll/errorHandlingActions"
import { me } from "../../../f1-auth/login/bll-login/loginThunks"
import { PacksActions } from "../bll/packsActions"
import { addPack, deletePack, getPacks, updatePack } from "../bll/packsThunks"
import { Pagination } from "./Paginator"
import s from './Packs.module.css'
import { CustomModalWindow } from "../../../../main/ui/common/CustomModalWindow/CustomModalWindow"
import CustomInput from "../../../../main/ui/common/CustomInput/CustomInput"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import { PackType } from "../bll/packsInitState"
import {Sort} from "../../../../main/ui/common/SortComponent/Sort";
import {Search} from "../../../../main/ui/common/SearchComponent/SearchComponent";
import {DoubleRangeSlider} from "../../../../main/ui/common/DoubleRangeSlider/DoubleRangeSlider";
import CustomCheckbox from "../../../../main/ui/common/CustomCheckbox/CustomCheckbox";


export const Packs = () => {

    const dispatch = useDispatch()
    const packs = useSelector<AppStoreType, PackType[]>(state => state.packs.packs)
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)
    const loading = useSelector<AppStoreType, boolean>(state => state.errorHandling.loading)
    const error = useSelector<AppStoreType, string>(state => state.errorHandling.error)

    const minCardsCount = useSelector<AppStoreType, number>(state => state.packs.minCardsCount)
    const maxCardsCount = useSelector<AppStoreType, number>(state => state.packs.maxCardsCount)
    const userId = useSelector<AppStoreType, string | null>(state => state.login.user_id)
    const [min, setMin] = useState(minCardsCount)
    const [max, setMax] = useState(maxCardsCount)
    const [getMyPacks, setGetMyPacks] = useState(false)
    const finallyUserId = getMyPacks && userId !== null ? userId : undefined

    const recent_pack_id = useSelector<AppStoreType, string>(state => state.packs.recent_pack_id)

    const [modalActive, setModalActive] = useState<boolean>(false)
    const [titleFromModal, setTitleFromModal] = useState<string>('')


    useEffect(() => {
        if (!success) {
            dispatch(me())
        }
        dispatch(ErrorHandlingActions.setError(''))
        dispatch(getPacks({}))
    }, [dispatch])

    const addPackHandler = () => {
        dispatch(addPack())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePack(id))
    }

    const updatePackHandler = () => {
        dispatch(updatePack(recent_pack_id, titleFromModal))
        setTitleFromModal('')
        setModalActive(false)
    }

    const packIdSaver = (id: string) => {
        dispatch(PacksActions.setPackId(id))
    }


    const sortByMore = () => {
        dispatch(getPacks({sortPacks: "0cardsCount", user_id: finallyUserId}))
    }

    const sortByFewer = () => {
        dispatch(getPacks({sortPacks: "1cardsCount", user_id: finallyUserId}))
    }

    const searchByName = (name: string) => {
        dispatch(getPacks({packName: name, min, max, user_id: finallyUserId}))
    }

    const onSearchingValuesChange = (values: [number, number]) => {
        setMin(values[0])
        setMax(values[1])
    }

    const onMyPacksCheckboxChange = (value: boolean) => {
        setGetMyPacks(value)
        dispatch(getPacks({min, max, user_id: value && userId !== null ? userId : undefined}))
    }

    if (!success) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={s.packsContainer}>
            Packs page
            {loading && <Preloader/>}
            {error !== '' && <CustomSnackbar title={error} timer={3000} />}
            <Pagination/>
            <div className={s.searchUtils}>
                <div className={s.checkbox}>
                    My packs
                    <CustomCheckbox onChangeChecked={onMyPacksCheckboxChange}/>
                </div>
                <div className={s.searchBlock}>
                    Search by amount of cards:
                    <DoubleRangeSlider min={minCardsCount} max={maxCardsCount} value={[min, max]}
                                       onChangeRange={onSearchingValuesChange}/>
                    Search by name:
                    <Search placeholder={"Search by name"} searchFunction={searchByName}/>
                </div>
                <div className={s.sortComponent}>Sorting by amout of cards:
                    <Sort sortByMore={sortByMore} sortByFewer={sortByFewer}/>
                </div>
            </div>
            <CustomTable title={['Packs', 'Cards', 'Updated', 'url']}
                data={packs} addItemCallback={addPackHandler}
                deleteItemCallback={deletePackHandler}
                saveRecentIdCallback={packIdSaver}
                setModalView={setModalActive}
                disabled={loading}/>
            <CustomModalWindow active={modalActive} setActive={setModalActive}>
                <p>Change Title</p>
                <CustomInput value={titleFromModal} onChange={e => setTitleFromModal(e.target.value)}/>
                <CustomButton onClick={() => updatePackHandler()}>Accept</CustomButton>
                <CustomButton onClick={() => setModalActive(false)}>Cancel</CustomButton>
            </CustomModalWindow>

        </div>
    )
}
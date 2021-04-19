import React, { useEffect } from "react"
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
import s from './Packs.module.css'
import {Sort} from "./Sort/Sort";

export const Packs = () => {

    const dispatch = useDispatch()
    const packs = useSelector<AppStoreType, any>(state => state.packs.packs)
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)
    const loading = useSelector<AppStoreType, boolean>(state => state.errorHandling.loading)
    const error = useSelector<AppStoreType, string>(state => state.errorHandling.error)

    useEffect(() => {
        if (!success) {dispatch(me())}
        dispatch(ErrorHandlingActions.setError(''))
        dispatch(getPacks({}))
    }, [dispatch])

    const addPackHandler = () => {
        dispatch(addPack())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePack(id))
    }

    const updatePackHandler = (id: string) => {
        dispatch(updatePack(id))
    }

    const packIdSaver = (id: string) => {
        dispatch(PacksActions.setPackId(id))
    }

    if (!success) { return <Redirect to={PATH.LOGIN} /> }
    return (
        <div className={s.packsContainer}>
            Packs page
            {loading && <Preloader/>}
            {error !== '' && <CustomSnackbar title={error} timer={3000} />}
            <Sort />
            <CustomTable title={['Packs', 'Cards', 'Updated', 'url']}
                data={packs} addItemCallback={addPackHandler}
                deleteItemCallback={deletePackHandler}
                updateItemCallback={updatePackHandler}
                saveRecentIdCallback={packIdSaver}
                disabled={loading}/>
        </div>
    )
}
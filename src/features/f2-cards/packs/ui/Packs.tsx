import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { AppStoreType } from "../../../../main/bll/store"
import { CustomTable } from "../../../../main/ui/common/CustomTable/CustomTable"
import { PATH } from "../../../../main/ui/routes/Routes"
import { addPack, deletePack, getPacks } from "../bll/packsThunks"

export const Packs = () => {

    const dispatch = useDispatch()
    const packs = useSelector<AppStoreType, any>(state => state.packs.packs)
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)

    useEffect(() => {
        dispatch(getPacks({}))
    }, [dispatch])

    const addPackHandler = () => {
        dispatch(addPack())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePack(id))
    }

    if (!success) { return <Redirect to={PATH.LOGIN} /> }
    return (
        <>
            Packs page
            <CustomTable title={['Packs', 'Cards', 'Updated', 'url']} data={packs} addItemCallback={addPackHandler} deleteItemCallback={deletePackHandler}/>
        </>
    )
}
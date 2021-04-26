
import {InferActionsType} from "../../../../main/bll/action-types";
import { UserType } from "./profileInitState";

export type ProfileActionsType = InferActionsType<typeof ProfileActions>;

export const ProfileActions = {
    setUser: (user: UserType) => ({
        type: "profile/SET_USER",
        user,
    } as const),

}
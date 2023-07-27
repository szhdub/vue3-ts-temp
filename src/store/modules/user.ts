import { defineStore } from 'pinia'
import { Storage } from '@/utils/Storage'
import { ACCESS_TOKEN_KEY } from '../../enums/cacheEnum';


interface UserState {
    token: string;
}

export const useStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        token: Storage.get(ACCESS_TOKEN_KEY, null)
    })
})
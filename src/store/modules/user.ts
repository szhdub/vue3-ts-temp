import { defineStore } from 'pinia'
import { Storage } from '@/utils/Storage'
import { ACCESS_TOKEN_KEY } from '../../enums/cacheEnum';
import { reqLogin } from '@/api/user';




interface UserState {
    token: string;
}

export const useStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        token: Storage.get(ACCESS_TOKEN_KEY, null)
    }),
    getters: {
        getToken(): string {
            return this.token;
        }
    },
    actions: {
        /** 登录成功保存token */
        setToken(token: string) {
            this.token = token ?? '';
            Storage.set(ACCESS_TOKEN_KEY, token);

        },
        /** 登录 */
        async login(param: Params.LoginParams) {
            try {
                const { data } = await reqLogin(param);
                this.setToken(data.token);
                return Promise.resolve(data);


            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
})
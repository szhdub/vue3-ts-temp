import request from '@/util/request'

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}


export const reqLogin = (data: any) => request.post(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get(API.USERINFO_URL);

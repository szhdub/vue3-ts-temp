import request from '@/utils/request'

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}


export const reqLogin = (data: Params.LoginParams) => request.post<any, Params.LoginResponseData>(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get<any, Params.UserResponseData>(API.USERINFO_URL);

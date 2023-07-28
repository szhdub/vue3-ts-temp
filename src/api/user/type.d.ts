declare namespace Params {
    type LoginParams = {
        username: string;
        password: string;
    }
    //  登录返回类型
    type LoginResponseData = {
        code: number;
        data: dataType;
    }

    type dataType = {
        token: string
        message?: string
    }

    // 服务器返回类型
    type UserResponseData = {
        code: number
        data: user
    }

    type user = {
        checkUser: userInfo
    }

    type userInfo = {
        userId: number
        avatar: String
        username: String
        password: String
        desc: String
        roles: String[]
        buttons: String[]
        routes: String[]
        token: String
    }

}

/* eslint-disable import/no-anonymous-default-export */

const authState = {
    isLogin: null,
    isRegister: false,
    token: '',
    isLoading: false,
    isError: false,
    alertMsg: '',
    level: 0,
    isRoute: false
};

export default (state=authState, action) => {
        switch(action.type){
            case 'AUTH_USER_PENDING': {
                return {
                    ...state,
                    isLoading: true,
                    alertMsg: 'Login in ....'
                };
            }
            case 'AUTH_USER_FULFILLED': {
                localStorage.setItem('token', action.payload.data.Token)
                return {
                    ...state,
                    level: action.payload.data.user.level,
                    isLogin: true,
                    isError: false,
                    isLoading: false,
                    token: action.payload.data.Token,
                    alertMsg: 'Login Succesfully'
                };
            }
            case 'AUTH_USER_REJECTED': {
                return {
                    ...state,
                    isLoading: false,
                    isLogin: false,
                    alertMsg: 'Login Failed'
                };
            }
            case 'SET_TOKEN': {
                return {
                  ...state,
                  token: action.payload.token,
                  isLogin: true,
                }
              }
            case 'LOGOUT': {
                localStorage.removeItem('token')
                localStorage.removeItem('level')
                return {
                    state: undefined
                }
            }
            case 'RESET': {
                return {
                    ...state,
                    isLogin: null,
                    isRoute: false
                }
            }
            case 'ROUTE' : {
                return {
                    ...state,
                    isRoute: true
                }
            }
            default: {
                return state;
            }
        }
    }
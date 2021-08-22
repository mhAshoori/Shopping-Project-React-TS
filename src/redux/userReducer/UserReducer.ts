const initialState = {
  isLogin: false,
  email: "",
  password: "",
  addressInfo: [],
};
const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogin: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "logout":
      return {
        ...state,
        isLogin: false,
        email: "",
        password: "",
      };
    case "addressinfo":
      return {
        ...state,
        addressInfo: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;

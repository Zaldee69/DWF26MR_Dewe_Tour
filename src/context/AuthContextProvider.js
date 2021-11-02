import { createContext, useReducer } from "react";

const initialValue = {
  isLogin: false,
  isAdmin: false,
  user: {
    id: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
  },
};

export const AuthContext = createContext();

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      localStorage.setItem(
        "user_login",
        JSON.stringify({
          isLogin: true,
          isAdmin: false,
          user: payload,
        })
      );
      return {
        isLogin: true,
        isAdmin: false,
        user: payload,
      };
    case "ADMIN_LOGIN":
      localStorage.setItem(
        "admin_login",
        JSON.stringify({
          isLogin: true,
          isAdmin: true,
          payload,
        })
      );
      return {
        isLogin: true,
        isAdmin: true,
        user: payload,
      };

    case "LOGOUT":
      console.log(state);
      const loginState = JSON.parse(localStorage.getItem("user_login"));
      if (loginState) {
        localStorage.removeItem("user_login");
        return {
          isLogin: false,
          isAdmin: false,
          payload,
        };
      } else {
        localStorage.removeItem("admin_login");
        return {
          isLogin: false,
          isAdmin: false,
          payload,
        };
      }

    case "AUTH":
      const login = JSON.parse(localStorage.getItem("user_login"));

      return login
        ? login
        : {
            isLogin: false,
            user: {
              email: "",
              password: "",
            },
          };
    case "ADMIN_AUTH":
      const loginAdminState = JSON.parse(localStorage.getItem("admin"));

      return loginAdminState
        ? loginAdminState
        : {
            isLogin: false,
            isAdmin: false,
            user: {
              email: "",
              password: "",
            },
          };

    default:
      return;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

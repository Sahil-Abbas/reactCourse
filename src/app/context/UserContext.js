import React from "react";

export const loginState = {
    isLoggedin: false
}

export const login = () => {
    loginState.isLoggedin = true;
}

export const logout = () => {
    loginState.isLoggedin = false;
}

export const UserContext = React.createContext(loginState);
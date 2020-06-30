import React, { useState, useEffect } from "react";
import AuthContext from "./authContext";
import Http from "../../Http";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthState = ({ children }) => {
  const history = useHistory();
  const [state, setstate] = useState({
    loading: false,
    user: {},
  });

  useEffect(() => {
    checkTokenAndExp();
  }, []);

  const checkTokenAndExp = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const { exp, sub } = await jwt_decode(token);
      const expToken = Date.now() <= exp * 1000;
      if (expToken) {
        setstate({
          loading: false,
          user: await getAuthUser(token, sub),
        });
      } else {
        localStorage.clear();
      }
    } else {
      setstate({
        user: {},
      });
    }
  };

  const getAuthUser = async (token, name) => {
    const { data } = await Http.get(`employe/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  const login = async (user) => {
    try {
      setstate({
        loading: true,
      });
      const { data } = await Http.post("employe/auth", user);
      const token = data.token;
      localStorage.setItem("token", token);
      const { sub } = await jwt_decode(token);

      setTimeout(async () => {
        setstate({
          loading: false,
          user: await getAuthUser(token, sub),
        });
        history.push("/");
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setstate({
      user: {},
    });
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

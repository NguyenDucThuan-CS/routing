import axios from "axios";
import * as ActionType from "./constants";
import setHeader from "../../../../utils/setHeader";
import api from "../../../../utils/apiUtils";


const TIME_EXP = 5000;
export const actAuthLogin = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());
      /*   const result = await axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method:"POST",
            data: user,
        }) */
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);
      if (result.statusText == "OK") {
        if (result.data.maLoaiNguoiDung == "KhachHang") {
          return Promise.reject({
            response: {
              data: "Ban k co quyen truy cap",
            },
          })
          .catch((error) => {
            dispatch(actAuthFailed(error));
          });
        }
        setHeader(result.data.accessToken);
        const date = new Date().getTime();
        const exp = date + TIME_EXP;

        localStorage.setItem("exp", exp);
        dispatch(actSetTimeOutLogout(history,TIME_EXP));
        localStorage.setItem("User Admin", JSON.stringify(result.data));
        history.replace("/dashboard");
        dispatch(actAuthSuccess(result.data));
      } else {
        dispatch(actAuthFailed(result));
      }
    } catch (error) {
      dispatch(actAuthFailed(error));
    }
  };
};

export const actTryLogin = (history) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("User Admin"));
    if (!user) {
      return;
    }

    const exp = localStorage.getItem("exp");
    const date = new Date().getTime();
    if (date > exp) {
      //logout
      dispatch(actLogout(history));
      return;
    }
    dispatch(actSetTimeOutLogout(history, exp - date));
    setHeader(user.accessToken);
    dispatch(actAuthSuccess(user));
  };
};

export const actLogout = (history) => {
  localStorage.removeItem("User Admin");
  localStorage.removeItem("exp");

  history.replace("/auth");

  return {
    type: ActionType.AUTH_CLEAR_DATA,
  };
};

export const actSetTimeOutLogout = (history,expTimeout) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogout(history));
    },expTimeout)
  };
};


const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (data) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: data,
  };
};

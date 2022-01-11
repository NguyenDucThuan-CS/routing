import { LIST_MOVIE_REQUEST, LIST_MOVIE_FAILED, LIST_MOVIE_SUCCESS} from "./constants";
import axios from "axios";

export const actFetchListMovie = () => {
   return (dispatch) => {
    dispatch(actListMovieRequest());
    axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
        method: "GET",
    })

    .then((result) => {
        dispatch(actListMovieSuccess(result.data));
    })
    .catch((err)=>{
        dispatch(actListMovieFailed(err));
    })
   }
}
export const actListMovieRequest = () => {
    return {
        type: LIST_MOVIE_REQUEST,
       
    }
}

export const actListMovieSuccess = (data) => {
    return {
        type: LIST_MOVIE_SUCCESS,
        payload: data,
    }
}


export const actListMovieFailed = (data) => {
    return {
        type: LIST_MOVIE_FAILED,
        payload: data,
    }
}


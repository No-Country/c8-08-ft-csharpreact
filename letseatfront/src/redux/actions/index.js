import axios from 'axios';
import Swal from "sweetalert2";
import { GET_ALL_RESTAURANTS } from './actionTypes';

const URLprincipal = "https://b7d7-190-2-211-112.sa.ngrok.io";

const UrlUser = `${URLprincipal}/api/Login`;
const UrlAllRestaurant = `${URLprincipal}/api/Business/allBusines?PageNumber=1&PageSize=5`; 


export const postLogIn = (valuesInput) => {
    return async () => {
        try {
        const input = {
            e_mail: valuesInput.e_mail,
            password: valuesInput.password,
        };
        await axios.post(UrlUser, input)
        .then(function (response) { console.log(response) })
        } catch (err) {
        Swal.fire({
            title: "Login Error",
            text: "Your email or your password are not correct. Try again please!",
            icon: "error",
            showCancelButton: false,
            confirmButtonColor: "#3c8c6c",
            confirmButtonText: "Okey",
        });
        }
    };
};

export const getAllRestaurants = () => (dispatch) => {
    return async () => {
        try {
            await axios.get(UrlAllRestaurant)
            .then((response) =>
                dispatch({
                type: GET_ALL_RESTAURANTS,
                payload: response.data,
                })
                .then(console.log(response))
                
            )
        } catch (error) {
            console.log(error)
        }
    }
  };
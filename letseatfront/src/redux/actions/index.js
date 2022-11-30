import axios from 'axios';
import Swal from "sweetalert2";
import { 
     } from './actionTypes';

const UrlUser = "https://81df-190-2-211-112.sa.ngrok.io/api/Login"


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
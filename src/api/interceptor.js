import axios from "axios";
import { GetItem } from "../util/localstorage";

const  Instance= axios.create({
    baseURL:'http://localhost:4000/',
    headers: {
        Authorization: `Bearer ${GetItem("token")}`,
      },})

export default  Instance
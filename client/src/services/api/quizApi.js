import axios from "axios";
import { URL } from "../../../constant.js";
export const createQuiz = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${URL}/quiz`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

import axios from "axios";
import { apiUrl } from "../utils/constant";

export async function login(formData) {
  await axios.post(`${apiUrl}/login`, formData)
  .then((response) => {
    console.log(response);
    
    return response.data
  })
  .catch((err) => {
    console.log("error", err);
    
    return err
  });
}

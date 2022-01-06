import axios from "axios";
//const token = JSON.parse(localStorage.getItem('token'));
export default axios.create({
  baseURL: "https://public.connectnow.org.uk/applicant-test/",
 // headers: {"Authorization" : `Bearer ${token}`}
});
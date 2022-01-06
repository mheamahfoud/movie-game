import http from "../common/http-common";
import axios from "axios";
class GamesService {
  getAll() {
   // var x= http.get("");
  return   axios.get("https://public.connectnow.org.uk/applicant-test/");
    
  }
}

export default new GamesService();
import axios from "axios";

export function requestGetExperiences(props) {
  return axios.request({
    method: "get",
    url: `https://salmansaif.herokuapp.com/api/experiences/`
  });
}

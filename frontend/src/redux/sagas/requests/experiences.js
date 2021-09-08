import axios from "axios";

export function requestGetExperiences(props) {
  return axios.request({
    method: "get",
    url: `/api/experiences/`
  });
}

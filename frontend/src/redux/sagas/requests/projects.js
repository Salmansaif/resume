import axios from "axios";

export function requestGetProjects(props) {
  return axios.request({
    method: "get",
    url: `https://salmansaif.herokuapp.com/projects/`
  });
}

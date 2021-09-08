import axios from "axios";

export function requestGetProjects(props) {
  return axios.request({
    method: "get",
    url: `http://127.0.0.1:8000/api/projects/`
  });
}

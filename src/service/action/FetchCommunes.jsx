import { axiosClient } from "../constants/ApiUrl";

export const fetchCommunesRequest = async (url) => {
  try {
    const data = await axiosClient.get(url);
    return data.data.data;
  } catch (error) {
    console.log(error?.response);
  }
};

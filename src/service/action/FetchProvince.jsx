import { axiosClient } from "../constants/ApiUrl";

export const fetchProvinceRequest = async () => {
  try {
    const data = await axiosClient.get();
    return data.data.data;
  } catch (error) {
    console.log(error?.response);
  }
};

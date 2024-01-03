import axios from "axios"


export const mainUrl = 'https://api.staging.goldenqueenhospital.com/v1/pumi'


export const districtUrl = ()=>'/districts?parent_id='

export const communesUrl =()=>'/communes?parent_id='

export const villagesUrl = ()=> '/villages?parent_id='

export const axiosClient = axios.create({
    baseURL: mainUrl,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

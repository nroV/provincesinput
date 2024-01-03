import "./App.css";
import Layout from "./components/Layout";
import DropDown from "./components/DropDown";
import { useEffect, useState } from "react";
import {fetchCommunesRequest} from "./service/action/FetchCommunes"
import {fetchProvinceRequest} from "./service/action/FetchProvince"
import {fetchDistrictRequest} from "./service/action/FetchDistrict"
import {fetchVillagesRequest} from "./service/action/FetchVillages"
import { communesUrl, districtUrl, villagesUrl } from "./service/constants/ApiUrl";
function App() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [comummnes, setCommunes] = useState([]);
  const [villages, setVillages] = useState([]);

  const [isloading, setLoading] = useState(false);

  const [selectedProvince, setSelectProvince] = useState("");
  const [selectedDistrict, setSelectDistrict] = useState(null);
  const [selectedCommunes, setSelectCommunes] = useState(null);
  const [selectedVillage, setSelectVillage] = useState(null);

  // const [listDistricts, setListDistricts] = useState([]);
  // const [listCommunes, setListCommunes] = useState([]);


  const clearAllData = () => {

 
    setSelectCommunes(null);
    setSelectDistrict(null);
    setSelectVillage(null);
    setSelectProvince(null);
    setDistricts([]);
    setCommunes([]);
    setProvinces([])
    setVillages([])
    selectedProvince("")

   
  };

  const fetchVillage = async (id) => {
    try {
      const data = await fetchVillagesRequest(`${villagesUrl()}${id}`);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  };
  const fetchDistrict = async (id) => {
    try {
      const data = await fetchDistrictRequest(`${districtUrl()}${id}`);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  };

  const fetchCommunes = async (id) => {
    try {
      const data = await fetchCommunesRequest(`${communesUrl()}${id}`);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  };

  const onSelectProvince = async (id) => {
    setSelectProvince(id);
    

    setDistricts([]);
    setCommunes([]);
    setVillages([]);

    setSelectVillage("");
    setSelectCommunes("");
    setSelectDistrict("");

    const data = await fetchDistrict(id);
    setDistricts(data); //refactor
  };

  const onSelectDistrict = async (id) => {
    setSelectDistrict(id);
    // setListVillages([]);
    setVillages([]);
    setSelectCommunes("");
    setSelectVillage("");

    const data = await fetchCommunes(id);
    setCommunes(data);
  };
  const onSelectCommunes = async (id) => {
    setSelectCommunes(id);
    setSelectVillage("");

    const data = await fetchVillage(id);
    setVillages(data);
  };
  const onSelectVillage = (id) => {
    setSelectVillage(id);
  };

  const fetchprovince = async () => {
    try {
      const data = await fetchProvinceRequest()
      setProvinces(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("done");
    }
  };
  useEffect(() => {
    fetchprovince();
  }, [selectedProvince]);

  return (
    <>
      <h1>Find Your Place In Cambodia</h1>
      <Layout>
        <DropDown
          title={"Province"}
  
          onSelect={onSelectProvince}
          data={provinces}
          value={selectedProvince}
        />
        <DropDown
          title={"Districts"}
          onSelect={onSelectDistrict}
          data={districts}
          value={selectedDistrict}
        />
        <DropDown
          title={"Communes"}
          onSelect={onSelectCommunes}
          data={comummnes}
          value={selectedCommunes}
        />
        <DropDown
          title={"Villages"}
          onSelect={onSelectVillage}
          data={villages}
          value={selectedVillage}
        />

        <button
          onClick={clearAllData}
          style={{
            margin: "20px 0px",
          }}
        >
          Reset
        </button>
        {/* 
        <div>
          <h3>
            Province: <span>{displayProvince?.name?.km}</span>
          </h3>
          <h3>Districts: {displayDistrict?.name?.km}</h3>
          <h3>Communes {displayCommune?.name?.km}</h3>
          <h3>Villages {displayVillage?.name?.km}</h3>
        </div> */}
      </Layout>
    </>
  );
}

export default App;

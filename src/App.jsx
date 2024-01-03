import "./App.css";
import Layout from "./components/Layout";
import DropDown from "./components/DropDown";
import jsonDistricts from "./data/districts.json";
import jsonProvince from "./data/provinces.json";
import jsonCommunes from "./data/communes.json";
import jsonVillage from "./data/villages.json";
import { useMemo, useState } from "react";

const dataExtractor = (data) => {
  const results = Object.keys(data).map((key) => {
    return {
      id: key,
      name: data[key].name,
    };
  });
  return results;
};

function App() {
  const provinces = useMemo(() => dataExtractor(jsonProvince.provinces), []);

  const districts = useMemo(() => dataExtractor(jsonDistricts.districts), []);

  const communes = useMemo(() => dataExtractor(jsonCommunes.communes), []);

  const villages = useMemo(() => dataExtractor(jsonVillage.villages), []);

  const [selectedProvince, setSelectProvince] = useState("");
  const [selectedDistrict, setSelectDistrict] = useState(null);
  const [selectedCommunes, setSelectCommunes] = useState(null);
  const [selectedVillage, setSelectVillage] = useState(null);

  const [listDistricts, setListDistricts] = useState([]);
  const [listCommunes, setListCommunes] = useState([]);
  const [listVillages, setListVillages] = useState([]);

  const clearAllData = () => {
    setSelectCommunes(null);
    setSelectDistrict(null);
    setSelectVillage(null);
    setSelectProvince(null);
    setListDistricts([]);
    setListCommunes([]);
    setSelectProvince("");
    setListVillages([]);
  };

  // const findname = (data, id) =>
  //   data?.find((pro) => pro?.id.startsWith(id)).name.latin;



  const displayProvince = useMemo(() => {
    if (!selectedProvince) {
      return;
    }
    // return findname(provinces, selectedProvince);
    return provinces.find((province) =>
      province?.id.startsWith(selectedProvince)
    );
  }, [selectedProvince]);

  const displayDistrict = useMemo(() => {
    if (!selectedDistrict) {
      return;
    }

    return districts?.find((district) =>
      district?.id.startsWith(selectedDistrict)
    );

    // return findname(districts, selectedDistrict);
  }, [selectedDistrict]);

  const displayCommune = useMemo(() => {
    if (!selectedCommunes) {
      return;
    }
    // return findname(communes, selectedCommunes);

    return communes.find((pro) => pro?.id.startsWith(selectedCommunes))
  }, [selectedCommunes]);

  const displayVillage = useMemo(() => {
    if (!selectedVillage) {
      return;
    }
    // return findname(villages, selectedVillage);
    return villages.find((pro) => pro?.id.startsWith(selectedVillage));
  }, [selectedVillage]);

  const onSelectProvince = (id) => {
    setSelectProvince(id);
    setListDistricts([]);
    setListCommunes([]);
    setListVillages([]);
    setSelectVillage("");
    setSelectCommunes("");
    setSelectDistrict("");
    setListDistricts(
      districts.filter((district) => district.id.startsWith(id))
    );
  };

  const onSelectDistrict = (id) => {
    setSelectDistrict(id);
    setListVillages([]);
    setSelectCommunes("");
    setSelectVillage("");
    setListCommunes(communes.filter((commune) => commune.id.startsWith(id)));
  };
  const onSelectCommunes = (id) => {
    setSelectCommunes(id);
    setSelectVillage("");
    setListVillages(villages.filter((village) => village.id.startsWith(id)));
  };
  const onSelectVillage = (id) => {
    setSelectVillage(id);
  };

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
          data={listDistricts}
          value={selectedDistrict}
        />
        <DropDown
          title={"Communes"}
          onSelect={onSelectCommunes}
          data={listCommunes}
          value={selectedCommunes}
        />
        <DropDown
          title={"Villages"}
          onSelect={onSelectVillage}
          data={listVillages}
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

        <div>
          <h3>
            Province: <span>{displayProvince?.name?.km}</span>
          </h3>
          <h3>Districts: {displayDistrict?.name?.km}</h3>
          <h3>Communes {displayCommune?.name?.km}</h3>
          <h3>Villages {displayVillage?.name?.km}</h3>
        </div>
      </Layout>
    </>
  );
}

export default App;

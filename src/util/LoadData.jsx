import jsonData from '../data/provinces.json'
import jsonVillage from '../data/villages.json'

import jsonDistrict from '../data/districts.json'
import jsonCommunes from '../data/communes.json'

export const loadCleanProvince = () => {

const loadData = () => JSON.parse(JSON.stringify(jsonData));



const allpp= Object.values(loadData().provinces)
const alid = Object.keys(loadData().provinces)



const temprovince = allpp.map((ele,index)=>{

  return {
    id:alid[index],
    name:ele.name,
    administrative_unit:ele.administrative_unit
  }
})


return temprovince
}

export const loadCleanDistrict = ()=>{

const loadData = () => JSON.parse(JSON.stringify(jsonDistrict));



const allpp= Object.values(loadData().districts)
const alid = Object.keys(loadData().districts)



const temdistricts = allpp.map((ele,index)=>{

  return {
    id:alid[index],
    name:ele.name,
    administrative_unit:ele.administrative_unit
  }
})

return temdistricts


// const cleandistrict = temdistricts.map((district)=>{


//   return {
//     ...district,
//     communes:loadCleanCommunes().filter((commune)=>commune.id.split("").splice(0,4).join("") === district.id)

//   }
// })

// return cleandistrict


}


export const loadCleanCommunes = ()=>{

    const loadData = () => JSON.parse(JSON.stringify(jsonCommunes));



    const allpp= Object.values(loadData().communes)
    const alid = Object.keys(loadData().communes)
    
    
    
    const temcommunes = allpp.map((ele,index)=>{
    
      return {
        id:alid[index],
        name:ele.name,
        administrative_unit:ele.administrative_unit
      }
    })

    return temcommunes
    // const cleancommunes = temcommunes.map((commune)=>{


    //   return {
    //     ...commune,
    //     villages:loadCleanVillage().filter((village)=>village.id.split("").splice(0,6).join("") === commune.id)
    
    //   }
    // })
    
    // return cleancommunes
}

export const loadCleanVillage = ()=>{
    
const loadData = () => JSON.parse(JSON.stringify(jsonVillage));



const allpp= Object.values(loadData().villages)
const alid = Object.keys(loadData().villages)



const temvillage = allpp.map((ele,index)=>{

  return {
    id:alid[index],
    name:ele.name,
    administrative_unit:ele.administrative_unit
  }
})
  

return temvillage
}
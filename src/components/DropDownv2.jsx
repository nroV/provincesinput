export default function DropDown({ title, data, onSelect, value }) {
    function onChangeoption(e) {
  
      const obj = JSON.parse(e.target.value)
      const {id,name} ={...obj}
  
      if (onSelect) {
        onSelect(id,name.latin);
      }
    }
  
    console.log(value)
  
  
    return (
      <>
        <label className="text-left">{title}</label>
  
        <select disabled={!data?.length} onChange={onChangeoption} value={value}>
          <option value=""> Please Select</option>
  
          {data?.map((item, index) => (
            <option key={index} value={JSON.stringify(item)}>
              {item.name.latin} / {item.name.km} 
  
            
            </option>
          ))}
        </select>
      </>
    );
  }
  
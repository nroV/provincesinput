import { useState } from "react";

export default function DropDown({ title, data, onSelect, value }) {
  function onChangeoption(e) {
    if (onSelect) {
      onSelect(e.target.value);
    }
  }

  return (
    <>
      <label className="text-left" style={{
        textAlign:'left',
        marginBottom:'10px'
      }}>{title}</label>

      <select disabled={!data?.length} onChange={onChangeoption} value={value} style={{
               marginBottom:'10px',
               padding:'10px'
      }}>
        <option value=""> Please Select</option>

        {data?.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name.latin} / {item.name.km}
          </option>
        ))}
      </select>
    </>
  );
}

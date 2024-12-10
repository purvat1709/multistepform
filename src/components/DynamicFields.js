import React from "react";

const DynamicFields = ({ items, onAdd, onRemove, onChange, placeholder }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            value={item}
            onChange={(e) => onChange(index, e.target.value)}
            className="border p-2 rounded flex-grow"
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="bg-red-500 text-white px-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default DynamicFields;

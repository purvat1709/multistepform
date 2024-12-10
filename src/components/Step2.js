import React from "react";

function Step2({ formData, setFormData, handleNext, handleBack }) {
  const handleAddPhone = () => {
    setFormData({ ...formData, phoneNumbers: [...formData.phoneNumbers, ""] });
  };

  const handleRemovePhone = (index) => {
    const updatedPhones = formData.phoneNumbers.filter((_, i) => i !== index);
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  const handleChangePhone = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index] = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Phone Numbers</h2>
      {formData.phoneNumbers.map((phone, index) => (
        <div key={index} className="mb-4 flex items-center">
          <input
            type="text"
            value={phone}
            onChange={(e) => handleChangePhone(index, e.target.value)}
            className="w-full border p-2 rounded mr-2"
          />
          <button
            type="button"
            onClick={() => handleRemovePhone(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={handleAddPhone}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Phone
      </button>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2;

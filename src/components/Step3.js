import React from "react";

function Step3({ formData, handleBack, handleSubmit }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Numbers:</strong></p>
      <ul>
        {formData.phoneNumbers.map((phone, index) => (
          <li key={index}>{phone}</li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3;

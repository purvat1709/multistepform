import React from "react";

const FormSummary = ({ data }) => (
  <div>
    <h2 className="text-xl mb-4">Summary</h2>
    <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default FormSummary;

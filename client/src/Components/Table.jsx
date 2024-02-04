import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Table = () => {
  const [report, setreport] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      let fetchData = await fetch("http://localhost:4000/get/reports", {
        method: "get",
      });
      fetchData = await fetchData.json();
    //   console.log(fetchData.getData);
    

      setreport(fetchData.getData);
    };
    fetchReport();
  }, []);

  
  return (
    <div>
      <div className="max-w-7xl shadow-lg rounded mx-auto mt-8 py-6 bg-yellow-500 bg-opacity-10">
        <button
          className="bg-green-600 hover:bg-green-700 duration-300 text-white font-bold px-5 py-2 rounded m-2"
          onClick={() => navigate("/add/report")}
        >
          Add Report
        </button>
        <h1 className="text-center font-bold text-2xl mb-7">Petrol Report</h1>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3">CustomerId</th>
                <th>CustomerName</th>
                <th className="p-3">FuelType</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {report?.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.customername}</td>
                    <td>{item.fueltype}</td>
                    <td>{item.quantity} litre</td>
                    <td>{item.petrolamount}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

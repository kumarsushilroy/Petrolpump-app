import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReport = () => {
  const navigate = useNavigate();

  const [customername, setcustomername] = useState();
  const [fueltype, setfueltype] = useState();
//   const [amount, setamount] = useState();
  const [quantity, setquantity] = useState();

  const [price, setprice] = useState();

//   const petrolamount = price * amount;
  const petrolamount = price * quantity;

  const obj = { customername, fueltype, petrolamount, quantity };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(obj);
    let fetchPetrolData = await fetch("http://localhost:4000/create/report", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchPetrolData = await fetchPetrolData.json();
    console.log(fetchPetrolData);
    alert("Report Added Successfully !");
    navigate("/");
  };

  useEffect(() => {
    if (fueltype == "petrol") {
      setprice(90);
    } else if (fueltype == "cng") {
      setprice(80);
    } else {
      setprice(120);
    }
  }, [fueltype]);

  return (
    <div>
      <div className="max-w-2xl shadow-lg rounded mx-auto mt-10 ">
        <h1 className="text-center font-bold text-xl">Add Report</h1>
        <form onSubmit={handleSubmit} className="w-full p-4 space-y-4">
          <div>
            <label>Customer Name:</label>
            <input
             required
              onChange={(e) => setcustomername(e.target.value)}
              type="text"
              className=" outline-none border w-full p-1"
            />
          </div>
          <div>
            <label>Fuel Type:</label>
            <select
            required
              onChange={(e) => setfueltype(e.target.value)}
              name=""
              id=""
              className="w-full p-1 outline-none bg-black text-white"
            >
              <option value="petrol">Petrol</option>
              <option value="cng">CNG</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>
          <div>
            <label className="flex gap-4">
              <span>price:{price}/litre</span> Quantity:
            </label>
            <input
            required
              onChange={(e) => setquantity(e.target.value)}
              type="number"
              className=" outline-none border w-full p-1"
            />
          </div>

          <div>
            <button
              className="bg-green-600 hover:bg-green-700 duration-300 text-white font-bold px-4 py-1 rounded m-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReport;

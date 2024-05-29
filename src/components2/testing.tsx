import React, { useState } from "react";

const Testing: React.FC = () => {
  const [customer, setCustomer] = useState({
    name: "Sidhant",
    address: {
      city: "Raisinghnagar",
      pinCode: 335051,
    },
  });

  const Btn = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, pinCode: 335241, city: "Gajsinghpur" },
    });
  };

  console.log(customer);

  return (
    <>
      <h1>{customer.name}</h1>
      <p>{customer.address.city}</p>
      <p>{customer.address.pinCode}</p>
      <button className="mu-6 btn btn-primary" onClickCapture={Btn}>
        My Button
      </button>
    </>
  );
};

export default Testing;

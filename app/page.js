"use client";

import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [currentAccount, setCurrentAccount] = useState('');

  const address = "0x388C818CA8B9251b393131C08a736A67ccB19297";

  const [balance, setBalance] = useState([]);

  const etherJs = async () => {
    const provider = new ethers.providers.EtherscanProvider();
    console.log(provider);

    const ethBalance = await provider.getBalance(address);

    console.log("The balance is:" + ethBalance);

    setBalance(ethBalance.toString());
  };

  useEffect(() => {
    etherJs();
  }, []);

  return (
    <div className="flex justify-center">
      <h1 className="font-extrabold text-center text-3xl">
        <p>The Ethers balance : {balance}</p>
      </h1>
    </div>
  );
};

export default page;

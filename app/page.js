"use client";

import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const page = () => {
  // const [currentAccount, setCurrentAccount] = useState('');

  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";

  const [balance, setBalance] = useState([]);
  const [transaction , setTransaction] = useState([]);

  const etherJs = async () => {
    const provider = new ethers.providers.EtherscanProvider();
    console.log(provider);

    const ethBalance = await provider.getBalance(address);
    const showBalance = ethers.utils.formatEther(ethBalance);

    const blockNumber = await provider.getBlock(19453465);
    const number = blockNumber.transactions;


    console.log(blockNumber);
    console.log("The balance is:" + ethBalance);
    console.log("The Ethers balance is : " + showBalance);

    setBalance(ethBalance.toString());
    setTransaction(number);
    console.log(transaction);
  };

  // useEffect(() => {
  //   etherJs();
  // }, []);

  etherJs();

  return (
    <div className="flex justify-center">
      <h1 className="font-extrabold text-center text-3xl">
        <p>The Ethers balance : {balance}</p>

       {
        transaction.map((el , i)=>(
           <div key={i+1}>

                <h6>{el}</h6>

              </div>
        ))
       }
      </h1>
    </div>
  );
};

export default page;

import { API } from "../config/api";
import { useState } from "react";

const TransactionsPending = () => {
  const [transactionsPending, setTransactionsPending] = useState();

  const getTransactionsPending = async () => {
    try {
      const response = await API.get("/transactions/pending");

      //store response data to state
      setTransactionsPending(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [transactionsPending, getTransactionsPending];
};

export default TransactionsPending;

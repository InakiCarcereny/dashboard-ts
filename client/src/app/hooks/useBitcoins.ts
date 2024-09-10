import { useState } from "react";
import { bicoinAdapter } from "../adapter/bitcoins.adapter";
import { Bitcoin } from "../models/bitcoinsApi";

export function useBitcoins() {
  const [bitcoins, setBitcoins] = useState<Bitcoin[]>([]);

  const getBitcoins = async () => {
    try {
      const res = await bicoinAdapter();
      setBitcoins(res);
    } catch (err) {
      console.log(err);
    }
  };

  return { bitcoins, getBitcoins };
}

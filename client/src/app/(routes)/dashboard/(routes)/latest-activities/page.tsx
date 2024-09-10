"use client";

import { useBitcoins } from "@/app/hooks/useBitcoins";
import { Datum } from "@/app/models/bitcoinsApi";
import { useEffect } from "react";

export interface MappedBitcoin {
  _code: string;
  _msg: string;
  _data: Datum[];
}

export default function LatestActivities() {
  const { bitcoins, getBitcoins } = useBitcoins();

  // useEffect(() => {
  //   getBitcoins();
  // }, [getBitcoins]);

  return (
    <div>
      <h1>Latest Activities</h1>
    </div>
  );
}

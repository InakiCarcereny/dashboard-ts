import { getBitcoinData } from "../interceptors/bitcoin";
import { Bitcoin } from "../models/bitcoinsApi";

export async function bicoinAdapter() {
  try {
    const res = await getBitcoinData();

    const bitcoins = res.data;

    return bitcoins.map((bitcoin: Bitcoin) => ({
      _code: bitcoin.code,
      _msg: bitcoin.msg,
      _data: bitcoin.data,
    }));
  } catch (err) {
    throw new Error("Error getting bitcoins");
  }
}

import { atom } from "recoil";

export const ProductAtom = atom({
  key: "ProductAtom",
  default: undefined,
});

export const SelectAtom = atom({
    key: "SelectAtom",
    default: [],
});
  
export const TimeAtom = atom({
    key: "TimeAtom",
    default: undefined,
});

export const OpenAtom = atom({
    key: "OpenAtom",
    default: undefined,
});

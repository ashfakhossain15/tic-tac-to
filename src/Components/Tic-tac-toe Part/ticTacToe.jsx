import { useState } from "react";
import x from "/130217-x-letter-free-photo.png";
import o from "/—Pngtree—white circle element asset with_5995571.png";
let data = ["", "", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${x}">`;
      data[num] = "x";
      setCount(++count);
      console.log(count);
    } else {
      e.target.innerHTML = `<img className="w-full" src="${o}">`;
      data[num] = "o";
      setCount(++count);
    }
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
      won(data);
    }
    else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
      won(data);
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
      won(data);
    }
  };
  const won = (winner) => {
    setLock(true);
  };

  return (
    <div className="container mx-auto min-h-screen text-white  ">
      <h1 className="text-center w-full my-[50px] text-6xl font- light">
        Tic tac <span className="text-[#26ffcb] font-extrabold ">toe_</span>
      </h1>
      <div className="board w- justify-center  items-center">
        <div className="row-1 flex">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row-2 flex">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row-3 flex">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-14 my-12 text-2xl font-bold text-white py-4 active:scale-[0.9]  duration-200 transition-all bg-[#1f3540] rounded-full">
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;

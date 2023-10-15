import { useRef, useState } from "react";
import xo from "/130217-x-letter-free-photo.png";
import ox from "/—Pngtree—white circle element asset with_5995571.png";
let data = ["", "", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");
  const titleRef = useRef(null);
  const modal = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img className="duration-200 transition-all" src="${xo}">`;
      data[num] = "x";
      setCount((count) => count + 1);
    } else {
      e.target.innerHTML = `<img className="w-full" src="${ox}">`;
      data[num] = "o";
      setCount((count) => count + 1);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
    console.log(data);
  };
  const won = (winner) => {
    setLock(true);
    // setWinner(won);
    if (winner === "x") {
      modal.current.showModal();
      console.log("first winner");
      titleRef.current.innerHTML = ` <h3> x win</h3>`;
      console.log(won);
    } else if (winner === "o") {
      modal.current.showModal();
      titleRef.current.innerHTML = ` <h3> o win</h3>`;
    }
  };
  console.log(modal);
  return (
    <div className="container mx-auto min-h-screen text-white">
      <h1 className="text-center w-full my-[50px] text-6xl font- light">
        Tic tac <span className="text-[#26ffcb] font-extrabold ">toe_</span>
      </h1>
      <div>
        <dialog ref={modal} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <div>
              {" "}
              <h3 ref={titleRef}></h3>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => modal.current.close()}>Close</button>
          </form>
        </dialog>
      </div>
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

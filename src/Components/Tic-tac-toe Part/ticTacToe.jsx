import React, { useRef, useState } from "react";
import xo from "/130217-x-letter-free-photo.png";
import ox from "/—Pngtree—white circle element asset with_5995571.png";
let data = ["", "", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const modal = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const x = count % 2 === 0;

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    setCount((count) => count + 1);
    if (count % 2 === 0) {
      e.target.innerHTML = `<img className="transition-all duration-200" src="${xo}">`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img className="w-full" src="${ox}">`;
      data[num] = "o";
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
      titleRef.current.innerHTML = ` 
      <div className="p-10 m-5 w-52"> 
      <img className="w-24" src="${xo}">
      </div>
      `;
      console.log(won);
    } else if (winner === "o") {
      modal.current.showModal();
      titleRef.current.innerHTML = ` <div className="p-10 m-5 w-52"> 
      <img className="transition-all duration-200 " src="${ox}">
      </div>

      `;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    box_array.map((e) => (e.current.innerHTML = ""));
  };
  return (
    <React.Fragment>
      <div className="flex items-center ">
        <section
          className={`absolute top-1/2 -left-[4.5rem] ml-10 sm:ml-7  lg:ml-5 rotate-90 text-center transition-all duration-200 player-1 lg:-mt-10 opacity-30 items-center flex flex-col ${
            x
              ? "bg-red-800 !opacity-100 player_1 px-8 z-0 pt-3 pb-2  ml-3 sm:px-16 sm:pt-7 sm:pb-5 sm:-ml-3 sm:-mt-16 lg:px-24 lg:pt-20 lg:pb-9 lg:-mt-28 lg:-ml-[2rem] rounded-t-full"
              : ""
          }`}
        >
          {x ? (
            <p className="text-2xl font-semibold transition-all duration-200 opacity-100 sm:text-3xl lg:text-4xl">
              Your turn
            </p>
          ) : (
            <p className="text-2xl font-semibold transition-all duration-200 opacity-0 sm:text-3xl lg:text-4xl">
              Your turn
            </p>
          )}
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extralight">
            Player : 1
          </h3>
        </section>
        <section
          className={`absolute top-1/2 -right-[4.5rem] mr-10 sm:mr-7  lg:mr-5 -rotate-90 text-center transition-all duration-200 player-2 lg:-mt-10 opacity-30 items-center flex flex-col ${
            !x
              ? "bg-gray-400 text-black !opacity-100 player_2 px-8 pt-3 pb-2  mr-3 sm:px-16 sm:pt-7 sm:pb-5 sm:-mr-3 sm:-mt-16 lg:px-24 lg:pt-20 lg:pb-9 lg:-mt-28 lg:-mr-[2rem] rounded-t-full"
              : ""
          }`}
        >
          {!x ? (
            <p className="text-2xl font-semibold transition-all duration-200 opacity-100 sm:text-3xl lg:text-4xl">
              Your turn
            </p>
          ) : (
            <p className="text-2xl font-semibold transition-all duration-200 opacity-0 sm:text-3xl lg:text-4xl">
              Your turn
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight">
            Player : 2
          </h1>
        </section>
      </div>

      <div className="text-white ">
        {" "}
        <h1 className="w-full mb-6 text-5xl font-light text-center py-14 lg:text-6xl">
          {" "}
          Tic tac <span className="text-[#26ffcb] font-extrabold ">
            toe_
          </span>{" "}
        </h1>{" "}
        <div>
          <dialog ref={modal} className="modal">
            <div className="modal-box max-w-[25rem]">
              <h3 className="text-2xl font-bold text-center">Winner</h3>
              <div ref={titleRef}>
                {" "}
                <h3></h3>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button
                onClick={() => {
                  modal.current.close();
                  reset();
                }}
              >
                Close
              </button>
            </form>
          </dialog>
        </div>
        <section>
          <div className=" items-center justify-center w-full z-50 board">
            <div className="flex row-1">
              <div
                className="boxes"
                ref={box1}
                onClick={(e) => {
                  toggle(e, 0);
                }}
              ></div>
              <div
                className="boxes"
                ref={box2}
                onClick={(e) => {
                  toggle(e, 1);
                }}
              ></div>
              <div
                className="boxes"
                ref={box3}
                onClick={(e) => {
                  toggle(e, 2);
                }}
              ></div>
            </div>
            <div className="flex row-2">
              <div
                className="boxes"
                ref={box4}
                onClick={(e) => {
                  toggle(e, 3);
                }}
              ></div>
              <div
                className="boxes"
                ref={box5}
                onClick={(e) => {
                  toggle(e, 4);
                }}
              ></div>
              <div
                className="boxes"
                ref={box6}
                onClick={(e) => {
                  toggle(e, 5);
                }}
              ></div>
            </div>
            <div className="flex row-3">
              <div
                className="boxes"
                ref={box7}
                onClick={(e) => {
                  toggle(e, 6);
                }}
              ></div>
              <div
                className="boxes"
                ref={box8}
                onClick={(e) => {
                  toggle(e, 7);
                }}
              ></div>
              <div
                className="boxes"
                ref={box9}
                onClick={(e) => {
                  toggle(e, 8);
                }}
              ></div>
            </div>
          </div>
        </section>
        <div className="flex justify-center mx-auto mt-16 lg:mt-5">
          <button
            onClick={() => {
              reset();
            }}
            className="px-14 my-12 text-2xl font-bold text-white py-4 active:scale-[0.9]  duration-200 transition-all bg-[#1f3540] rounded-full"
          >
            Reset
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TicTacToe;

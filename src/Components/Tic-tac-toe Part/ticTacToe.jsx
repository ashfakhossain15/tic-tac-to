const TicTacToe = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-center w-full">Tic tac tow </h1>
      <div className="board ">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <button className="px-9 text-center text-white py-3 active:bg-red-600 transform bg-sky-950">
        Reset
      </button>
      <button className="group  active:scale-90 transform transition-transform">
        Click me
      </button>
    </div>
  );
};

export default TicTacToe;

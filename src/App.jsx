import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("navy");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor, fontWeight: "bolder" }}
    >
      <h1
        className="flex justify-center "
        style={{
          color: "rgb(30, 255, 0)",
          paddingTop: "17.5rem",
          fontSize: "50px",
        }}
      >
        Color: {bgColor}{" "}
      </h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setBgColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setBgColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setBgColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setBgColor("black");
            }}
          >
            Black
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setBgColor("grey");
            }}
          >
            Grey
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setBgColor("purple");
            }}
          >
            Purple
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => {
              setBgColor("yellow");
            }}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() => {
              setBgColor("white");
            }}
          >
            White
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => {
              setBgColor("olive");
            }}
          >
            olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useContext, useState } from "react";
import { ColorContext } from "../App";
import "./styles.css";

function Calculator() {
  const { state } = useContext(ColorContext);
  const [record, setRecord] = useState([]);
  const [ans, setAns] = useState(null);
  const [equal, setEqual] = useState(false);
  const [clear, setClear] = useState(true);
  function execute() {
    let answer = 0;
    for (let i = 0; i < record.length; i++) {
      if (record[i] === "/") {
        answer = parseInt(record[i - 1]) / parseInt(record[i + 1]);
        setRecord([]);
        setAns(answer);
      } else if (record[i] === "*") {
        answer = parseInt(record[i - 1]) * parseInt(record[i + 1]);
        setRecord([]);
        setAns(answer);
      } else if (record[i] === "+") {
        answer = parseInt(record[i - 1]) + parseInt(record[i + 1]);
        setRecord([]);
        setAns(answer);
      } else if (record[i] === "-") {
        answer = parseInt(record[i - 1]) - parseInt(record[i + 1]);
        setRecord([]);
        setAns(answer);
      }
    }
  }
  return (
    <>
      <div>
        {clear && <h1 className="text-center text-3xl mb-5">{record}</h1>}
        {equal && <h1 className="text-center text-3xl mb-5">{ans}</h1>}
        <div className="grid grid-cols-4 gap-1">
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "1";
                setRecord(copy);
              } else {
                setRecord([...record, "1"]);
              }
            }}
          >
            1
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "2";
                setRecord(copy);
              } else {
                setRecord([...record, "2"]);
              }
            }}
          >
            2
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "3";
                setRecord(copy);
              } else {
                setRecord([...record, "3"]);
              }
            }}
          >
            3
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setRecord([...record, "+"]);
            }}
          >
            +
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "4";
                setRecord(copy);
              } else {
                setRecord([...record, "4"]);
              }
            }}
          >
            4
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "5";
                setRecord(copy);
              } else {
                setRecord([...record, "5"]);
              }
            }}
          >
            5
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "6";
                setRecord(copy);
              } else {
                setRecord([...record, "6"]);
              }
            }}
          >
            6
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setRecord([...record, "-"]);
            }}
          >
            -
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "7";
                setRecord(copy);
              } else {
                setRecord([...record, "7"]);
              }
            }}
          >
            7
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "8";
                setRecord(copy);
              } else {
                setRecord([...record, "8"]);
              }
            }}
          >
            8
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "9";
                setRecord(copy);
              } else {
                setRecord([...record, "9"]);
              }
            }}
          >
            9
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setRecord([...record, "*"]);
            }}
          >
            *
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(true);
              setClear(false);
              execute();
            }}
          >
            =
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setEqual(false);
              setClear(true);
              const copy = [...record];
              if (!isNaN(copy[copy.length - 1])) {
                copy[copy.length - 1] = copy[copy.length - 1] + "0";
                setRecord(copy);
              } else {
                setRecord([...record, "0"]);
              }
            }}
          >
            0
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setRecord([]);
              setEqual(false);
              setClear(true);
              setAns(null);
            }}
          >
            CLR
          </button>
          <button
            className={`square transition ${
              state === true ? "text-white" : "text-black"
            }  ${state === true ? "bg-black" : "bg-white"}`}
            onClick={() => {
              setRecord([...record, "/"]);
            }}
          >
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;

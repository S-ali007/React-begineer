import React from "react";
import Textfield from "./Textfield";
import Button from "./Button";
import { useState, useEffect } from "react";
import Output from "./Output";
import { Link } from "react-router-dom";
function Home() {
  // we can put dependences in states and props as well
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(1);

  // useState Hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // useEffect Hook
  useEffect(() => {
    // window.alert("useEffect called");
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state == 0 ? 0 : 1}&idStarts=1001`
      );
      const res = await get.json();
      setData([...data, ...res]);
      console.log(res);
    }
    getData();
  }, [state]);

  console.log("Function body");

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
    console.log(setData);
  };
  document.title = `(${state}) Employees Online`;

  const removeItem = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData([...arr]);
    console.log(index);
  };
  return (
    <div>
      <div className="flex justify-center gap-4 p-6">
        <button
          className="border-black border-[2px] p-2 text-white bg-slate-900 font-semibold rounded-md"
          onClick={() => {
            setState(state + 1);
          }}
        >
          Click ME
        </button>

        <button
          className="border-black border-[2px] p-2 text-white bg-slate-900 font-semibold rounded-md "
          onClick={() => {
            setState2(state2 + 1);
          }}
        >
          Click ME {state2}
        </button>
      </div>
      {/* login or form */}
      <div className="flex justify-center gap-3 flex-wrap mt-2 ">
        <Textfield
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Enter your Name"
        ></Textfield>
        <Textfield
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Enter your email"
        ></Textfield>
        <Button title="ADD" data={addData}></Button>
      </div>

      {/* data */}
      <div className="data px-[10%] mt-[10px]   w-[100%] ">
        <div className="flex   w-[max-full] border-gray-300 border-2 gap-[100px] justify-center p-5 text-white font-bold bg-gray-500 ">
          <h4 className="pt-2 underline">FIRST Name</h4>
          <h4 className="pt-2 underline">Last Name</h4>
          <h4 className="pt-2 underline">Age</h4>
          <h4 className="pt-2 underline">DATE OF BIRTH</h4>
          <h4 className="pt-2 underline">EMAIL</h4>
          <h4 className="pt-2 underline">REMOVE</h4>
        </div>
        {/* output */}
        {data.map((element, index) => {
          return (
          <Link path={`/${element.id}`}> <div> <Output
              key={index}
              name={element.name}
              email={element.email}
              index={index}
              removeItem={removeItem}
              age={element.age}
              firstName={element.firstName}
              lastName={element.lastName}
              dob={element.dob}
            ></Output> </div></Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

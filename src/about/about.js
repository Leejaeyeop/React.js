import "../App.css";
import React, { useState } from "react";

const createResource = (fetchFunction) => {
  let status = "pending";
  let result;
  const suspender = fetchFunction()
    .then((res) => res.json())
    .then((data) => {
      status = "success";
      result = data;
    })
    .catch((error) => {
      status = "error";
      result = error;
    });

  return {
    read() {
      console.log("read!");
      // 처음 read는 pending
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
};

// ✅ 사용자 데이터 가져오기
const userResource = createResource(() =>
  fetch("https://jsonplaceholder.typicode.com/users/1")
);

const About = (props) => {
  // ✅ Suspense에서 데이터를 대기
  console.log("실행!");

  const user = userResource.read();
  const [state, setState] = useState("default");
  return (
    <div>
      About Component
      <div>{props.text}</div>
      <div>api res name: {user.name}</div>
      <button onClick={props.func}>about button</button>
      <InputA defaultValue={state} onChange={setState}></InputA>
    </div>
  );
};

function InputA({ defaultValue, onChange }) {
  const [state, setState] = useState(defaultValue);
  console.log("렌더 inputA");
  return (
    <input
      value={state}
      onChange={(e) => {
        setState(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}

export default About;

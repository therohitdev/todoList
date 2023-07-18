import React, { useState } from 'react';


export default function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Counter />
      </div>
      <Form />
    </>
  )
}

function Counter() {
  const [counter, setCounter] = useState(0); // [value, func]

  function counterDown() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  function counterUp() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function counterUpToN(n) {
    for (let i = 1; i <= n; i++) {
      setCounter(prev => prev + 1);
    }
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => counterUp()}>Add Up</button>

      &nbsp;&nbsp;

      <button onClick={() => counterDown()}>Dec</button>

      &nbsp;

      <button onClick={() => counterUpToN(5)}>Add up to 5</button>
    </>
  )
}


function Form() {
  const [user, setUser] = useState({});

  return (
    <>
      <h1>I am User</h1>
      <p>Name:- {user.name}</p>
      <p>Age:- {user.age}</p>
      <p>Sex: {user.sex}</p>

      <ChangeName cn={setUser} data={user} />
      <ChangeAge cna={setUser} data={user} />
      <ChangeSex cns={setUser} data={user} />
    </>
  )
}

function ChangeName(props) {
  return (
    <>
      <h1>I am changing user name</h1>
      <button onClick={() => props.cn({ ...props.data, name: "Shivani" })}>Change User name</button>
    </>
  )
}

function ChangeAge(props) {
  return (
    <>
      <h1>I am changing user age</h1>
      <button onClick={() => props.cna({ ...props.data, age: 23 })}>Change User age</button>
    </>
  )
}

function ChangeSex(props) {
  return (
    <>
      <h1>I am changng sex value</h1>
      <button onClick={() => props.cns({ ...props.data, sex: "female"}) }>Change sex</button>
    </>
  )
}



import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [showLogin, setShowLogin] = useState(true);
  const paramsData = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  console.log("paramsdata --- ", paramsData);
  console.log("queryParams --- ", queryParams.get("age"));
  useEffect(() => {
    console.log("COmponent got changed");
  });
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#eee",
        marginBottom: "100px",
      }}
    >
      <h2>loginForm</h2>
      {showLogin && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("form data --- ", { name, password });

            const registerData = JSON.parse(
              localStorage.getItem("registrationData")
            );

            const result = registerData.find(({ name: n, password: p }) => {
              return n === name && p === password;
            });

            if (result) {
              alert(`Login success! your age is ${result.age}`);
            } else {
              const wrongLoginCount = parseInt(
                localStorage.getItem("wrongLoginCount") || 0
              );
              localStorage.setItem("wrongLoginCount", wrongLoginCount + 1);
              if (wrongLoginCount > 5) {
                setShowLogin(false);
              }
              alert("Login unsuccessful");
            }
          }}
        >
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {!showLogin && <div>Multiple unsuccessful attempts</div>}
    </div>
  );
}

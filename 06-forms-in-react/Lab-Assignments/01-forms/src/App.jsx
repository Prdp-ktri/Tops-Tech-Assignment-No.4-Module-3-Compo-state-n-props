import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const formSubmission = (e) => {
    e.preventDefault();
    setSubmittedData({
      id: Date.now(),
      name,
      email,
      password,
    });

    setName();
    setEmail();
    setPassword();
  };

  return (
    <>
      <div>
        <form onSubmit={formSubmission}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name=""
            id="nameInp"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name=""
            id="emailInp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="pwInpu"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {submittedData && (
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Password:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.id}</td>
                <td>{submittedData.name}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.password}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;

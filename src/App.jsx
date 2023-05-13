import Job from "./components/Job";
import UserRecite from "./components/UserRecite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Job />} />
      <Route path="/user" element={<UserRecite />} />
    </Routes>
  );
}

export default App;

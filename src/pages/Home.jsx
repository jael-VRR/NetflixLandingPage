import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar.jsx";
import Content from "../components/Content.jsx";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  const handleChange = () => {
    history.push("/mediaPlayerV");
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="box-video">
        <Content handleChange={handleChange} />
      </main>
    </div>
  );
}

export default Home;

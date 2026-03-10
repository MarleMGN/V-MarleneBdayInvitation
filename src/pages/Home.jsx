import React from "react";
import Landing from "../components/Landing";
import Message from "../components/Message";
import Details from "../components/Details";
import Closing from "../components/Closing";

const Home = ({ openModal }) => {
  return (
    <>
      <Landing openModal={openModal} />
      <Message />
      <Details />
      <Closing openModal={openModal}/>
    </>
  );
};

export default Home;

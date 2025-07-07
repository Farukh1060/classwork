import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ListPost from "./components/ListPost";
import CreatePost from "./components/CreatePost";
import Constextprovider from "./store/App_context";
import Welcome from "./components/Welcome";

const App = () => {


  const [tab, settab] = useState("home");

  const tabchange = (value) => {
    // console.log(value);
    settab(value);
  };

  return (
    <Constextprovider>
      <div className="d-flex">
        <Sidebar tabchange={tabchange} tab={tab}></Sidebar>
        <div>
          <Header></Header>
          
          {tab == "home" ? (
            <ListPost></ListPost>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </Constextprovider>
  );
};
export default App;

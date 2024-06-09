import { React, useState, useEffect } from "react";
import Layout from "./../layout/Layout";
import BlogList from "./../component/BlogList";
import { postLatest } from "../API/APIRequest";
import Loader from "./../component/Loader";

const HomePage = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postLatest();
      setList(res);
    })();
  }, []);

  return <Layout>{list === 0 ? <Loader /> : <BlogList list={list} />}</Layout>;
};

export default HomePage;

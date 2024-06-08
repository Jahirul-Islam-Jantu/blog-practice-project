import React from "react";
import Layout from "./../layout/Layout";
import BlogList from "./../component/BlogList";
import { useState } from "react";
import { useEffect } from "react";
import { postLatest } from "../API/APIRequest";

const HomePage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await postLatest();
      setList(res);
    })();
  }, []);

  return (
    <Layout>
      <BlogList list={list}/>
    </Layout>
  );
};

export default HomePage;

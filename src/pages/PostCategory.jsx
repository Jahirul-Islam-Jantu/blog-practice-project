import React, { useEffect, useState } from "react";
import Layout from "./../layout/Layout";
import { useParams } from "react-router-dom";
import { postByCategory } from "../API/APIRequest";
import Loader from "../component/Loader";
import BlogList from "../component/BlogList";

const PostCategory = () => {
  let { categoryID } = useParams();

  let [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      setList(res);
    })();
  }, [categoryID]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default PostCategory;

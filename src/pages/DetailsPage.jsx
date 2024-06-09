import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsPost } from "../API/APIRequest";
import Layout from "./../layout/Layout";
import Loader from "./../component/Loader";
import BlogDetails from "./../component/BlogDetails";

const DetailsPage = () => {
  let { postID } = useParams();
  let [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await detailsPost(postID);
      setList(res);
    })();
  }, [postID]);
  return (
    <div>
      <Layout>
        {list === null ? <Loader /> : <BlogDetails list={list} />}
      </Layout>
    </div>
  );
};

export default DetailsPage;

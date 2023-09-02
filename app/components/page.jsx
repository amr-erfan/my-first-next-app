"use client";

import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const mydata = async () => {
      const data = await fetch(" https://jsonplaceholder.org/posts");
      const result = await data.json();
      if (result) {
        setPosts(result);
      }
    };
    mydata();
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => {
          return <div key={post.id}>title: {posts.title}</div>;
        })}
    </div>
  );
};

export default page;

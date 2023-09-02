import React from "react";
import Link from "next/link";
export const metadata = {
  title: "post page",
};

const page = async () => {
  const data = await fetch(" http://jsonplaceholder.org/posts", {
    next: {
      revalidate: 60, //ISG incremental static generation
    },
  });
  const result = await data.json();
  return (
    <div
      className="home-post-div"
      style={{ width: "100%", backgroundColor: "black" }}
    >
      posts page
      <Link href="/articles">article page</Link>
      {result.map((res) => {
        return (
          <Link href={`/posts/${res.id}`}>
            <div
              key={res.id}
              className="post-div"
              style={{
                width: "60%",
                padding: "10px",
                margin: "20px auto",
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
              }}
            >
              <h1> title: {res.title}</h1>
              <h1> desc: {res.content}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;

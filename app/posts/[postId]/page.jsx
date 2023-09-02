import React from "react";
import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

const page = async ({ params }) => {
  const loading = <div>loading.....</div>;
  return (
    <div
      style={{ backgroundColor: "gray", padding: "10px", borderRadius: "20px" }}
    >
      <h1
        style={{
          backgroundColor: "white",
          width: "fitContent",
          padding: "5px",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        details page
      </h1>
      <Suspense fallback={loading}>
        <PostDetails postId={params.postId} />
      </Suspense>
    </div>
  );
};

export default page;

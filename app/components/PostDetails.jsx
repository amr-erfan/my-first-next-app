import React from "react";

const PostDetails = async ({ postId }) => {
  const data = await fetch(`https://jsonplaceholder.org/posts/${postId}`, {
    next: {
      revalidate: 60,
    },
  });
  const result = await data.json();
  return (
    <div>
      <div className="post" style={{ width: "80%", margin: "auto" }}>
        <h2
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {result.title}
        </h2>
        <p
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {result.content}
        </p>
      </div>
    </div>
  );
};

export default PostDetails;

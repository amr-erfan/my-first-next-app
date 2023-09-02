import React from "react";
import Link from "next/link";
export const metadata = {
  title: "article page",
};

const page = () => {
  return (
    <div>
      articles page
      <Link href="/posts">posts page</Link>
    </div>
  );
};

export default page;

import React from "react";
import Link from "next/link";

function Home(){
   return(
      <>
           <Link href="/about">About</Link>
           <Link href="/blog"> Blog</Link>
         <h1>Home page</h1>
      </>
   ) 
};
 export default Home;
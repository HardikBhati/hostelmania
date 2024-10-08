import React, { useState, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import AuthContext from "../context/authContext";
const index: React.FC = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Head>
        <title>HostelBlogs</title>
      </Head>

      <div id="landing-header">
        <h1 className="display-4">Welcome to HostelBlogs!</h1>
        <div className="link">
          {auth && (
            <Link href="/hostels">
              <span className="btn camp">View Blogs</span>
            </Link>
          )}
          {!auth && (
            <span className="btn camp">
              <Link href="/login">Log In</Link>
            </span>
          )}
        </div>
      </div>
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default index;

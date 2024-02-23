"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoginDone from '../../LoginDone/page.js'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import db from "../../Firebase/Firebase.js";
import { setUserId } from "firebase/analytics";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [detailss , setDetailss] = useState({})

const[submit , setSubmit] = useState(false)
  const handleSubmit = async () => {
    try {
      if (email === "" || password === "") {
        alert("Please fill all the mandatory details");
      } else {
        const userCredentialsQuery = query(
          collection(db, "users"),
          where("email", "==", email),
          where("password", "==", password)
        );
        const userCredentialsSnapshot = await getDocs(userCredentialsQuery);

        if (!userCredentialsSnapshot.empty) {
          
          setSubmit(true)
          const userDoc = userCredentialsSnapshot.docs[0];
          const userData = userDoc.data();
          
          // Log the user ID or any other field
          console.log("User ID:", userData);

          setDetailss(userData)
          
          console.log("Login successful!"); 
         
        } else {
          alert('email doesnt exist')
          console.error("Invalid credentials");
         
        }
      }
    } catch (error) {
      console.error("Error signing in:");
     
    }
  };

  return (
    <div>
      {submit ? <LoginDone params={detailss}/> :
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] m-2">
          <div className="w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
                Login to your account
              </h1>
              <h1 className="text-sm font-medium text-gray-600 m-2">
                Login using Social accounts
              </h1>
              <div className="text-lg lg:text-xl text-center space-x-5 m-2"></div>
              <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
            </div>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="email"
                  className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button
                className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400 font-medium m-2 mb-6"
                onClick={handleSubmit}  
              >
                Log in
              </button>
            </div>
          </div>
          <div className="h-[100%] w-full md:w-1/3 bg-gradient-to-l from-blue-400 to-emerald-400 items-center flex justify-center">
            <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
              <h1 className="text-5xl">New Here?</h1>
              <h1 className="">Sign Up and discover new opportunities here</h1>
              <button className="bg-white rounded-2xl px-4 text-emerald-400 py-1">
                <Link href="/Auth/Singup">Signup</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default Login;

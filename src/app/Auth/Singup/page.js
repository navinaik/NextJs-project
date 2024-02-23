"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";

import { FaFacebook } from "react-icons/fa";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import db from "../../Firebase/Firebase.js";
import Link from "next/link.js";

import Done from '../../SinginDone/Page.js'


const SignUp = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pass, setPass] = useState("");


  const [confirmpass, setConfirmPass] = useState("");

  const [submit, setSubmit] = useState(false);

  const [sucess, setSucess] = useState(false);

  const ValidateForm = () => {
    if (Fname.length > 15 || Lname.length > 15 || Fname == "") {
      alert("First Name and Last Name should be less than 15 characters");
      setSubmit(false);
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (
      !emailRegex.test(email) ||
      !email.endsWith("@gmail.com" || email == "")
    ) {
      alert("Please enter a valid Gmail format email address");
      setSubmit(false);
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number) || number == "") {
      alert("Phone number should be 10 digits");
      setSubmit(false);
    }

    // Validation for Password
    if (pass.length < 6 || pass == " ") {
      alert("Password should be at least 6 characters");
      setSubmit(false);
    }

    // Validation for Confirm Password
    if (pass !== confirmpass || confirmpass == "") {
      alert("Password and Confirm Password should match");
      setSubmit(false);
    }

    setSubmit(true);
  };

  const handleSubmit = async (e) => {
    ValidateForm();

    e.preventDefault();

    if (
      Fname == "" ||
      Lname == "" ||
      email == "" ||
      number == "" ||
      pass == "" ||
      confirmpass == ""
    ) {
      setSubmit(false);
    } else if (submit) {
      const emailQuery = query(
        collection(db, "users"),
        where("email", "==", email)
      );
      const emailQuerySnapShot = await getDocs(emailQuery);

      const numberQuery = query(
        collection(db, "users"),
        where("phoneNumber", "==", number)
      );
      const numberQuerySnapShot = await getDocs(numberQuery);

      if (!emailQuerySnapShot.empty) {
        alert("Email already exists. Please use a different email.");
        return;
      }

      if (!numberQuerySnapShot.empty) {
        alert(
          "Phone number already exists. Please use a different phone number."
        );
        return;
      }
      try {
        // Add user data to Firestore
        const userRef = await addDoc(collection(db, "users"), {
          firstName: Fname,
          lastName: Lname,
          email: email,
          phoneNumber: number,
          password: pass,
        });

        console.log("Document written with ID: ", userRef.id);
 
        setSucess(true)
        setFname("");
        setLname("");
        setEmail("");
        setNumber("");
        setPass("");
        setConfirmPass("");
        setSubmit(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } 
  }; 
  return (
    <div>
     
     {sucess ? <Done/> : 
      <div className="flex justify-center mt-10 sm:mt-0">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-2xl max-w w-[90%] h-[900px] md:h-[560px] m-2">
          <div
            className="h-[100%] w-full md:w-3/4 bg-center bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesar-perez-733745.jpg&fm=jpg)",
            }}
          >
            <div className="text-white text-base font-semibold text-center my-10 space-y-2">
              <h1 className="">Enjoy the beautiful Social media</h1>
              <h3>
                {" "}
                <a
                  href="#"
                  className="underline underline-offset-4 tracking-wide hover:text-blue-400"
                >
                  Signup for free
                </a>{" "}
              </h3>
            </div>
          </div>
          <div className="h-[90%] w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-gray-700">
                KN social media app{" "}
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center md:mt-6  space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Your Email address"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Your Mobile Number"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    placeholder="Enter your PassWord"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    placeholder="Confirm Your PassWord"
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-7">
                <button
                  onClick={handleSubmit}
                  className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium "
                >
                  sign in
                </button>

                
              </div>
            </form>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default SignUp;

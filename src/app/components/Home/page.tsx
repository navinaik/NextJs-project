"use client"

import React, { useEffect } from "react";
import Link from "next/link";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import db from "../../Firebase/Firebase.js";

const HomePage = () => {


  useEffect(()=>{
 
    const fetchUserData = async()=>{

      try{
        const userCollection = collection(db , 'user')
        const usersSnapshot = await getDocs(userCollection)
        usersSnapshot.forEach((userDoc) => {
          const userData = userDoc.data();
          console.log("User ID:", userDoc.id);
          console.log("User Data:", userData);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      fetchUserData()
   
    }
  },[])
  return (


    <div className="flex-col justify-center mt-20 ">
      <div>
        <div className="flex justify-center  ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
              <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                <div className="text-3xl md:text-7xl font-bold ">
                  Make Your Fashion Look More Charming
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                               "
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                  <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                    <img
                      src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                    <img
                      src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                      alt=""
                      className=""
                    />
                  </div>
                </div>
                <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                  <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                    <img
                      src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                    <img
                      src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                      alt=""
                      className=""
                    />
                  </div>
                </div>
                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?nature "
                alt=""
                className=""
              />{" "}
            </div>
            <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div className="font-bold text-lg text-black m-2">
              There is something about nature that just feels so calming.
            </div>
            <div className="text-gray-500 m-2 text-sm">
              <a href="">
                There is something about nature that just feels so calming.
                Whether you are out hiking through the wilderness or simply
                taking a stroll through your local park, being surrounded by
                natural beauty can really put you in a good mood. And there is
                definitely something therapeutic about spending time in nature,
                whether it is clearing your mind after a long day or just
                enjoying the peace and quiet.
              </a>
            </div>
            <div className="flex justify-between">
              <div className="flex m-2">
            
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?beach "
                alt=""
                className=""
              />{" "}
            </div>
            <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div className="font-bold text-lg text-black m-2">
              This is post title
            </div>
            <div className="text-gray-500 m-2 text-sm">
              <a href="">
                When you go to the beach, there are a few things that you should
                expect. The first thing is that the beach will be hot. The
                beaches in California are typically hot, and the beaches in
                Florida are typically hot.
              </a>
            </div>
            <div className="flex justify-between">
              <div className="flex m-2">
         
              <div className="m-2">
            
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?galaxy "
                alt=""
                className=""
              />{" "}
            </div>
            <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
            <div className="font-bold text-lg text-black m-2">
              This is post title
            </div>
            <div className="text-gray-500 m-2 text-sm">
              <a href="">
                Galaxies are one of the biggest things in the Universe. They are
                so big that they can be seen with the naked eye. Galaxies are
                made up of billions of stars.
              </a>
            </div>
            <div className="flex justify-between">
              <div className="flex m-2">
               
                <div className="text-gray-500 m-1 mb-4 text-sm">896</div>
                
                <div className="text-gray-500 m-1 mb-4 text-sm">5648</div>
              </div>
              <div className="m-2">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
     
    </div>
    </div>
  );
};

export default HomePage;

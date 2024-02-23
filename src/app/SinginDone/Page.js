import React from "react";
import Link from "next/link";

const Done = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row w-full md:w-[70%] items-center space-y-4">
          <div className="md:w-96 w-[100%] md:h-screen h-48 bg-gray-200 overflow-hidden">
            <img
              src="https://images.creativemarket.com/0.1.0/ps/7594070/580/1059/m1/fpnw/wm0/screenshot_2020-01-15-adda-social-network-html-template-.jpg?1&s=b47fcfaea984134c360b1d67ac525ee9"
              alt=""
              className=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
            <div className="text-fuchsia-600 text-xl font-medium">
              KN social media
            </div>
            <div className="text-5xl font-medium">yahoooooo</div>
            <div className="text-gray-500">
              congrats , your are suceefully logged in
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg hover:scale-105 cursor-pointer">
                <Link href="/Auth/Login"> click here for Login Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default Done;

{/* <div class="flex items-center
justify-center text-center bg-gradient-to-r from-fuchsia-500 via-red-600 to-cyan-400 w-[100%]">
                                            <div class="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
                                              <div class="flex flex-col p-2 m-2 w-full">
                                                <div class="text-xl md:text-3xl font-medium">Our Team</div>

                                                <div
                                                  class="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2"
                                                >
                                                  <div
                                                    class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                                                  >
                                                    <div
                                                      class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                                                    >
                                                      <img
                                                        src="https://source.unsplash.com/300x300/?girl"
                                                        alt=""
                                                        class=""
                                                      />
                                                    </div>

                                                    <div
                                                      class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                                                    >
                                                      Elena Gilbert
                                                    </div>
                                                    <div class="italic text-gray-500 text-sm">HR, Tailblocks</div>
                                                    <div class="flex my-2">
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-twitter"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-instagram"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-facebook"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-linkedin"></i
                                                      ></a>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                                                  >
                                                    <div
                                                      class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                                                    >
                                                      <img
                                                        src="https://source.unsplash.com/300x300/?man,businessman"
                                                        alt=""
                                                        class=""
                                                      />
                                                    </div>

                                                    <div
                                                      class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                                                    >
                                                      John Doe
                                                    </div>
                                                    <div class="italic text-gray-500 text-sm">CEO, Tailblocks</div>
                                                    <div class="flex my-2">
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-twitter"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-instagram"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-facebook"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-linkedin"></i
                                                      ></a>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                                                  >
                                                    <div
                                                      class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                                                    >
                                                      <img
                                                        src="https://source.unsplash.com/300x300/?girl,woman"
                                                        alt=""
                                                        class=""
                                                      />
                                                    </div>

                                                    <div
                                                      class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                                                    >
                                                      Rebbeca
                                                    </div>
                                                    <div class="italic text-gray-500 text-sm">SEO Analyst</div>
                                                    <div class="flex my-2">
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-twitter"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-instagram"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-facebook"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-linkedin"></i
                                                      ></a>
                                                    </div>
                                                  </div>
                                                  <div
                                                    class="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
                                                  >
                                                    <div
                                                      class="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                                                    >
                                                      <img
                                                        src="https://source.unsplash.com/300x300/?man,boy"
                                                        alt=""
                                                        class=""
                                                      />
                                                    </div>

                                                    <div
                                                      class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                                                    >
                                                      Reacher
                                                    </div>
                                                    <div class="italic text-gray-500 text-sm">Manager</div>
                                                    <div class="flex my-2">
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-twitter"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-instagram"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-facebook"></i
                                                      ></a>
                                                      <a
                                                        href="#"
                                                        class="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                                                        ><i class="fa fa-linkedin"></i
                                                      ></a>
                                                    </div>
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
                                          <script
                                            nomodule
                                            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                                          ></script> */}

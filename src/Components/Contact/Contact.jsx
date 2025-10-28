import React, { useState } from "react";

export default function Contact() {
  const [dateinput, setdateinpit] = useState("");
  const [placeholderr, setPlaceholderr] = useState("");

  return (
    <>
      <section className="py-32 text-center">
        <div className="container mx-auto text-center py-4">
          <h1 className="text-4xl font-bold py-2">CONTACT COMPONENT</h1>
          <div className="div py-1 star2 relative">
            <i className="fa-solid fa-star"></i>
          </div>

          <div className="my-20 text-start">
            <div className="w-1/2 mx-auto">
              <div className="overflow-hidden">
                <label
                  htmlFor="username"
                  className={`text-[#1abc9c] ${
                    dateinput !== "" && placeholderr === "User Name"
                      ? "translate-y-0"
                      : "translate-y-full"
                  } block transition-all duration-300`}
                >
                  User Name
                </label>
              </div>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name"
                className="w-full py-3 px-2 border-b border-gray-400 focus:outline-none focus:border-emerald-500"
                onInput={(e) => {
                  setdateinpit(e.target.value);
                  setPlaceholderr(e.target.placeholder);
                }}
              />
            </div>
             <div className="w-1/2 mx-auto">
              <div className="overflow-hidden">
                <label
                  htmlFor="user age "
                  className={`text-[#1abc9c] ${
                    dateinput !== "" && placeholderr === "User age"
                      ? "translate-y-0"
                      : "translate-y-full"
                  } block transition-all duration-300`}
                >
                  User age
                </label>
              </div>

              <input
                type="number"
                id="username"
                name="username"
                placeholder="User age"
                className="w-full py-3 px-2 border-b border-gray-400 focus:outline-none focus:border-emerald-500"
                onInput={(e) => {
                  setdateinpit(e.target.value);
                  setPlaceholderr(e.target.placeholder);
                }}
              />
            </div>
            <div className="w-1/2 mx-auto">
  <div className="overflow-hidden">
    <label
      htmlFor="userEmail"
      className={`text-[#1abc9c] ${
        dateinput !== "" && placeholderr === "your Email"
          ? "translate-y-0"
          : "translate-y-full"
      } block transition-all duration-300`}
    >
      User Email
    </label>
  </div>

  <input
    type="email"
    id="userEmail"
    name="userEmail"
    placeholder="your Email"
    className="w-full py-3 px-2 border-b border-gray-400 focus:outline-none focus:border-emerald-500"
    onInput={(e) => {
      setdateinpit(e.target.value);
      setPlaceholderr(e.target.placeholder);
    }}
  />
</div> 
<div className="w-1/2 mx-auto">
  <div className="overflow-hidden">
    <label
      htmlFor="userComment"
      className={`text-[#1abc9c] ${
        dateinput !== "" && placeholderr === "Leave your comment"
          ? "translate-y-0"
          : "translate-y-full"
      } block transition-all duration-300`}
    >
      Leave your comment
    </label>
  </div>

  <textarea
    id="userComment"
    name="userComment"
    placeholder="Leave your comment"
    rows="4"
    className="w-full py-3 px-2 border-b border-gray-400 focus:outline-none focus:border-emerald-500 resize-none"
    onInput={(e) => {
      setdateinpit(e.target.value);
      setPlaceholderr(e.target.placeholder);
    }}
  ></textarea>
</div>


            
          </div>
        </div>
      </section>
    </>
  );
}

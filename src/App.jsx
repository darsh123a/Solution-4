import { useState } from "react";
import SuccessCard from "./SuccessCard";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  function Subscribe() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      setOpen(true);
    }
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center bg-[#2E2F53] items-center">
        <div className="md:w-[60%] md:h-[90%]  w-full h-auto  flex flex-col-reverse md:flex-row  bg-white rounded-2xl shadow-2xl ">
          {/* left */}
          <div className="w-full md:w-2/3 ">
            <div className=" w-[90%] mx-auto mt-15 h-auto">
              <h1 className="  text-6xl  text-black font-bold font-sans pb-7">
                Stay updated!
              </h1>
              <p className="font-bold text-xl text-gray-500">
                Join 60,000+ product managers receiving monthly <br />
                updates on:
              </p>
              <div className="">
                <div className=" flex flex-row gap-5 mt-10 text-gray-600 text-lg ">
                  <img
                    src="./assets/icon-success.svg"
                    alt="logo"
                    className="w-6 h-6"
                  ></img>
                  <h1 className="font-bold">
                    Product discovery and building what matters
                  </h1>
                </div>
                <div className=" flex flex-row  gap-6 mt-3  text-gray-600 text-lg">
                  <img
                    src="./assets/icon-success.svg"
                    alt="logo"
                    className="w-6 h-6"
                  ></img>
                  <h1 className="font-bold">
                    Measuring to ensure updates are a success
                  </h1>
                </div>
                <div className=" flex flex-row  gap-6 mt-3  text-gray-600 text-lg ">
                  <img
                    src="./assets/icon-success.svg"
                    alt="logo"
                    className="w-6 h-6"
                  ></img>
                  <h1 className="font-bold">And much more!</h1>
                </div>
              </div>
              <div className=" flex flex-row justify-between mt-13 ">
                <h1 className="font-bold ">Email Address</h1>
                <h1
                  className={`"mr-4 font-bold  text-red-500" ${
                    error ? "block text-red-400" : "hidden"
                  }`}
                >
                  Valid email required
                </h1>
              </div>
              <div className="flex flex-col mt-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className={`" h-20 p-4 pt-2  border-2 text-xl rounded-xl " ${
                    error
                      ? "border-red-300 bg-red-100 text-red-500"
                      : "border-black"
                  }`}
                ></input>
                <button
                  className="h-20 p-4 bg-gray-900 text-white mt-4 font-bold text-xl rounded-xl"
                  onClick={Subscribe}
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full md:w-1/3 h-full flex justify-center items-cente mr-0 md:mr-4">
            <img src="./assets/illustration-sign-up-desktop.svg" alt="image" />
          </div>
        </div>
      </div>
      {open && (
        <SuccessCard setOpen={setOpen} email={email} setEmail={setEmail} />
      )}
    </>
  );
}

export default App;

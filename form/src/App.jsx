import React from "react";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen ">
        <div className="w-[960px] bg-black-dark grid grid-cols-2 p-5 rounded-2xl">
          <div className="">
            <img src="public/teamwork.svg" alt="" className="absolute top-36" />
          </div>

          <div className="w-80 grid gap-5">
            <h1 className="text-5xl text-white font-bold">Login</h1>
            <p className="text-dull-white">
              Access to 300+ hours of courses, tutorials and livestreams
            </p>
            <form action="" className="space-y-6">
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                  <i class="fa-solid fa-envelope-open"></i>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>

              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                  <i class="fa-solid fa-envelope-open"></i>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <button class="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">
                Sign in
              </button>
            </form>
            <div class="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
              <p>
                Don't have an account?
                <a class="text-neon-blue font-semibold cursor-pointer">
                  Sign up
                </a>
              </p>
              <p>
                Forgot password?
                <a class="text-neon-blue font-semibold cursor-pointer">
                  Reset password
                </a>
              </p>
              <p>
                Don't have a password yet?
                <a class="text-neon-blue font-semibold cursor-pointer">
                  Set password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

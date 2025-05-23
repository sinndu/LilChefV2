const Mobile = () => {
  return (
    <div className="min-h-screen bg-[#129b62] flex flex-col items-center justify-center relative">
      {/* White top circle */}
      <div className="absolute top-[-20%] w-[150vw] h-[50vh] bg-white rounded-b-full"></div>

      {/* Logo */}
      <div className="absolute top-[7%] z-10">
        <img
          src="/images/logo_better.png"
          alt="Lil' Chef Logo"
          className="w-32 mx-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-16 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-2xl font-semibold leading-snug">
          A gourmet chef, right <br /> in your pocket.
        </h1>

        {/* Dynamic Subtext */}
        <p className="mt-2 text-base">
          Install and start using Lil'Chef as a beta tester by hitting the <b>Share</b> and then <b>Add to Home Screen</b> button on your mobile device.
        </p>

        {/* Email Input and Submit Button
        {(
          <div className="mt-6 flex items-center bg-white rounded overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow px-4 py-2 text-black focus:outline-none"
            />
            <button
              className="bg-[#129b62] border-2 border-white rounded text-white px-4 py-2 font-semibold"
            >
              Submit
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Mobile;

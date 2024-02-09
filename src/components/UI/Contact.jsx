export const Contact = () => {
  return (
    <>
      <div className="md:max-w-[75%] px-10 mx-auto pt-[10rem]">
        <div>
          <h1 className="text-[2rem] font-inter font-bold text-white">
            Contact Us
          </h1>
          <p className="text-[1.5rem] pb-5 text-white text-center">
            Fill out this form to reach us.
          </p>
        </div>
        <form className=" ">
          <div className="mb-6">
            <div className="md:flex gap-5">
              <input
                className="w-full bg-gray-200 text-[#757070] border border-gray-200 mb-6 md:mb-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full bg-gray-200 text-[#757070] border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                className="w-full appearance-none block bg-gray-200 text-[#757070] border border-gray-200  py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Email********@*****.**"
              />
              <input
                className=" w-full appearance-none block  bg-gray-200 text-[#757070] border border-gray-200  py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Phone (Option)"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="">
              <textarea
                className=" w-full appearance-none block  bg-gray-200 text-[#757070]  border-gray-200  py-8 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6 w-[40%] mx-auto">
              <button
                className="w-full  shadow bg-[#91D2F7] focus:shadow-outline focus:outline-none text-black font-inter py-2 px-[3rem]"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        {/* </section> */}
      </div>
    </>
  );
};

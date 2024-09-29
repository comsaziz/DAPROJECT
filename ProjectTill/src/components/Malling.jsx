function Mailing() {
  return (
    <div className="bg-[#f3efee]">
      <div className="relative top-11 flex flex-col md:flex-row items-center border-[7px] bg-[#ffffff] border-[#e0e0e0] py-16 px-8 max-w-5xl mx-auto">
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
          alt="Sample Image"
          className="md:absolute top-[-20px] left-[20px] w-[38%] md:block h-auto object-cover"
        />

        <div className="flex flex-col justify-center w-full md:ml-96 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold font-Fraunces text-center md:text-left mb-4">
            Join Mailing List
          </h1>

          <p className="text-lg md:text-xl text-[#84848b] text-center md:text-left mb-6">
            Sign up and get all the latest, ad-free reviews, recipes, and news
            sent to your inbox.
          </p>

          <div className="flex flex-col items-center space-y-4 mt-6">
            <input
              type="text"
              className="px-4 py-2 border w-64"
              placeholder="Email address"
            />

            <button className="border-solid font-Georgia border-[#c99484] border-[1px] text-[#c99484] px-8 py-2 hover:bg-[#c99484] hover:text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mailing;

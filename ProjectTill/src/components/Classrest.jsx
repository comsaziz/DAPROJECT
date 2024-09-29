function Classrest({
  imgUrl1,
  title1,
  description1,
  imgUrl2,
  title2,
  description2,
  imgUrl3,
  title3,
  description3,
  imgUrl4,
  title4,
  description4,
  imgUrl5,
  title5,
  description5,
  imgUrl6,
  title6,
  description6,
}) {
  return (
    <div className="flex flex-col items-center bg-[#f3efee] min-h-screen p-5 sm:p-11">
      <div className="flex flex-col items-center w-full mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Best in Class Restaurant
        </h1>
        <small className="text-[16px] sm:text-[18px] text-[#bdc4c3] text-center mt-6">
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
          nunc at adipiscing sit morbi <br />
          aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.
        </small>
      </div>

      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl1} alt="Card 1" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title1}</h2>
          <p className="text-[#bdc4c3] mt-5">{description1}</p>
        </div>

        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl2} alt="Card 2" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title2}</h2>
          <p className="text-[#bdc4c3] mt-5">{description2}</p>
        </div>

        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl3} alt="Card 3" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title3}</h2>
          <p className="text-[#bdc4c3] mt-5">{description3}</p>
        </div>

        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl4} alt="Card 4" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title4}</h2>
          <p className="text-[#bdc4c3] mt-5">{description4}</p>
        </div>

        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl5} alt="Card 5" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title5}</h2>
          <p className="text-[#bdc4c3] mt-5">{description5}</p>
        </div>

        <div className="bg-[#f3efee] p-4 mb-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60" src={imgUrl6} alt="Card 6" />
          <h2 className="text-xl sm:text-2xl font-bold mt-5">{title6}</h2>
          <p className="text-[#bdc4c3] mt-5">{description6}</p>
        </div>
      </div>
    </div>
  );
}

export default Classrest;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Cards({
  imgUrl1,
  title1,
  description1,
  imgUrl2,
  title2,
  description2,
  imgUrl3,
  title3,
  description3,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-[90%] mb-12 px-4 sm:px-16">
        <h1 className="text-3xl sm:text-5xl font-bold">Latest Reviews</h1>
        <button className="border-solid font-Georgia border-[#c99484] border-[1px] text-[#c99484] w-28 px-2 hover:bg-[#c99484]">
          VIEW ALL
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-16 space-y-4 sm:space-y-0">
        <div className="bg-white p-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60 sm:h-full" src={imgUrl1} alt="Card 1" />
          <h2 className="text-2xl sm:text-3xl font-bold mt-5">{title1}</h2>
          <p className="text-[#bdc4c3] mt-5">{description1}</p>
          <small className="text-[#daa57b] mt-5">
            READ MORE <FontAwesomeIcon icon={faArrowRightLong} />
          </small>
        </div>

        <div className="bg-white p-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60 sm:h-full" src={imgUrl2} alt="Card 2" />
          <h2 className="text-2xl sm:text-3xl font-bold mt-5">{title2}</h2>
          <p className="text-[#bdc4c3] mt-5">{description2}</p>
          <small className="text-[#daa57b] mt-5">
            READ MORE <FontAwesomeIcon icon={faArrowRightLong} />
          </small>
        </div>

        <div className="bg-white p-4 w-full sm:w-96 flex flex-col">
          <img className="w-full h-60 sm:h-full" src={imgUrl3} alt="Card 3" />
          <h2 className="text-2xl sm:text-3xl font-bold mt-5">{title3}</h2>
          <p className="text-[#bdc4c3] mt-5">{description3}</p>
          <small className="text-[#daa57b] mt-5">
            READ MORE <FontAwesomeIcon icon={faArrowRightLong} />
          </small>
        </div>
      </div>
    </div>
  );
}

export default Cards;

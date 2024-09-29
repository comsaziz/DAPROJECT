import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex flex-col items-center h-screen mt-10">
      <div className="mt-28 flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 gap-7">
        <span className="flex flex-col items-center lg:relative bottom-96 right-44">
          <a href="#">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[#d1a79a] text-4xl"
            />
          </a>
          <p className="text-4xl text-black font-bold mt-4 font-Georgia">
            1.2M+
          </p>
          <small className="text-[#928686] font-Georgia">SUBSCRIBERS</small>
        </span>
        <span className="flex flex-col items-center lg:relative bottom-96 right-44">
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#d1a79a] text-4xl"
            />
          </a>
          <p className="text-4xl text-black font-bold mt-4 font-Georgia">
            1.8M+
          </p>
          <small className="text-[#928686] font-Georgia">SUBSCRIBERS</small>
        </span>
        <span className="flex flex-col items-center lg:relative bottom-96 right-44">
          <a href="#">
            <FontAwesomeIcon icon={faRss} className="text-[#d1a79a] text-4xl" />
          </a>
          <p className="text-4xl text-black font-bold mt-4 font-Georgia">
            800K+
          </p>
          <small className="text-[#928686] font-Georgia">SUBSCRIBERS</small>
        </span>
      </div>

      <div className="flex flex-col justify-center items-center mt-40">
        <small className="block text-[#707c84] font-Georgia text-center mb-4">
          AS FEATURED IN
        </small>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
            alt="Logo 1"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
            alt="Logo 2"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
            alt="Logo 3"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg"
            alt="Logo 4"
          />
          <div className="flex justify-center col-span-2 sm:col-span-1">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
              alt="Logo 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

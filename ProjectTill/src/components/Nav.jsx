import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-3/4 bg-white relative">
        <nav className="flex justify-start p-6 space-x-80 lg:space-x-12">
          <div className="w-auto">
            <img
              className="h-auto"
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
              alt="Logo"
            />
          </div>

          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-square">
                <FontAwesomeIcon
                  icon={faBars}
                  size="lg"
                  style={{ color: "#c99484" }}
                />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-[#d6b1a6] rounded-box w-52 space-y-2"
              >
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">REVIEWS</a>
                </li>
                <li>
                  <a href="#">VIDEOS</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="hidden lg:flex space-x-9 lg:mr-96">
            <li>
              <a className="text-[#d6b1a6]" href="#">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:text-[#c99484]" href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a className="hover:text-[#c99484]" href="#">
                REVIEWS
              </a>
            </li>
            <li>
              <a className="hover:text-[#c99484]" href="#">
                VIDEOS
              </a>
            </li>
            <li>
              <a className="hover:text-[#c99484]" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="px-6 lg:px-32 mt-10 lg:absolute lg:top-40 lg:left-20 space-y-6">
          <div className="flex items-center space-x-4 mb-14">
            <hr className="w-16 border-t-[2px] border-[#c99484]" />
            <p className="text-[#c99484] font-Georgia">WELCOME</p>
          </div>

          <h1 className="text-5xl font-bold font-Georgia mb-6 text-left">
            I’m Dianna Adams
          </h1>
          <h2 className="text-3xl mb-2 font-Georgia text-left">
            Food Critic / Influencer / Blogger
          </h2>
          <small className="text-xl font-Georgia text-left mt-9 text-[#707c84]">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
            pharetra, ac porttitor orci.
          </small>

          <br />
          <button className="border-solid font-Georgia border-[#c99484] border-[1px] text-[#c99484] w-40 h-30 p-2 mt-9 hover:bg-[#c99484]">
            JOIN INSIDER
          </button>
          <br />
          <br />
        </div>
      </div>

      <div className="lg:w-1/4 bg-[#c99484] relative lg:flex lg:flex-col items-center">
        <ul className="hidden lg:flex menu menu-horizontal bg-base-200 rounded-box mt-6 space-x-1">
          <li>
            <a>
              <FontAwesomeIcon
                icon={faYoutube}
                size="lg"
                style={{ color: "#f2f2f2" }}
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#f2f2f2" }}
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#f2f2f2" }}
              />
            </a>
          </li>
          <button className="border-solid font-Georgia border-[#fff] border-[1px] text-[#fff] w-40 h-30 px-5 hover:bg-[#fff] hover:text-black">
            LET'S TALK
          </button>
        </ul>

        <div className="relative lg:mt-32 lg:w-[100%] lg:right-16 sm:w-3/4 sm:h-40">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt=""
            className="md:h-40 lg:h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;

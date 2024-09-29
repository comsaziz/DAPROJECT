import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-[#f5f5f5] p-[5%]">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <img
          className="mt-4"
          src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
          alt="Logo"
        />

        <ul className="flex flex-col items-center space-y-2 pt-6 sm:pt-0 sm:flex-row sm:space-x-8 sm:space-y-0">
          <li>
            <a className="text-black hover:text-[#c99484]" href="#">
              HOME
            </a>
          </li>
          <li>
            <a className="text-black hover:text-[#c99484]" href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className="text-black hover:text-[#c99484]" href="#">
              REVIEWS
            </a>
          </li>
          <li>
            <a className="text-black hover:text-[#c99484]" href="#">
              VIDEOS
            </a>
          </li>
          <li>
            <a className="text-black hover:text-[#c99484]" href="#">
              CONTACT
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-2 mt-6 sm:mt-0 sm:flex-row sm:space-x-6 sm:space-y-0">
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faYoutube}
                size="lg"
                style={{ color: "#be7c68" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#be7c68" }}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#be7c68" }}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center pt-6 text-[#c5c8c6] mt-10">
        <p>© 2024 Food Blogger & Influencer</p>
        <p>Powered by Food Blogger & Influencer</p>
      </div>
    </div>
  );
}

export default Footer;

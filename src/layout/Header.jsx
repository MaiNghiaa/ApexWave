import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Header({ user }) {
  const [menuOption, setMenuOption] = useState(false);

  const navigate = useNavigate()

  const onClickToOpenMenuOption = () => {
    setMenuOption(!menuOption);
  }
  console.log(user);



  const navigateList = [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Demo",
      url: "/chat",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Login",
      url: "/sign-in",
    },
    {
      name: "Get Started",
      url: "/sign-up",
    }
  ]
  return (

    <nav className=" w-full mx-auto container flex items-center justify-between sticky max-h-16 ">
      <div onClick={() => navigate('/')} className="logo">
        <svg
          className="size-16 pl-3 sm:size-20 md:size-24 lg:size-28 xl:size-32 2xl:size-36  sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-14 "
          viewBox="0 0 95 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0611 29.4442H30.2281L19.2314 0.466553H14.1789L3.21942 29.4442H9.38646L11.727 23.0171H21.6834L24.0611 29.4442ZM19.7144 17.5931H13.696L16.7052 9.38276L19.7144 17.5931ZM51.0245 15.0297C50.4672 13.7666 49.7242 12.652 48.7583 11.649C47.7552 10.683 46.6407 9.94001 45.3775 9.38275C44.0773 8.82549 42.7027 8.56543 41.2538 8.56543C39.8421 8.56543 38.4303 8.82549 37.1301 9.38275C35.8669 9.94001 34.7524 10.683 33.7493 11.649C32.7834 12.6149 32.0404 13.7666 31.4831 15.0297C30.963 16.33 30.6658 17.7045 30.6658 19.1534V34.9425L36.2384 36.8001V28.4783C36.5356 28.6269 36.8328 28.7755 37.1301 28.887C38.4303 29.4442 39.8421 29.7414 41.2538 29.7414C42.6655 29.7414 44.0773 29.4442 45.3775 28.887C46.6407 28.3668 47.7552 27.6238 48.7583 26.6208C49.7242 25.6548 50.4672 24.5403 51.0245 23.2772C51.5817 21.9769 51.8418 20.5652 51.8418 19.1534C51.8418 17.7045 51.5817 16.33 51.0245 15.0297ZM41.2538 24.1688C38.5046 24.1688 36.2384 21.9026 36.2384 19.1534C36.2384 16.4043 38.5046 14.1381 41.2538 14.1381C44.003 14.1381 46.2692 16.4043 46.2692 19.1534C46.2692 21.9026 44.003 24.1688 41.2538 24.1688ZM66.6011 28.7012C65.2637 29.2956 63.852 29.5929 62.4031 29.5929C59.5796 29.5929 56.9791 28.4783 54.9729 26.5093C53.0039 24.5403 51.9265 21.9026 51.9265 19.1163C51.9265 16.33 53.0039 13.6923 54.9729 11.7233C56.9791 9.75429 59.5796 8.63976 62.4031 8.63976C65.1894 8.63976 67.8271 9.75429 69.7961 11.7233C71.7651 13.6923 72.8425 16.33 72.8425 19.1163V21.8283H58.0936C58.9852 23.2401 60.5827 24.206 62.4031 24.206C63.8148 24.206 65.1151 23.6487 66.081 22.6085L70.019 26.3236C69.0531 27.3267 67.9014 28.144 66.6011 28.7012ZM62.4031 14.0266C60.5827 14.0266 58.9852 14.9926 58.0936 16.4414H66.7126C65.7838 14.9926 64.1863 14.0266 62.4031 14.0266Z"
            fill="#FB8E0B"
          />
          <path
            d="M85.483 29.4443H92.0959L84.5543 19.042L92.0216 8.75122H85.2973L81.1735 14.5096L77.1241 8.75122H70.2883L77.83 19.0049L70.3255 29.4443H76.9012L81.2107 23.723L85.483 29.4443Z"
            fill="#FD6003"
          />
        </svg>
      </div>
      {/* Mobile Menu Button */}
      <div onClick={onClickToOpenMenuOption}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          popoverTarget="mypopover"
          id="mobile-menu"
          className="block size-10 pr-3  sm:size-12 md:hidden  "
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>


      {/* Mobile Menu Options */}
      {menuOption && (
        <div
          id="mobile-options"
          className="w-full h-auto bg-[#FB8E0B] md:hidden absolute top-full flex flex-col text-base font-semibold"
        >
          {navigateList.map((item, index) => (
            <Link
              key={index}
              className="w-full flex-grow bg-[#FB8E0B] hover:bg-[#FB8E0B] no-underline text-center py-2"
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

=======
      {menuOption && <div
        
        id="mobile-options"
        className="w-full h-auto bg-[#FB8E0B] md:hidden absolute top-full flex flex-col text-base font-semibold"
      >
        <Link
          className="w-full 	flex-grow  bg-[#FB8E0B] hover:bg-[#fb8f0be0] no-underline text-center py-2"
          to="/"
        >
          About
        </Link>
        <Link
          className="w-full 	flex-grow bg-[#FB8E0B] hover:bg-[#FB8E0B] no-underline text-center py-2"
          to="/chat"
        >
          Demos
        </Link>
        <Link
          className="w-full 	flex-grow bg-[#FB8E0B] hover:bg-[#FB8E0B] no-underline text-center py-2"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="w-full  	flex-grow bg-[#FB8E0B] hover:bg-[#FB8E0B] no-underline text-center py-2"
          to="/sign-in"
        >
          Login
        </Link>
        <Link
          className="w-full  	flex-grow bg-[#FB8E0B] hover:bg-[#FB8E0B] no-underline text-center py-2"
          to="/sign-up"
        >
          Get Started
        </Link>
      </div>}


      <div className="w-5/6 hidden md:flex md:justify-around items-center">
        {/* Left Section */}
        <div className="w-2/3 flex items-center gap-6 justify-center">

          {navigateList.map((item, index) => (
            <Link
              key={index}
              className=" text-black py-1 no-underline  text-base  xl:text-lg "
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Right Section */}
        <div className="w-1/3 flex items-center gap-8 justify-center ">
          {user?.displayName ? (user.displayName) : (`hello world`)}
=======
          <Link
            to="/"
            className=" text-black py-1 no-underline text-base  xl:text-lg "
          >
            About
          </Link>
          <Link
            to="/chat"
            className=" text-black py-1  no-underline  text-base  xl:text-lg "
          >
            Demo
          </Link>
          <Link
            to="/contact"
            className=" text-black py-1 no-underline  text-base  xl:text-lg "
          >
            Contact
          </Link>
        </div>
        {/* Right Section */}
        <div className="w-1/3 flex items-center gap-8 justify-center ">
          <Link
            to="/sign-in"
            className="py-1 text-base no-underline  xl:text-lg "
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className=" bg-[#FB8E0B] no-underline  hover:bg-[#df800b] text-white rounded-lg py-2 px-5 text-base font-semibold xl:text-lg "
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;

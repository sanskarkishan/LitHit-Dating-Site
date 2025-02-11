import { useNavigate } from "react-router-dom";
import DesktopImage from "/src/assets/images/bg4.gif";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div
        className="bg-cover w-screen h-screen bg-center"
        style={{ backgroundImage: `url(${DesktopImage})` }}
      >
        <div className="flex bg-pink-700 text-white">
          <h1 className="flex-1 text-3xl font-bold p-3">
            LitHit ❤️
          </h1>
          <p className="p-4  text-xl cursor-pointer" onClick={handleAboutClick}>
            About
          </p>
        </div>
        <div className="text-center m-auto py-10 xl:py-10">
          <button
            className="h-15 w-50 text-2xl bg-pink-700 rounded-xl text-white
             ring-4 ring-cyan-500"
            onClick={handleRegisterClick}
          >
            Register Now!
          </button>
        </div>
        <div
          className="text-center box-border w-90 h-150 p-2 xl:w-200 xl:h-90
          m-auto bg-black/50 backdrop-blur-xl rounded-4xl ring-4 ring-cyan-500
          text-white"
        >
          <p className="font-bold py-2">Welcome to LitHit, the ultimate blind dating experience designed to spice up your college life! ⭐</p>
          <p className="text-left py-2"><span className="text-cyan-300 font-bold">Step 1:</span> Register Yourself First things first. Trust us, it's as easy as a breeze!</p>
          <p className="text-left py-2"><span className="text-cyan-300 font-bold">Step 2:</span> Let Fate Decide Once you're registered, we'll use a sprinkle of our magic (and a dash of algorithms) to match you with a random boy or girl.</p>
          <p className="text-left py-2"><span className="text-cyan-300 font-bold">Step 3:</span> Get Ready for Your Date You'll receive an email from us with the date, time, and location of your meeting. Think of it as a mystery adventure!</p>
          <p className="text-left py-2"><span className="text-cyan-300 font-bold">Step 4:</span> Don't Forget to Thank the Founder After your awesome date, make sure to give a shoutout to the brilliant mind behind this site. 😉</p>
          <p className="font-bold">Our only mission is simply to add a pinch of fun to your college life and who knows, you might just find your soulmate here!</p>
        </div>
        <div>
          <footer className="bg-pink-700 text-white my-14 p-2 text-center">
            <p>
              This WebSite is Made by{" "}
              <span className=" font-bold">Sanskar Kishan</span> with ❤️
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

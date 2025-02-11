import { useNavigate } from "react-router-dom";
import FounderImage from "/src/assets/images/Founder.jpg";


export const About = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-pink-300 h-screen">
        <div className="flex bg-pink-700 text-white">
          <h1 className="flex-1 text-3xl font-bold p-3">LitHit ❤️</h1>
          <p className="p-4 text-xl cursor-pointer" onClick={handleHomeClick}>
            Home
          </p>
        </div>
        <div className="h-10 w-60 m-auto py-5">
          <img
            className="rounded-xl ring-3 ring-white"
            src={FounderImage}
            alt="Founder Image"
          />
          <p className="py-2 text-center text-2xl text-white font-bold">Sanskar Kishan (Founder)</p>
        </div>
        <div className="bg-black/30 backdrop-blur-xl m-auto p-8 my-90 w-90 h-65 rounded-2xl text-white">
            <p className="text-left">Hey there! I'm Sanskar, a fourth-year IT Engineering student at University College of Engineering and Technology, VBU Hazaribagh with a major crush on web development. My toolkit includes HTML, CSS, JavaScript, and some of my best buddies, React and Spring Boot.</p>
        </div>
      </div>
    </>
  );
};

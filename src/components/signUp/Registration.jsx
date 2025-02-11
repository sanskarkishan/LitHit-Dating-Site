import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    gender: "",
    email: "",
    number: "",
    age: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    
    if(user){
    alert("Registered Successfully ✅ We'll get back to you soon... stay tuned!")
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxbKvx5fzjxk8qn8qkJfGn7mjuLXo9K7DF-uFeirjFoYKnpFgym4NphXUlBJPThodEp3w/exec",
        {
          method: "POST",
          body: JSON.stringify(user),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.status == "success") {
        // alert("Register Successfully!");
      } else {
        // alert("Register Successfully!");
      }
    } catch (error) {
      console.error("Error", error);
      alert("There was an error submitting your form.");
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className=" bg-pink-100 h-full w-full">
        <div className="flex text-white bg-pink-400 ">
          <h1
            className="text-3xl font-bold p-3 
          h-15  flex-1"
          >
            LitHit ❤️
          </h1>
          <p className="p-4 text-xl cursor-pointer" onClick={handleHomeClick}>
            Home
          </p>
        </div>
        <div className="py-5 font-sans">
          <form
            onSubmit={handleSubmit}
            className="box-border w-90 h-145 p-2 m-auto rounded-xl 
        shadow-[0_0_20px_rgba(0,0,0,0.25)] bg-blue-100"
          >
            <h1 className="font-bold text-4xl text-left mx-4 text-blue-500">
              Registration ❤️
            </h1>
            <br />
            <p className="mx-4">Please fill the details.</p>

            <label className="mx-4" htmlFor="fullName">
              <b className="">Name :</b>
            </label>
            <br />
            <div className="text-center my-2">
              <input
                className="w-80 h-10 px-2 bg-gray-100 ring-2 ring-blue-500 rounded-2xl"
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                required
                value={user.fullName}
                onChange={handleChangeInput}
              />
            </div>

            <label className="mx-4" htmlFor="gender">
              <b>Gender : </b>
            </label>
            <br />
            <div className="text-center">
              <select
                className="w-80 h-10 px-2 my-2 bg-gray-100 ring-2 ring-blue-500 rounded-2xl"
                name="gender"
                required
                value={user.gender}
                onChange={handleChangeInput}
              >
                <option value="select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <label className="mx-4" htmlFor="email">
              <b>Email : </b>
            </label>
            <br />
            <div className="text-center my-2">
              <input
                className="w-80 h-10 px-2 bg-gray-100 ring-2 ring-blue-500 rounded-2xl"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                value={user.email}
                onChange={handleChangeInput}
              />
            </div>

            <label className="mx-4" htmlFor="number">
              <b>Mobile Number : </b>
            </label>
            <br />
            <div className="text-center my-2">
              <input
                className="w-80 h-10 px-2 bg-gray-100 ring-2 ring-blue-500 rounded-2xl"
                type="number"
                name="number"
                placeholder="Enter your Mobile Number"
                required
                value={user.number}
                onChange={handleChangeInput}
              />
            </div>

            <label className="mx-4" htmlFor="age">
              <b>Age : </b>
            </label>
            <br />
            <div className="text-center my-2">
              <input
                className="w-80 h-10 px-2 bg-gray-100 ring-2 ring-blue-500 rounded-2xl"
                type="number"
                name="age"
                placeholder="Enter Your Age"
                required
                value={user.age}
                onChange={handleChangeInput}
              />
            </div>
            <br />
            <div className="text-center">
              <button
                className="w-80 h-10 bg-gray-600
           hover:bg-blue-500
          text-amber-50 text-2xl font-mono font-bold rounded-xl
          shadow-lg shadow-gray-500/100"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

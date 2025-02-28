import React, { useState } from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebase/config";
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { FacebookAuthProvider } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const FacebookProvider = new FacebookAuthProvider();

  const navigate = useNavigate()


  // 🔹 Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful! ✅");
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful! ✅");
      console.log("result", result.user)
      const user = result.user;
      const userInfor = getAdditionalUserInfo(result);
      console.log("userInfor", userInfor);
      if (userInfor?.isNewUser) {
        console.log("new user");
        addDoc(collection(database, "users"),
          {
            displayName: user.displayName || "",
            email: user.email || "",
            photoURL: user.photoURL,
            providerId: userInfor.providerId,
            uid: user.uid,
          })
      }
    } catch (err) {
      setError(err.message);
    }
  };


  const loginFacebook = async () => {
    const result = await signInWithPopup(auth, FacebookProvider);
    console.log("result", result.user)
    const user = result.user;
    const userInfor = getAdditionalUserInfo(result);
    console.log("userInfor", userInfor);
    if (userInfor?.isNewUser) {
      console.log("new user");
      addDoc(collection(database, "users"),
        {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL,
          providerId: userInfor.providerId,
          uid: user.uid,
        })
    }
  }

  return (
    <div>
      <div onClick={() => navigate('/')} className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2">
        <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-[#FB8E0B]" />
        <p className='text-xl font-semibold text-[#FB8E0B]'>Home</p>
      </div>
      <main className="container h-screen mx-auto flex flex-col items-center justify-center gap-12">


        <header className="w-full text-center">
          <p className="text-xl font-semibold">Hi, Welcome Back! 👋</p>
        </header>

        {/* 🔹 Login Form */}
        <section>
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-[#FB8E0B] text-white py-2 rounded-sm hover:bg-[#db7e0d]" type="submit">
              Log In
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </section>

        {/* 🔹 Google Sign-In */}
        <section className="flex flex-col items-center justify-center gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="h-[1px] bg-gray-400 w-full" />
            <span className="mx-4 text-light whitespace-nowrap">Or With</span>
            <div className="h-[1px] bg-gray-400 w-full" />
          </div>

          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
            <img className="size-6 mr-4" src="../assets/GoogleLogo.jpg" alt="Google logo" />
            <span className="text-sm font-semibold">Log in with Google</span>
          </button>

          <p>
            Don't have an account? <a className="text-blue-600" href="./sign-up.html">Sign Up</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignIn;
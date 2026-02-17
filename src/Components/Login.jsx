import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleBtnClick = () => {
    // Validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    // Sign in / Sign up
    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_URL} alt="login_bg"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Login Form */}
      <form
        className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 w-full max-w-md bg-black bg-opacity-75 p-12 text-white rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-4 rounded bg-gray-700 focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded bg-gray-700 focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded bg-gray-700 focus:outline-none"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle */}
        <p className="mt-6 text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
          <span
            onClick={() => setIsSignInForm(!isSignInForm)}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>

        {/* Captcha text */}
        <p className="mt-4 text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;

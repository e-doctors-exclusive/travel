import React, { useState, useEffect } from "react";
import Image from 'next/image';
import logo from "./Logo";
import Logo from "./Logo";
import SignUp from "./SignUp";
import SignInModal from "./SignIn";
import googleIcon from "../../public/Assets/icons/thirdPartyIcons/color.svg";
import appleIcon from "../../public/Assets/icons/thirdPartyIcons/appleMac.svg";
import facebookIcon from "../../public/Assets/icons/thirdPartyIcons/facebook.svg";
import def from "../../public/Assets/icons/person solid.svg"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setLogState, selectUser, checkUser, selectLoggedIn, selectUserError } from "../store/tokenSlicer";
import { toast } from "react-toastify";
import { AppDispatch } from "@/store";

const Navbar = () => {
  const router = useRouter()
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectLoggedIn)
  const err = useSelector(selectUserError)
  const [form, setForm] = useState({
    phomail: "",
    password: "",
  });
  const [checks, setChecks] = useState({ c1: false, c2: false });

  const handleCreate = async (form: any) => {
    // conso  le.log(form);
    if (checks.c1) {
      await axios
        .post("http://localhost:1337/users/signup", form)
        .then((result) => {
          closeSignUpModal()
          toast.success("Account created successfully", {
            position: "bottom-right",
            // autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })

        })
        .catch((err) => {
          toast.error("User already exists", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err);
        });
    }
    else {
      toast.warning("Agree to privacy policy", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  };

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };
  console.log("this is error", err);
  const [state, setState] = useState<boolean>(false)
  const handleSignIn = async (email: string, password: string) => {
    if (Number.isNaN(+email)) {
      console.log(email);

      await axios
        .post("http://localhost:1337/users/login", { email, password })
        .then((res) => {
          dispatch(setLogState(true))
          localStorage.setItem("token", res.data.user.token)
          toast.success(`Welcome ${res.data.user.dataValues.email || res.data.user.dataValues.phone}`, {
            position: "top-center"
          })
        })
        .catch((e) => console.log(e));
    } else {
      await axios
        .post("http://localhost:1337/users/login", {
          phone: email,
          password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
  };
  console.log("this is my condition",loggedIn);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(checkUser());
    console.log(token);

    loggedIn ? (dispatch(setLogState(true)), setState(true)) : dispatch(setLogState(false)), setState(false);
  }, [loggedIn]);

  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav_right">
        <ul className="navigo">
          <li>Flights</li>
          <li>Hotels</li>
          <li>Packages</li>
          {loggedIn ? <li onClick={() => { router.push("/Profile") }}><Image width={500}
            height={300} id="user-avatar" alt="" src={
              // user?.image
              // ||
              def} /></li> : <li onClick={openSignInModal}>Sign in</li>}
        </ul>
        {loggedIn ? null : <button className="Sign-up" onClick={openSignUpModal}>
          Sign up
        </button>}
      </div>

      <SignUp  isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <form className="main_signUp_container">
          <div className="signUp_header">
            <div className="signUp_desc">
              <p id="signUp_title">Sign up for Tripma</p>
              <p id="signUp">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </p>
            </div>
            <div className="labels">
              <input
                type="text"
                placeholder="Email or phone number"
                onChange={(e) => {
                  setForm({ ...form, phomail: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>
            <div className="term_conditions">
              <div className="term_of_condition">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecks({ ...checks, c1: !checks.c1 });
                  }}
                />
                <p>
                  I agree to the <span>terms and conditions</span>
                </p>
              </div>
              <div className="term_of_condition">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecks({ ...checks, c2: !checks.c2 });
                  }}
                />
                <p>Send me the latest deal alerts</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (Number.isNaN(+form.phomail)) {
                  handleCreate({
                    email: form.phomail,
                    password: form.password,
                  });
                } else {
                  handleCreate({
                    phone: parseInt(form.phomail),
                    password: form.password,
                  });
                }
              }}
            >
              Create account
            </button>
          </div>
          <div className="separation_line">
            <div className="divider"></div>
            <p>or</p>
            <div className="divider"></div>
          </div>
          <div className="third_party_auth">
            <div className="third_party_btn">
              <Image src={googleIcon} alt="" />
              <p>Continue with Google</p>
            </div>
            <div className="third_party_btn">
              <Image src={appleIcon} alt="" />
              <p>Continue with Apple</p>
            </div>
            <div className="third_party_btn">
              <Image src={facebookIcon} alt="" />
              <p>Continue with Facebook</p>
            </div>
          </div>
        </form>
      </SignUp>
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={closeSignInModal}
        title="Sign In"
        description="Please enter your email and password to sign in."
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default Navbar;

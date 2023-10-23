import React, { useState, useEffect } from "react";
import Image from 'next/image';
import logo from "./Logo";
import Logo from "./Logo";
import SignUp from "./SignUp";
import SignInModal from "./SignIn";
import Select from 'react-select';
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
import SignUpbrand from "./SignUpbrand";
import SignIn from "./SignInCustom";
import SignInBrandModal from "./SignInBrand";
const Navbar = () => {
  const router = useRouter()
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignInBrandModalOpen, setSignInBrandModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignUpModalOpen1, setSignUpModalOpen1] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectLoggedIn)
  const err = useSelector(selectUserError)
  const [form, setForm] = useState({
    phomail: "",
    password: "",
  });
  const options = [
    { value: 'user', label: 'Sign up as a user' },
    { value: 'brand', label: 'Sign up as a brand' },
  ];

  const handleChange = (selectedOption: any) => {
    if (selectedOption.value === 'user') {
      openSignUpModal();
    } else if (selectedOption.value === 'brand') {
      openSignUpModal1();
    }
  };
  const [checks, setChecks] = useState({ c1: false, c2: false });

  const handleCreate = async (form: any) => {
    if ((!form.email?.includes("@") || !form.email?.includes(".com"))) {
      setEmailSignUpAlert(true)
    } else {
      setEmailSignUpAlert(false)
    }
    if (form.password.length < 8) {
      setPasswordSignUpAlert(true)
    } else {
      setPasswordSignUpAlert(false)
    }
    if (form.email?.includes("@") && form.email?.includes(".com") && form.password?.length > 8) {
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
  const openBrandSignInModal = () => {
    setSignInBrandModalOpen(true);
  };

  const closeBrandSignInModal = () => {
    setSignInBrandModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const openSignUpModal1 = () => {
    setSignUpModalOpen1(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };
  const closeSignUpModal1 = () => {
    setSignUpModalOpen1(false);
  };
  const [state, setState] = useState<boolean>(false)
  const [emailSignUpAlert, setEmailSignUpAlert] = useState<boolean>(false)
  const [passwordSignUpAlert, setPasswordSignUpAlert] = useState<boolean>(false)
  const [BrandemailSignUpAlert, setBrandEmailSignUpAlert] = useState<boolean>(false)
  const [emailAlert, setEmailAlert] = useState<boolean>(false)
  const [passwordAlert, setPasswordAlert] = useState<boolean>(false)
  const handleSignIn = async (email: string, password: string) => {
    if ((!email.includes("@") || !email.includes(".com"))) {
      setEmailAlert(true)
    } else {
      setEmailAlert(false)
    }
    if (password.length < 8) {
      setPasswordAlert(true)
    } else {
      setPasswordAlert(false)
    }
    if (email?.includes("@") && email?.includes(".com") && password?.length > 8 && email?.length > 6) {
      if (Number.isNaN(+email)) {
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
    }
  };
  const handleSignUpBrand = async (email: string) => {
    if ((!email.includes("@") || !email.includes(".com"))) {
      console.log("wrong");

      setBrandEmailSignUpAlert(true)
    } else {
      setBrandEmailSignUpAlert(false)
    }
    if (email?.includes("@") && email?.includes(".com") && email?.length > 6) {
      await axios
        .post("http://localhost:1337/brands/add", { email })
        .then((res) => {
          dispatch(setLogState(true))
          localStorage.setItem("token", res.data.user.token)
          toast.success(`Welcome ${res.data.user.dataValues.email || res.data.user.dataValues.phone}`, {
            position: "top-center"
          })
        })
        .catch((e) => console.log(e))
    }
  };

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
          {loggedIn ? (
            <li onClick={() => { router.push("/Profile") }}>
              <Image width={500} height={300} id="user-avatar" alt="" src={def} />
            </li>
          ) : (
            <SignIn openSignInModal={openSignInModal} openBrandSignInModal={openBrandSignInModal} />
          )}


        </ul>
        {!loggedIn && (
          <Select options={options} onChange={handleChange} />
        )}
      </div>
      <SignUpbrand isOpen={isSignUpModalOpen1} onClose={closeSignUpModal1}>
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
              placeholder="Email Please"
              onChange={(e) => {
                setForm({ ...form, phomail: e.target.value });
              }}
            />{BrandemailSignUpAlert ? "The email you entered is not in the correct format" : null}

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
            onClick={() => {
              handleSignUpBrand(
                form.phomail
              );
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
      </SignUpbrand>
      <SignUp isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
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
            />{emailSignUpAlert ? "The email you entered is not in the correct format" : null}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />{passwordSignUpAlert ? "Password must be at least 8 characters long." : null}
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
              if (Number.isNaN(+form.phomail)) {
                handleCreate({
                  email: form.phomail,
                  password: form.password,
                });
              }
              else {
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
      </SignUp>
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={closeSignInModal}
        title="Sign In"
        description="Please enter your email and password to sign in."
        onSignIn={handleSignIn}
        emailAlert={emailAlert}
        passwordAlert={passwordAlert}
      />
      <SignInBrandModal
        isOpen={isSignInBrandModalOpen}
        onClose={closeBrandSignInModal}
        title="Brand Sign In"
        description="Please enter your email and password to sign in."
        onSignIn={handleSignIn}
        emailAlert={emailAlert}
        passwordAlert={passwordAlert}
      />
    </div>
  );
};

export default Navbar;

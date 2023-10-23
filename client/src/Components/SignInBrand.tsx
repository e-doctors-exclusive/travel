// SignInBrandModal.tsx
import React, { useState } from "react";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setLogState, selectUser, checkUser, selectLoggedIn, selectUserError } from "../store/tokenSlicer";
import { CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

interface SignInBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSignIn: (email: string) => void;
  passwordAlert: boolean;
  emailAlert: boolean
}

const SignInBrandModal: React.FC<SignInBrandModalProps> = ({
  passwordAlert,
  emailAlert,
  isOpen,
  onClose,
  title,
  description,
  onSignIn,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  const [UserAlert, setUserAlert] = useState(false)
  const [email, setEmail] = useState("");
  let [color, setColor] = useState("#ffffff");
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const handleSignIn = () => {
    onSignIn(email);
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <div
      className={`modal ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content" onClick={handleModalClick}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{emailAlert ? "“The email you entered is not in the correct format." : null}


        </div>
        <button
          className="signInbtn"
          onClick={() => {
            handleSignIn();
            if (email.includes("@") && email.includes(".com")) {
              setIsLoading(true);
              dispatch(checkUser()).then(() => {
                setIsLoading(false);
                if (Object.keys(user).length !== 0) {
                  onClose();
                } else {
                  setUserAlert(true);
                }
              });
            }
          }}

        >
          Sign In
        </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <PulseLoader
          color="#5f36d6"
          size={15}
          loading={isLoading}
        />
        {UserAlert ? "The credentials you entered do not match our records. Please check your username and password and try again" : null}
      </div>
    </div>
  );
};

export default SignInBrandModal;

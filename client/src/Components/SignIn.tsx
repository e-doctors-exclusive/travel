import "../styles/SignIn.css";
import React, { useState } from "react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSignIn: (email: string, password: string) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  onSignIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    onSignIn(email, password);
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
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="signInbtn"
          onClick={() => {
            handleSignIn();
            onClose();
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInModal;

import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../css/custom.css"; 

const SignupLogin = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderSocialButtons = () => {
    return (
      <div className={`${styles.SignupLogin} ${styles.formElement} text-center mb-3`}>
        <p>{activeTab === "login" ? "Sign in with:" : "Sign up with:"}</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <FaFacebookF />
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <FaGoogle />
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <FaTwitter />
        </button>
      </div>
    );
  };

  const renderFormInputs = () => {
    return (
      <div className={`${styles.formContainer}`}>
        {activeTab === "login" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`} htmlFor="email">
              <FaEnvelope /> Email
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
        )}

        {activeTab === "login" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`} htmlFor="password">
              <FaLock /> Password
            </label>
            <input type="password" id="password" className="form-control" />
          </div>
        )}

        {activeTab === "register" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`} htmlFor="emailUsername">
              <FaUser /> Email or Username
            </label>
            <input type="text" id="emailUsername" className="form-control" />
          </div>
        )}

        {activeTab === "register" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`} htmlFor="password">
              <FaLock /> Password
            </label>
            <input type="password" id="password" className="form-control" />
          </div>
        )}

        {activeTab === "register" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`} htmlFor="confirmPassword">
              <FaLock /> Confirm Password
            </label>
            <input type="password" id="confirmPassword" className="form-control" />
          </div>
        )}

        {activeTab === "register" && (
          <div className={`${styles.formElement} form-outline mb-4`}>
            <label className={`${styles.formLabel} form-label`}>Register as:</label>
            <select className="form-select">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        )}

        <button type="submit" className={`btn btn-primary btn-block ${styles.btnLoginRegister} mb-3`}>
          {activeTab === "login" ? "Sign in" : "Sign up"}
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.SignupLogin} container`} style={{backgroundColor:"#333",color:'#fff',width:'400px',marginTop:'50px',padding:'10px',borderRadius:'10px'}}>
      <ul className={`nav nav-pills nav-justified mb-3 signup-login-tabs`} id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabClick("login")}
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "register" ? "active" : ""}`}
              onClick={() => handleTabClick("register")}
            >
              Register
            </button>
          </li>
        </ul>

        <div className={`${styles.SignupLogin} tab-content`}>
          <div
            className={`tab-pane fade ${activeTab === "login" ? "show active" : ""}`}
            id="pills-login"
            role="tabpanel"
          >
            <form>
              {renderSocialButtons()}
              <div className="text-center mb-3">
                <p>or:</p>
              </div>
              {renderFormInputs()}
            </form>
          </div>

          <div className={`tab-pane fade ${activeTab === "register" ? "show active" : ""}`} id="pills-register" role="tabpanel">
            <form>
              {renderSocialButtons()}
              <div className="text-center mb-3">
                <p>or:</p>
              </div>
              {renderFormInputs()}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupLogin;

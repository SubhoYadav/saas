import React from "react";
import "./login.scss";
import { Formik } from "formik";
import Notify from "../../components/notify/Notify";
import notificationTypes from "../../cofigs/notificationTypes.js";
import useReadToggleCtx from "../../hooks/useReadTogglectx";
import useReadMsgCtx from "../../hooks/useReadMsgCtx";
import { UserApi } from "../../webServices/user";
import useUserDataStore from "../../zustand/userDataStore";

export default function Login() {
  const toggleCtx = useReadToggleCtx();
  const msgCtx = useReadMsgCtx();
  // Texts
  const signUpText = {
    heading: "Let's Get You Signed Up !",
    loginSignUpBtn: "CREATE AN ACCOUNT",
    loginSignUpTgle: "Login",
    loginSignUpTgleTxt: "Already have an account ?",
  };
  // states
  const [showLoginField, setShowLoginField] = React.useState(false);
  const [text, setText] = React.useState(signUpText);
  // states

  React.useEffect(() => {
    setText(showLoginField ? logInText : signUpText);
  }, [showLoginField]);
  const logInText = {
    heading: "Welcome Back !",
    loginSignUpBtn: "LOG IN",
    loginSignUpTgle: "Sign up",
    loginSignUpTgleTxt: "Don't have an account ?",
  };
  // Extracting the setUserData function from react zustand store
  const userStoreData = useUserDataStore(({ userData, setUserData }) => {
    return {
      userData,
      setUserData,
    };
  });
  console.log("User Store DataXXXXXX ", userStoreData);
  // Texts
  const handleExternalLogin = () => {
    console.log("Test External Login !!");
  };
  return (
    <>
      <Notify notifyType={notificationTypes.NOTIFICATION_TYPE_SUCCESS} />
      <div className="login-container">
        <div className="login-page">
          <div className="login-left">
            {/* Top Portion */}
            <div>
              <h2>{text.heading}</h2>
              {!showLoginField && <small>Start Your 30 days free trial</small>}
              <div
                className="external-login-button-grp"
                onClick={handleExternalLogin}
              >
                <button
                  className="external-login-button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    cursor: "pointer",
                  }}
                >
                  <img src="/google.png" alt="" width="25px" />
                  <span style={{ fontSize: "15px" }}>Google</span>
                </button>
                <button
                  className="external-login-button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    cursor: "pointer",
                  }}
                >
                  <img src="/facebook.png" alt="" width="25px" />
                  <span style={{ fontSize: "15px" }}>Facebook</span>
                </button>
              </div>
              <h3>Or</h3>
            </div>
            {/* Top Portion */}

            {/* Form and buttons */}
            <div>
              <Formik
                initialValues={{
                  userName: "Amit Bansal",
                  userEmail: "abansal@gmail.com",
                  userMobile: "6289041619",
                  userPassword: "subho@gide",
                }}
                validate={(values) => {
                  const errors = {};
                  // console.log("Formik Values ", values);
                  // if (!values.userEmail) {
                  //   errors.userEmail = "Required";
                  // } else if (
                  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  //     values.userEmail
                  //   )
                  // ) {
                  //   errors.userEmail = "Invalid email address";
                  // }
                  // return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  console.log("Submitting data ", values);
                  if (!showLoginField) {
                    const addUserResp = await UserApi.addUser(values);
                  } else {
                    const loginUserResp = await UserApi.loginUser(values);
                    console.log("YYY ", loginUserResp);
                    if (loginUserResp.status) {
                      const updatedUserData = {
                        userIsLoggedIn: true,
                        userRole: loginUserResp.data.user_role,
                      };
                      console.log("OOOUUULLL ", updatedUserData);
                      console.log("User store data ", userStoreData);
                      userStoreData.setUserData(updatedUserData);
                    }
                  }
                  msgCtx.setnotificationObj({
                    type: notificationTypes.NOTIFICATION_TYPE_WARNING,
                    message: "I am a SE !",
                  });
                  toggleCtx.setShowNotification(true);
                }}
              >
                {(props) => {
                  const {
                    values,
                    // touched,
                    errors,
                    // dirty,
                    // isSubmitting,
                    handleChange,
                    // handleBlur,
                    handleSubmit,
                    // handleReset,
                  } = props;
                  // console.log(" Test ", handleChange);
                  return (
                    <form action="#" onSubmit={handleSubmit}>
                      {/* Name */}
                      {!showLoginField && (
                        <div>
                          <label
                            htmlFor="name"
                            style={{ display: "block", marginBottom: "10px" }}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="userName"
                            id="name"
                            value={values.userName}
                            onChange={handleChange}
                            style={{ marginBottom: "10px" }}
                          />
                          {errors.userName && <span>{errors.userName}</span>}
                        </div>
                      )}
                      {/* Name */}

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          style={{ display: "block", marginBottom: "10px" }}
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="userEmail"
                          onChange={handleChange}
                          value={values.userEmail}
                          id="email"
                          style={{ marginBottom: "10px" }}
                        />
                        {errors.userName && <span>{errors.userEmail}</span>}
                      </div>
                      {/* Email */}

                      {/* Phone */}
                      {!showLoginField && (
                        <div>
                          <label
                            htmlFor="phone"
                            style={{ display: "block", marginBottom: "10px" }}
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            name="userMobile"
                            value={values.userMobile}
                            onChange={handleChange}
                            id="phone"
                            style={{ marginBottom: "10px" }}
                          />
                          {errors.userName && <span>{errors.userMobile}</span>}
                        </div>
                      )}
                      {/* Phone */}

                      {/* Password */}
                      <div>
                        <label
                          htmlFor="password"
                          style={{ display: "block", marginBottom: "10px" }}
                        >
                          Password
                        </label>
                        <input
                          name="userPassword"
                          type="password"
                          value={values.userPassword}
                          onChange={handleChange}
                          id="password"
                          style={{ marginBottom: "10px" }}
                        />
                        {errors.userName && <span>{errors.userPassword}</span>}
                        <small className="warn">
                          Must be at least 8 characters
                        </small>
                      </div>
                      {/* Password */}

                      {/* Check terms and conditions */}
                      {!showLoginField && (
                        <div>
                          <input
                            type="checkbox"
                            id=""
                            style={{
                              width: "auto",
                              marginTop: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <span style={{ marginLeft: "10px" }}>
                            By clicking create account you agree to our{" "}
                            <a href="#">terms of service</a> and{" "}
                            <a href="#">privacy policies</a>
                          </span>
                        </div>
                      )}
                      {/* check terms and conditions */}

                      {/* Submit button */}
                      <div style={{ textAlign: "center" }}>
                        <button className="create-account" type="submit">
                          {text.loginSignUpBtn}
                        </button>
                        <p
                          style={{ marginTop: "15px", display: "inline-block" }}
                        >
                          {text.loginSignUpTgleTxt}
                          {"  "}
                          <span
                            style={{ color: "#71c775", cursor: "pointer" }}
                            onClick={() => {
                              setShowLoginField(!showLoginField);
                            }}
                          >
                            {text.loginSignUpTgle}
                          </span>
                        </p>
                      </div>
                      {/* Submit Button */}
                    </form>
                  );
                }}
              </Formik>
            </div>
            {/* Form and Buttons */}
          </div>
          <div className="login-right">
            <div className="canvas">
              {false && <img src="/success.svg" alt="" />}
              {false && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere eum cum voluptatum commodi optio, numquam repellat, a
                  in quidem nesciunt consequuntur dicta reprehenderit, sequi
                  amet beatae quaerat nihil! Quisquam ipsam quos est.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// In formik the name attribute and the key in the value attribute of the input tag must be the same for propper functioning of the onChange handler or else you dont provide the name attribute at all in input tag

// UI:- https://dribbble.com/shots/22677617-Sign-Up-Page-Design

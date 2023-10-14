import { useContext, useState } from "react";
import {useTranslation} from 'react-i18next'
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { LogoSmall } from "../Logo/Logo";
import { SocialBtnLinks } from "../SocialBtnLinks/SocialBtnLinks";
import { CheckBoxCustom } from "../CheckBoxCustom/CheckBoxCustom";

export const SignUpForm = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [isSignedUp, setSignUp] = useState(false);
  const {t} = useTranslation();
  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // As explained in the Login page.
  // const redirectNow = () => {
  //   const redirectTo = location.search.replace("?redirectTo=", "");
  //   navigate(redirectTo ? redirectTo : "/");
  // };

  // As explained in the Login page.
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        // redirectNow();
        setSignUp(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="mx-auto flex gap-x-6 rounded-[20px] bg-white p-[15px] lg:grid lg:grid-cols-2">
      {!isSignedUp ? (
        <div className=" flex flex-col gap-y-[15px] p-[30px]">
          <LogoSmall />
          <div className="space-y-[5px]">
            <h1 className="text-[27px] font-[700] leading-[1.2]">
              {t("getting")}
            </h1>
            <p className="text-sm leading-[1.3]">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="flex flex-row justify-between gap-x-[10px]">
            <SocialBtnLinks icon="google" text="Log in with Google" />
            <SocialBtnLinks icon="facebook" text="Log in with Facebook" />
            <SocialBtnLinks icon="apple" text="Log in with Apple" />
          </div>
          <div className="line relative flex flex-col">
            <p className="absolute h-[14px] w-[38px] self-center bg-white text-center text-[12px] text-[#8A8A8A]">
              Or
            </p>
            <div className="h-[7px]"></div>
            <div className="h-[6px] border-t-[1px] border-b-[#DCDCDC]"></div>
          </div>
          <form className="flex flex-col gap-y-[15px]">
            <div className="flex flex-col gap-y-[5px]">
              <label className="text-xs" htmlFor="email">
                E-mail
              </label>
              <input
                className="sign-up-input"
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email or number"
                value={form.email}
                onInput={onFormInputChange}
              />
            </div>
            <div className="flex flex-col gap-y-[5px]">
              <label className="text-xs" htmlFor="name">
                Name
              </label>
              <input
                className="sign-up-input"
                placeholder="Enter your name (not-working)"
                label="Name"
                type="name"
                name="name"
                value=""
                onInput={onFormInputChange}
              />
            </div>
            <div className="flex flex-col gap-y-[5px]">
              <label className="text-xs" htmlFor="password">
                Password
              </label>
              <input
                className="sign-up-input"
                placeholder="Enter your password"
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onInput={onFormInputChange}
              />
            </div>
            <div className="flex flex-col gap-y-[5px]">
              <label className="text-xs" htmlFor="country">
                Select your country
              </label>
              <input
                className="sign-up-input"
                placeholder="Country (not-working)"
                label="Country"
                type="country"
                name="country"
                value=""
                onInput={onFormInputChange}
              />
            </div>
            <div className="flex items-center gap-[5px]">
              <CheckBoxCustom />
              <p className="text-[12px] font-[400] text-[#8A8A8A]">
                I agree with{" "}
                <Link className="link underline" to="/login">
                  Terms & Privacy
                </Link>
              </p>
            </div>
            <button onClick={onSubmit} className="log-in-btn">
              Signup
            </button>
            <p className="text-xs">
              Have an account already?{" "}
              <Link className="link" to="/login">
                Sign In!
              </Link>
            </p>
          </form>
        </div>
      ) : (
        <div>URAAAAA</div>
      )}

      <div className="sign-up-dog hidden lg:block"></div>
    </div>
  );
};
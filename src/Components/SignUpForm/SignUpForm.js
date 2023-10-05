import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { LogoSmall } from "../Logo/Logo";
import { SocialBtnLinks } from "../SocialBtnLinks/SocialBtnLinks";
import { GoogleIcon } from "../icons/GoogleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { AppleIcon } from "../icons/AppleIcon";

export const SignUpForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // As explained in the Login page.
    const { emailPasswordSignup } = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    // As explained in the Login page.
    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };


    // As explained in the Login page.
    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/");
    }

    // As explained in the Login page.
    const onSubmit = async () => {
        try {
            const user = await emailPasswordSignup(form.email, form.password);
            if (user) {
                redirectNow();
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="mx-auto container bg-white h-full md:min-h-[690px]">
            <div>
                <div>
                    <LogoSmall/>
                    <h1>Getting Started Now</h1>
                    <p>Enter your credentials to access your account</p>
                    <div>
                        <SocialBtnLinks icon={<GoogleIcon/>} text="Log in with Google"/>
                        <SocialBtnLinks icon={<FacebookIcon/>} text="Log in with Facebook"/>
                        <SocialBtnLinks icon={<AppleIcon />} text="Log in with Apple"/>
                    </div>
                </div>
            <form>
                <input
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onInput={onFormInputChange}
                />
                <input
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onInput={onFormInputChange}
                />
                <button onClick={onSubmit}>
                    Signup
                </button>
                <p>Have an account already? <Link to="/login">Login</Link></p>
            </form>
            </div>
            <div className="md:block">2</div>
            
            </div>
        )
}
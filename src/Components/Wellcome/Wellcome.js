import { Link, useLocation, useNavigate } from "react-router-dom"
import { CheckBoxCustom } from "../CheckBoxCustom/CheckBoxCustom"
import { SearchHeart } from "../icons/SearchHeart"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { ButtonSocial } from "../ButtonSocial/ButtonSocial";

export const Wellcome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

    const loadUser = async () => {
        if (!user) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
                // Redirecting them once fetched.
                redirectNow();
            }
        }
    }
    useEffect(() => {
        loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/dashboard");
    }

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            // Here we are passing user details to our emailPasswordLogin
            // function that we imported from our realm/authentication.js
            // to validate the user credentials and log in the user into our App.
            const user = await emailPasswordLogin(form.email, form.password);
            // const user = await emailPasswordSignup(form.email, form.password);
            if (user) {
                redirectNow();
            }
        } catch (error) {
            if (error.statusCode === 401) {
                alert("Invalid username/password. Try again!");
            } else {
                alert(error);
            }

        }
    };

    return <div className="md:w-[80vh] w-max pt-[7px] rounded-[10px] h-[500px] my-[50px]  mx-auto sign-cat container">
        <div className="w-screen flex flex-col p-[20px] max-w-[285px] border bg-white h-full rounded-[10px]">
            <SearchHeart />
            <div className="text-center ">
                <h3 className="text-[27px] font-[700]">Welcome Back</h3>
                <p className="text-[14px] font-[400]">Please enter your data</p>
            </div>
            <div>   
                <form className="flex flex-col gap-[8px]">
                    <label className="text-[12px] font-[400]">Login</label>
                    <input
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onFormInputChange}
                        className="text-[#8A8A8A] text-[14px] font-[400] bg-[#DCDCDC] py-[8px] px-[15px] rounded-[10px] outline-none"
                        placeholder="Enter your email or number" />
                    <label className="text-[12px] font-[400]">Password</label>
                    <input
                        label="Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onFormInputChange}
                        className="text-[#8A8A8A] text-[14px] font-[400] bg-[#DCDCDC] py-[8px] px-[15px] rounded-[10px] outline-none"
                        placeholder="Enter your password" />
                    <div className="flex items-center gap-[5px]">
                        <CheckBoxCustom />
                        <p className="text-[12px] font-[400] text-[#8A8A8A]">Remember me on this device</p>
                    </div>
                    <div className="flex flex-col gap-[12px] text-center mt-[16px]">
                        <button onClick={onSubmit} className="bg-[#266F62] py-[8px] rounded-[10px] text-white">Sign In</button>
                        <p className="text-[12px] font-[400]">New user? <Link to="/signup"><span className="text-[#FF6231] cursor-pointer">Create an account!</span></Link></p>
                    </div>
                </form>
                <div className="border-t pt-[16px] relative mt-[16px]">
                    <div className="flex justify-evenly">
                        <ButtonSocial />
                        <ButtonSocial icon="facebook" />
                        <ButtonSocial icon="apple" />
                    </div>
                    <div className="absolute bg-white px-[12px] -top-[9px] left-[50%] -translate-x-[50%] text-[#8A8A8A] text-[12px] font-[400]">Or</div>
                </div>
            </div>
        </div>
    </div>
}
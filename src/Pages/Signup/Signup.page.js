import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { Header } from "../../Components/Header/Header";
import { Wellcome } from "../../Components/Wellcome/Wellcome";
import { Footer } from "../../Components/Footer/Footer";

const Signup = () => {
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

    return <div className="bg-cats h-screen ">
        <Header />
        <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
            <h1>Signup</h1>
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
        <Footer />
    </div>

}

export default Signup;
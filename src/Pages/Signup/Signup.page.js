import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { SignUpForm } from "../../Components/SignUpForm/SignUpForm";

const Signup = () => {
    

    return <div className="bg-cats h-screen flex flex-col justify-between">
        <Header />
        <SignUpForm/>
        <Footer />
    </div>

}

export default Signup;
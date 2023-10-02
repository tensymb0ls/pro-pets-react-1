import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { Wellcome } from "../../Components/Wellcome/Wellcome"

export const LoginPage = () => {

    return <div className="bg-cats h-screen flex flex-col justify-between">
        <Header />
        <Wellcome />
        <Footer />
    </div>
}
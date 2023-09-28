import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary"
import { Logo } from "../Logo/Logo"
import { CatInBox } from "../icons/CatInBox"

export const Header = () => {
    return (
        <header className="bg-[#266F62] py-[20px]">
            <div className="container flex px-[20px]">
                <div>
                    {/* <img src="" alt="logo" /> */}
                    <Logo />
                </div>
                <div>
                    <ButtonPrimary icon={<CatInBox />} text="I found a Pet" />
                    <button>Primary Button</button>
                </div>
            </div>
        </header>
    )
}

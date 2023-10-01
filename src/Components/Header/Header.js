import { ButtonBurger } from "../ButtonBurger/ButtonBurger"
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary"
import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary"
import { IFoundAPet } from "../icons/IFoundAPet"
import { ILostAPet } from "../icons/ILostAPet"
import { Logo } from "../Logo/Logo"


export const Header = () => {
    return (
        <header className="bg-[#266F62] py-[20px]">
            <div className="container m-auto flex px-[20px] justify-between">
                <div>
                    {/* <img src="" alt="Logo" /> */}
                    <Logo />
                </div>
                <div className='hidden items-center gap-[15px] sm:flex'>
                    <ButtonPrimary icon={<IFoundAPet />} text='I found a pet' />
                    <ButtonSecondary icon={<ILostAPet />} text='I lost a pet' />
                    <ButtonBurger/>
                </div>
            </div>
        </header>
    )
}
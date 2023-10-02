import { ButtonBurger } from "../ButtonBurger/ButtonBurger"
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary"
import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary"
import { GlobalSearch } from "../GlobalSearch/GlobalSearch"
import { CatInBox } from "../icons/CatInBox"
import { PawIcon } from "../icons/PawIcon"
import { Logo } from "../Logo/Logo"
import { Notification } from "../Notification/Notification"

export const HeaderDashboard = () => {
    return (
        <header className="py-[20px]">
            <div className="container m-auto flex justify-between px-[20px] ">
                <Logo />
                {/* TODO: fix x-size deformation for Notification when GlobalSearch div md:w-full*/}
                <div className=" flex items-center gap-[15px] max-w-[590px] sm:w-full mx-auto">
                    <Notification />
                    <GlobalSearch />
                </div>
                <div className="hidden items-center gap-[15px] sm:flex">
                    <ButtonPrimary icon={<CatInBox />} text="I found a Pet" />
                    <ButtonSecondary icon={<PawIcon />} text="I lost a Pet" />
                </div>
                <ButtonBurger />
            </div>
            <div className="DashBoardBg h-[200px] -z-[1] absolute top-0 left-0 right-0"></div>
        </header>

    )
}
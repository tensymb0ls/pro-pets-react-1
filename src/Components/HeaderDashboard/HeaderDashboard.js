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
            <div className="container m-auto flex justify-between">
                <div className='flex-none  ml-[20px]'>
                    <Logo />
                </div>
                {/* TODO: fix x-size deformation for Notification when GlobalSearch div md:w-full*/}
                <div className="flex flex-1 items-center gap-[15px] w-[590px] mr-[25px] ml-[85px]  ">
                    <Notification />
                    <GlobalSearch />
                </div>
                <div className="hidden items-center gap-[15px] lg:flex lg:justify-between lg:flex-initial lg:w-[330px]">
                    <ButtonPrimary icon={<CatInBox />} text="I found a Pet" />
                    <ButtonSecondary icon={<PawIcon />} text="I lost a Pet" />
                </div>
                <ButtonBurger />
            </div>
            <div className="DashBoardBg h-[200px] -z-[1] absolute top-0 left-0 right-0"></div>
        </header>

    )
}
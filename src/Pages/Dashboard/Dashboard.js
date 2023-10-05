import { HeaderDashboard } from "../../Components/HeaderDashboard/HeaderDashboard"

export const Dashboard = () => {
    return <div>
        <HeaderDashboard />
        <div placeholder=" " className=" container m-auto flex gap-[20px] text-center h-[400px]">
            <div className="flex-none w-[240px] rounded-[15px] bg-white shadow-lg">My account</div>
            <div className="flex-auto w-[590px] rounded-[15px] bg-white shadow-lg">News feed</div>
            <div className=" hidden lg:block flex-none w-[330px] rounded-[15px] bg-white shadow-lg">Commerce</div>
        </div>
    </div>
} 
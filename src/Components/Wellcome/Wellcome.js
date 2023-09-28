import { CheckBoxCustom } from "../CheckBoxCustom/CheckBoxCustom"
import { SearchHeart } from "../icons/SearchHeart"

export const Wellcome = () => {
    return <div className="max-w-[750px] rounded-[10px] h-[500px] my-[120px] bg-white mx-auto">
        <div className="flex flex-col p-[20px] max-w-[285px] border h-full rounded-[10px]">
            <SearchHeart />
            <div className="text-center ">
                <h3 className="text-[27px] font-[700]">Welcome Back</h3>
                <p className="text-[14px] font-[400]">Please enter your data</p>
            </div>
            <div>
                <form className="flex flex-col gap-[8px]">
                    <label className="text-[12px] font-[400]">Login</label>
                    <input className="text-[14px] font-[400] bg-[#DCDCDC] py-[8px] px-[15px] rounded-[10px] outline-none" type="text" placeholder="Enter your email or number" />
                    <div className="flex items-center gap-[5px]">
                        <CheckBoxCustom />
                        <p className="text-[12px] font-[400] text-[#8A8A8A]">Remember me on this device</p>
                    </div>
                </form>
                <div className="flex flex-col gap-[12px] text-center mt-[16px]">
                    <button className="bg-[#266F62] py-[8px] rounded-[10px] text-white">Sign In</button>
                    <p className="text-[12px] font-[400]">New user? <span className="text-[#FF6231] cursor-pointer">Create an account!</span></p>
                </div>
                <div className="border-t relative mt-[16px]">
                    <div>socialBtn</div>
                    <div className="absolute bg-white px-[12px] -top-[9px] left-[50%] -translate-x-[50%] text-[#8A8A8A] text-[12px] font-[400]">Or</div>
                </div>
            </div>
        </div>
    </div>
}
import { useState } from "react"

export const CheckBoxCustom = () => {
    const [isChecked, setIsChecked] = useState(true);
    const handleClick = () => {
        setIsChecked(!isChecked);
    }
    return <div className="border border-[#8A8A8A] rounded-[2px] p-[3px] w-[11px] h-[11px] flex justify-center items-center" onClick={handleClick}>
        {isChecked && <ArrowCheckIcon />}
    </div>
}
const ArrowCheckIcon = () => {
    return <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.625 0.8125L2.95 5.1875L1.375 3.4375" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}
import { useState } from "react"
import { lngArr } from "../../utils/constants"
import { ArrowIcon } from "../icons/Arrow"

export const LanguageSwitcher = () => {
    const [isShow, setIsShow] = useState(false);
    const handleClickShow = () => {
        setIsShow(!isShow);
    }
    return <div onClick={handleClickShow} className="relative">
        <div className={`${isShow ? '' : 'rounded - b'} bg-white p-[5px] rounded-t flex justify-between items-center gap-2 cursor-pointer`}>RU <ArrowIcon /></div>
        {isShow && <ul className="absolute w-full">
            {lngArr.map((item) => <li className="bg-[#f1f1f2] hover:bg-[#ff6231] hower:text-white p-[5px] cursor-pointer last:rounded-b">{item.text}</li>)}
        </ul>}
    </div>
}
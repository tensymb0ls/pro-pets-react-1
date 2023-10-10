import { ArrowIcon } from "../icons/Arrow"
import { lngArr } from "../../utils/constants"
import { useState } from "react"
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
    const [isShow, setIsShow] = useState(false);
    const userLng = lngArr.filter(item => item.language === localStorage.i18nextLng)[0]
    const [language, setLanguage] = useState(userLng);
    const { i18n } = useTranslation();
    const handleClickShow = () => {
        setIsShow(!isShow);
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng.language);
        setLanguage(lng)
    }
    return <div onClick={handleClickShow} className="relative cursor-pointer">
        <div className={`${isShow ? '' : 'rounded-b'} bg-white p-[5px] rounded-t flex justify-between items-center`}>{language.text} <ArrowIcon/></div>
        {isShow && <ul className="absolute w-full">
            {lngArr.filter(item => item.language !== language.language).map((item) => <li onClick={() => changeLanguage(item)} className="bg-[#F1F1F2] hover:bg-[#FF6231] hover:text-white p-[5px] cursor-pointer">{item.text}</li>)}
        </ul>}
    </div>
}
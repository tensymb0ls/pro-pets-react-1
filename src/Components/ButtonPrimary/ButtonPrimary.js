import {useTranslation} from 'react-i18next'
export const ButtonPrimary = ({ icon, text }) => {
    const {t} = useTranslation();
    return <button className="py-[12px] border border-white px-[15px] rounded-[10px] text-white flex flex-auto w-1/2 items-center justify-center gap-[10px] whitespace-nowrap">{icon}{t(text)}</button>
}
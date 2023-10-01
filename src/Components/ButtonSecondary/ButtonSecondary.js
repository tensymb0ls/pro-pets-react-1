export const ButtonSecondary = ({ icon, text }) => {
    return (
        <button className="flex gap-[8px] items-center py-[12px] px-[18px] border border-white rounded-[10px] text-white bg-[#FF855F]">{icon} {text}</button>
    )
}
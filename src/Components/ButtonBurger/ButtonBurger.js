import { BurgerIcon } from "../icons/BurgerIcon"

export const ButtonBurger = ({ callback }) => {
    return <button className="block sm:hidden" onClick={callback}><BurgerIcon /></button>
}
import { BurgerIcon } from "../icons/BurgerIcon"

export const ButtonBurger = ({ callback }) => {
    return <button className="block lg:hidden" onClick={callback}><BurgerIcon /></button>
}
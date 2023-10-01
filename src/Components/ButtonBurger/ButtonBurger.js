export const ButtonBurger = ({callback}) => {
    return (<button onClick={callback} className='block sm:hidden'>
        <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20.8889H36M2 11.4444H36M2 2H36" stroke="white" strokeWidth="3" stroke-Linecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    )
}
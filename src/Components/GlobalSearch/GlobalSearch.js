import React, { useState } from 'react'
export const GlobalSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        // TODO: search func below
        alert(`Вы выполнили поиск по запросу: ${searchTerm}`);
    }
    return (
        <div className="flex items-center flex-initial w-1/2  ">
            <button onClick={handleSearch} className='z-[1] ml-[15px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.71429 12.4286C9.8702 12.4286 12.4286 9.8702 12.4286 6.71429C12.4286 3.55837 9.8702 1 6.71429 1C3.55837 1 1 3.55837 1 6.71429C1 9.8702 3.55837 12.4286 6.71429 12.4286Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.0811 17L10.7143 10.7143" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <input
                type="text"
                name="Global Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-[#8A8A8A] text-[12px] font-[400] bg-white pl-[40px] pr-[5px] h-[34px] rounded-[15px] outline-none -ml-[30px] flex-auto"
                placeholder="Global Search..." />
        </div>
    )
}
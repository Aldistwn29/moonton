import { useState, useRef } from "react";

export default function Topbar() {
    const [dropDownOpen, setDropDown] = useState(true);
    const dropDownTarget = useRef();

    // Function for trigger drop down
    const triggerDropDown = () => {
        if (dropDownOpen) {
            dropDownTarget.current.classList.remove("hidden");
        } else {
            dropDownTarget.current.classList.add("hidden");
        }
        setDropDown(!dropDownOpen);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <input 
                    type="text" 
                    className="top-search" 
                    placeholder="Search movie, cast, genre"/>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-black">Welcome, Granola Sky</span>
                    <div className="relative flex flex-col gap-2 collapsible-dropdown">
                        <a href="#!"
                            className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                            data-target="#dropdown-button">
                            <img 
                                src="/assets/images/avatar.png" 
                                className="object-cover w-full rounded-full" 
                                alt="" 
                                onClick={triggerDropDown}/>
                        </a>
                        <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                            ref={dropDownTarget}>
                            <a href="#!" className="p-4 transition-all hover:bg-sky-100">Dashboard</a>
                            <a href="#!" className="p-4 transition-all hover:bg-sky-100">Settings</a>
                            <a href="sign_in.html" className="p-4 transition-all hover:bg-sky-100">Sign Out</a>
                        </div>
                    </div>
                </div>
                {/* <style jsx>
                   {`
                     .top-search {
                        style="background-image: url('/assets/icons/ic_search.svg');"
                    }
                   `}
                </style> */}
            </div>
        </>
    );
}
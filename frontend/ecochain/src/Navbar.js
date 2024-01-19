import React from "react";
import logo from './image/download.png';

function Navbar() {
    return (
        <section className="navbar mw-100 bg-gray-400 text-white py-4 flex">
            <div className="logosection flex items-center w-1/4">
                <ul id="logosection" className="flex items-center space-x-2">
                    <li>
                        <img src={logo} alt="logo" className=" ml-8 rounded-full h-10 w-15" />
                    </li>
                    <li className="list" id="logo">
                        <span className="text-info">ECO--</span>CHAIN
                    </li>
                </ul>
            </div>
            <div className="list items-center w-3/4 ">
                <ul id="lists" className="flex space-x-2 justify-around">
                    <li className="list" id="home">
                        <a href='/' className="hover:text-gray-300">Home</a>
                    </li>
                    <li className="list" id="market">
                        <a href='#connect' className="hover:text-gray-300">Connect</a>
                    </li>
                    <li className="list" id="transfer">
                        <a href='#transfer' className="hover:text-gray-300">Transfer</a>
                    </li>
                    <li className="list" id="Profile">
                        <a href='#profile' className="hover:text-gray-300">Profile</a>
                    </li>
                </ul>
            </div>
            {/* Uncomment the following code if needed */}
            {/* <div className="signup">
                <ul id="signup" className="flex space-x-4">
                    <li className="hover:text-gray-300">Log In</li>
                    <li>
                        <a href='#signup' className="hover:text-gray-300">Registration</a>
                    </li>
                </ul>
            </div> */}
        </section>
    );
}

export default Navbar;

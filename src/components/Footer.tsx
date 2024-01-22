import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-footer-color">
            <div className="flex flex-row mx-36 py-4">
                <div className=" basis-2/3 text-white">
                    <div className="flex flex-row py-6 m-4 px-6">
                        <div className="basis-1/3 p-2">
                            Dataque Business
                            <ul>
                                <li className="text-xs pt-2">Teach on Kepler</li>
                                <li className="text-xs pt-2">About Us</li>
                                <li className="text-xs pt-2">Contact Us </li>
                            </ul>
                        </div>
                        <div className="basis-1/3 p-2">
                            Carrers
                            <ul>
                                <li className="text-xs pt-2">Blog </li>
                                <li className="text-xs pt-2">Help and Support</li>
                                <li className="text-xs pt-2">Investor </li>
                            </ul>
                        </div>
                        <div className="basis-1/3 p-2">
                            Terms
                            <ul>
                                <li className="text-xs pt-2">Privacy Policy </li>
                                <li className="text-xs pt-2">Cookie Setting</li>
                                <li className="text-xs pt-2">Accessibility Statement </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" basis-1/4 grid-cols-4 text-white pt-6">
                    <div className="pt-3">Newsletters</div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="py-2 px-7 my-2 text-footer-color w-full"
                    />
                    <button className=" bg-orange rounded font-medium text-white block my-2 px-5 py-1 uppercase">
                        Subscribe
                    </button>
                    <div className="flex my-4">
                        <div className="m-1">
                            <FaFacebook size={32} />
                        </div>
                        <div className="m-1">
                            <FaInstagram size={32} />
                        </div>
                        <div className="m-1">
                            <FaTelegram size={32} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-white" />
            <p className=" text-center text-white p-6">
                &copy;{" "}
                <span className="text-sm">
                    2023 Kepler Inc. All rights reserved.
                </span>
            </p>
        </footer>
    );
};

export default Footer;
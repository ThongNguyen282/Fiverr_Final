import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 500 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    });

    const currentUser = false;
    // const currentUser = {
    //     id: 1,
    //     userName: "John",
    //     isSeller: false,
    // };

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                    <span className="text">fiverr</span>
                    {/* </Link> */}
                    <span className="dot">.</span>
                </div>
                {active && (
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search for items or shops"
                        />
                        <button>Search</button>
                    </div>
                )}
                <div className="links">
                    <span className="links_arrow">
                        Fiverr Pro <IoIosArrowDown />
                    </span>
                    <span className="links_arrow">
                        Explore
                        <IoIosArrowDown />
                    </span>
                    <span className="links_hover">
                        <MdLanguage />
                        English
                    </span>
                    <span className="links_hover">Become a Seller</span>

                    {!currentUser && (
                        <span className="links_hover">Sign in</span>
                    )}
                    {/* {!currentUser.isSeller && <span>Become a Seller</span>} */}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div
                            className="user"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <img
                                src="https://picsum.photos/seed/picsum/200/300"
                                alt=""
                            />
                            <span>{currentUser?.userName}</span>
                            {open && (
                                <div className="opitons">
                                    {currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add New Gig</span>
                                        </>
                                    )}
                                    <span>Order</span>
                                    <span>Messages</span>
                                    <span>Log Out</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>1</span>
                        <span>2</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;

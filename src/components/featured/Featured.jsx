import React from "react";
import "./Featured.scss";
import { CiSearch } from "react-icons/ci";
const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="top">
                    <h1>
                        Find the right <em>freelance</em> service, right away
                    </h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Search for any service..."
                        />
                        <button type="button" className="search">
                            <div className="icon">
                                <CiSearch size={18} />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Featured;

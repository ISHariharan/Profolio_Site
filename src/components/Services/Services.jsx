import React from "react";
import "./Services.css";
import { Link } from '@docusaurus/router';

function Services({ items }) {
    return (
        <div className="ServiceContainer">
            {items.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card__border"></div>
                    <div>
                        <div className="card_title__container">
                            <span className="card_title">{item.heading}</span>
                            <p className="card_paragraph">{item.Subheading}</p>
                        </div>
                        <hr className="line" />
                        <ul className="card__list">
                            {Object.keys(item)
                                .filter(key => key.startsWith('item'))
                                .map((key, index) => (
                                    item[key] ? (
                                        <li className="card__list_item" key={index}>
                                            <span className="check">
                                                <svg
                                                    className="check_svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="list_text">{item[key]}</span>
                                        </li>
                                    ) : null
                                ))}
                        </ul>
                        <Link to="/docs/intro" className="button">Contact Us</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services;

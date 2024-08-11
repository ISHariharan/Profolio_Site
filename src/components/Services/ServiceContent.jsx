import React from "react";
import Services from "./Services.jsx";
import "./Services.css";

const items = [
    {
        heading : "Web Development",
        Subheading : "Full stack development using MERN, MEAN, WAMP etc",
        item1 : "Portfolio websites",
        item2 : "E-Commerce Websites",
        item3 : "User-friendly websites",
        item4 : "Custom Business Websites",
        item5 : "Content Management Systems (CMS)"
    },
    {
        heading : "Graphic Designing",
        Subheading : "Graphic Designing using Canva",
        item1 : "Logo Design",
        item2 : "Brand Identity",
        item3 : "Social Media Graphics",
        item4 : "Website Graphics",
        item5 : "Poster Designing"
    }
];

function ServiceContent() {
    return (
        <div className="ServiceContent">
            <Services items={items} />
        </div>
    );
}

export default ServiceContent;

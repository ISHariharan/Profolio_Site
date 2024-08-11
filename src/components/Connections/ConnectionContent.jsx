import React from "react";
import Connections from "./Connections";

const items = [
    {
        heading: "Link Tree",
        subheading: "Connecting my all social media handles",
        link: "https://linktr.ee/hariharanis",
    },
    {
        heading: "Email Address",
        subheading: "hariharanis.offl@gmail.com",
        link: "mailto:hariharanis.offl@gmail.com",
    },
    {
        heading : "Email Address",
        subheading : "ishariharan2004@gmail.com",
        link: "mailto:ishariharan2004@gmail.com",
    },
    {
        heading : "Phone Number",
        subheading : "+91 90259-17465",
        link: "tel:+919025917465",
    },
    {
        heading : "LinkedIn",
        subheading : "Hariharan I S",
        link : "https://www.linkedin.com/in/hariharan-i-s-85aa10246/",
    },
    {
        heading : "Github",
        subheading : "ISHariharan",
        link : "https://github.com/ISHariharan",
    },
    
];

function ConnectionConnect() {
    return (
        <div className="ConnectionContent">
            {items.map((item, index) => (
                <Connections
                    key={index}
                    heading={item.heading}
                    subheading={item.subheading}
                    link={item.link}
                />
            ))}
        </div>
    );
}

export default ConnectionConnect;

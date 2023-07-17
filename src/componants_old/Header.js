import React from "react";

function Header() {
    const client = "Programing";
    // const title_designer = "Designer ";
    // const title_programing = "Programing ";
    // if (client === "Designer") {
    //     title = "Designer is my life";
    // } else {
    //     title = "Programing is my life";
    // }

    const title = {
        designer: "Designer ",
        programing: "Programing ",
    };

    const info = {
        name: "Moha",
        nick: "Gomaa",
    };

    return(
        <div className="navbar bg-dark rounded text-white">
            {/*Hello {info.name + " " + info.nick + " "}*/}
            Hello {`${info.name}  ${info.nick}`}
            <h2 className="text-white">{ client === "Designer" ? title.designer : title.programing} is my life</h2>
            {/*<h1 className="text-white">{5*6}</h1>*/}
        </div>
    );
}
export default Header;
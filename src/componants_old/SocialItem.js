import React from "react";

function SocialItem(props) {

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <img src={props.p.img} alt={`icon of ${props.p.media}`} />
                <input type="checkbox" id={props.p.id}/>
                <label htmlFor={props.p.id}>{props.p.media}</label>
            </li>
            {/*<li className="list-group-item">*/}
            {/*    <input type="checkbox" id="YT"/>*/}
            {/*    <label htmlFor="YT">YT</label>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">*/}
            {/*    <input type="checkbox" id="Instagram"/>*/}
            {/*    <label htmlFor="Instagram">Instagram</label>*/}
            {/*</li>*/}
        </ul>
    );
}
export default SocialItem;
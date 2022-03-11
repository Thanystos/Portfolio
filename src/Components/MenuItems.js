import React from 'react'
import { faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}><FontAwesomeIcon icon={faEye} className="icon gh" /></a>
                                    <a href={item.link2}><FontAwesomeIcon icon={faGithub} className="icon gh" /></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;

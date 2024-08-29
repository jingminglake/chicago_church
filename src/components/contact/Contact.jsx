import React, {useEffect} from "react";
import "./contact.scss";

const Contact = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
    return (
      <div className="contact-frame"> 
        <div>
  
            <h3>Contact</h3>
            <br/>
            <p>Hyde Park (UChicago):</p>
            <ul>
                <li>
                Nuanliang Zhu - (872)-724-0733
                </li>
                <li>
                Weiyi Qian(Jonathan Qian) - (773)-219-8323
                </li>
            </ul>
            <br/>
            <p>Evanston (Northwestern):</p>
            <ul>
                <li>
                Han Tang - (312)-241-6688
                </li>
            </ul>
            <br/>
            <p>Bridgeport (Illinois Tech):</p>
            <ul>
                <li>
                Leon Hou - (303)-862-2647
                </li>
            </ul>
            <br/>
            <p>South Loop (UIC):</p>
            <ul>
                <li>
                Weidi Zhang - (732)-310-2214
                </li>
            </ul>
            <br/>
            <p>Chinatown:</p>
            <ul>
                <li>
                Bin Wang (Kevin Wang) - (312)-709-8172
                </li>
                <li>
                Meng Tong - (312)-375-5769
                </li>
            </ul>
  
        </div>
      </div>
  
    );
  };
  
  export default Contact
import React from 'react'
import {useEffect} from "react";
import styled from "styled-components";
import $ from 'jquery';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Models from "../images/ModelS.jpg"
import Modely from "../images/ModelY.jpg"
import Model3 from "../images/Model3.jpg"
import Modelx from "../images/ModelX.jpg"
import LowestCost  from "../images/SolarPanels.jpg"
import NewRoof  from "../images/SolarRoof.jpg";
import Accessories from "../images/Accessories.png";

const TeslaHome = () => {
    useEffect(()=>{
        document.title=`Electric Cars,Solar & Clean Energy | Tesla`;
    })
    return (
            <>
            <HomeMain>
                    <MODELS style={{ backgroundImage:`url(${Models})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Model s</div>
                                <span>Order Online for <a href="/">Touchless Delivery</a></span>
                        </UPPER>
                            <LOWER className="L1">
                                <button className="button1">custom order</button>
                                <button className="button2">existing inventory</button>
                            </LOWER>
                                <Arrow><ArrowForwardIosIcon size="" className="arrow" /></Arrow>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${Modely})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Model y</div>
                                <span>Order Online for <a href="/a">Touchless Delivery</a></span>
                        </UPPER>
                            <LOWER>
                                <button className="button1">custom order</button>
                                <button className="button2">existing inventory</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${Model3})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Model 3</div>
                                <span>Order Online for <a href="/b">Touchless Delivery</a></span>
                        </UPPER>
                            <LOWER>
                                <button className="button1">custom order</button>
                                <button className="button2">existing inventory</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${Modelx})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Model x</div>
                                <span>Order Online for <a href="/c">Touchless Delivery</a></span>
                        </UPPER>
                            <LOWER>
                                <button className="button1">custom order</button>
                                <button className="button2">existing inventory</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${LowestCost})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Lowest Cost Solar Panels in America</div>
                                <span>Money-back guarantee</span>
                        </UPPER>
                            <LOWER>
                                <button className="button1">order now</button>
                                <button className="button2">learn more</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${NewRoof})`}}>
                        <SECTION >
                        <UPPER>
                                <div>Solar for New Roofs</div>
                                <span>Solar Roof Costs Less Than a New Roof Plus Solar Panels</span>
                        </UPPER>
                            <LOWER>
                                <button className="button1">order now</button>
                                <button className="button2">learn more</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
                    <MODELS  style={{ backgroundImage:`url(${Accessories})`, backgroundSize:"400px 400px",backgroundPosition:"center"}}>
                        <SECTION >
                        <UPPER>
                                <div style={{marginTop:"-50px"}}>Accessories</div>
                        </UPPER>
                            <LOWER>
                                <button className="button1">shop now</button>
                            </LOWER>
                        </SECTION>
                    </MODELS>
            </HomeMain> 
        </>
    )
}

const HomeMain =styled.div`
    width:100%;
    height:100vh;
    overflow-y: scroll; 
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    
    `;
const MODELS=styled.div`
    background-size:cover;
    scroll-snap-align: center;
    background-repeat:no-repeat;   
    width:100%;
    height:100vh;
    scroll-snap-align:center;
    
    `;


const SECTION=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;

    .L1{
        margin-top:20vh;
    }
    `;

const  Arrow=styled.div`
    width:10%;height:1%;
    display:flex;
    justify-content:center;
    align-items:center;
 .arrow{
     /* width:10%;
        height:10vh; */
        font-size:30px;
        margin-top:1vh;
        animation:animate 2s ease-in-out infinite;
        transform:rotate(90deg);
    }
    @keyframes animate{
        0%{
            margin-top:-3vh;
        }
        20%{
            margin-top:-2vh;
        }
        30%{
            margin-top:-1vh;
        }
        40%{
            margin-top:-2vh;
        }
        50%{
            margin-top:-3vh;
        }
        60%{
            margin-top:-1vh;
        }
        70%{
            margin-top:1vh;
        }
        80%{
            margin-top:-1vh;
        }
        90%{
            margin-top:-3vh;
        }
        100%{
            margin-top:-3vh;

        }
    }
    
`; 
const UPPER=styled.div`

    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin-top:100px;
    div{
        text-transform:capitalize;
        font-weight:600;
        font-size:40px;
        opacity:0.8;
        text-align:center;
    }
    span{
        color:rgba(0,0,0,0.6);
        text-align:center;

        a{
            color:rgba(0,0,0,0.7);;
            text-decoration:underline;
            cursor:pointer;
           text-decoration-color:rgba(0,0,0,0.5);
           text-underline-position:under;
           text-decoration-thickness: auto;
           transition:all 0.5s linear;
           &:hover{
               opacity:2;
               color:rgba(0,0,0,1);
                text-decoration-color:rgba(0,0,0,1);
                text-decoration-thickness: 3px;
           }
        }
    }
    
`;
const LOWER=styled.div`
    margin-top:40px;
    width:40%;
    display:flex;
    justify-content:center;
    
   
    button{
        margin-right:10px;
        border-radius:2rem;
        border:0px ;
        width:45%;
        height:40px;
        text-transform:uppercase;
        font-weight:600;
        font-size:12px;
        letter-spacing:1px;
        cursor:pointer;
    }
    .button1{
        background-color:rgba(23 ,26, 32, 0.8);
        color:white;
    }
    .button2{
        opacity: 0.7;
    }
    @media only screen and (max-width:767px){
        flex-direction:column;
        align-items:center;
        button{
            margin-bottom:10px;
            width:200%;
        }
    }

`;



// * jquery

$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".button1").css({"opacity":"0"})
        }
        else{
            $(".button1").css({"opacity":"1"})
        }
    })
})


export default TeslaHome

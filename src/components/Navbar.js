import React from 'react'
import styled from "styled-components"
import logo1 from "../images/TeslaHomeLogo.png";
import DehazeIcon from '@material-ui/icons/Dehaze';
import ClearIcon from '@material-ui/icons/Clear';
import {useState} from "react";
const Navbar = () => {

    const [state1,newState1]=useState("");
    const sidebaropen=()=>{
        document.querySelector(".sidebar").style.display="block";
    }
    const sidebarclose=()=>{
        document.querySelector(".sidebar").style.display="none";
    }
    const RegionPopOpen=()=>{
        document.querySelector(".regionpopup").style.display="flex";
    }
    const RegionPopClose=(e)=>{
        const clasname=e.target.className;
        if(typeof clasname !=="string"){

        }
        else{
            const val=   document.querySelector(`.${clasname}`).innerHTML;
            switch(clasname){
                case "RegionPop1":
                    newState1(val);
                    console.log(val);
                    break;
                case "RegionPop2":
                    newState1(val);
                    console.log(val);
                    break;
                case "RegionPop3":
                    newState1(val);
                    console.log(val);
                    break;
                case "RegionPop4":
                    newState1(val);
                    console.log(val);
                    break;
                case "RegionPop5":
                    newState1(val);
                    console.log(val);
                    break;
                default :
                    console.log(val);
            }
        }
        
        document.querySelector(".regionpopup").style.display="none";
        sidebarclose();
    }
    return (
        <NavbarHome>
            <HomeE1 >
                <img src={logo1} alt="TeslaHomeLogo" />
            </HomeE1>
            <HomeE2>
                <PageLink >
                    model s
                </PageLink>
                <PageLink>
                    model 3
                </PageLink>
                <PageLink>
                    model x
                </PageLink>
                <PageLink>
                    model y
                </PageLink> 
                <PageLink>
                    solar roof
                </PageLink>
                <PageLink>
                    solar panels
                </PageLink>
            </HomeE2>
            <HomeE3>
                <PageLink className="s1">
                    shop
                </PageLink>
                <PageLink className="s1">
                    tesla account
                </PageLink>
                <PageLink className="icon" onClick={sidebaropen}>
                    <DehazeIcon />
                </PageLink>
            </HomeE3>

            <SIDEBAR className="sidebar">
                <ClearIcon  style=
                {{cursor:"pointer",position:"absolute",top:"15px",right:"25px"}} 
                onClick={sidebarclose}/>
                <SIDEUI >
                    <SIDELI onClick={RegionPopOpen}>{state1}</SIDELI>
                    <SIDELI className="sideli" href="models">model s</SIDELI>
                    <SIDELI className="sideli">model 3</SIDELI>
                    <SIDELI className="sideli">model x</SIDELI>
                    <SIDELI className="sideli">model y</SIDELI>
                    <SIDELI className="sideli">model y</SIDELI>
                    <SIDELI className="sideli">solar roof</SIDELI>
                    <SIDELI className="sideli">solar panels</SIDELI>
                    <SIDELI>EXISTING INVENTORY</SIDELI>
                    <SIDELI>USED INVENTORY</SIDELI>
                    <SIDELI>trade-in</SIDELI>
                    <SIDELI>cybertruck</SIDELI>
                    <SIDELI>roadster</SIDELI>
                    <SIDELI>semi</SIDELI>
                    <SIDELI>charging</SIDELI>
                    <SIDELI>powerwall</SIDELI>
                    <SIDELI>commercial energy</SIDELI>
                    <SIDELI>utilities</SIDELI>
                    <SIDELI>test drive</SIDELI>
                    <SIDELI>find us</SIDELI>
                    <SIDELI>support</SIDELI>
                </SIDEUI>
            </SIDEBAR>

            <RegionPopUp className="regionpopup" >
            <ClearIcon  style=
                {{cursor:"pointer",position:"absolute",top:"15px",right:"25px"}} 
                onClick={RegionPopClose}/>
                <div className="innerRegion">
                    <span className="RegionSpan1">
                        select your region
                    </span>
                    <div className="RegionSpan2">
                        <span>North America</span>    
                        <div  onClick={RegionPopClose} className="RegionPop1">United States</div>
                        <div onClick={RegionPopClose} className="RegionPop2">Canada</div>
                        <div onClick={RegionPopClose} className="RegionPop3">Mexico</div>
                        <div onClick={RegionPopClose} className="RegionPop4">Puerto Rico</div>
                    </div>
                    <div>
                        <span>Europe</span>
                        <div onClick={RegionPopClose}className="RegionPop5">Belgium</div>
                        <div onClick={RegionPopClose}className="RegionPop6">Česko</div>
                    </div>
                </div>
            </RegionPopUp>
        </NavbarHome>
    )
}

const NavbarHome=styled.div`
    position:fixed;
    width:100%;
    height:8vh;
    background:transparent;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:1;
`;

const HomeE1 = styled.a`
    text-decoration:none;
    color:black;
    width:15%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-left:10px;
    img{
        cursor:pointer;
        width:100px;
        height:100px;
    }
`;
const HomeE2=styled.div`
    width:40%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    @media only screen and (max-width:1200px){
        display:none;
    }
`;
const PageLink = styled.a`
    text-decoration:none;
    color:black;
    text-transform:uppercase;
    font-weight:600;
`;

const HomeE3=styled.div`
    width:15%;
    display:flex;
    justify-content:space-around;
    margin-right:20px;
    @media only screen and (max-width:1200px){
        .s1{
            display :none;
        }
    }
    
`;


const SIDEBAR=styled.div`
    transition: all 1s ease-in-out;
    position:fixed;
    right:0%;
    top:0%;
    min-height:100vh;
    width:20%;
    z-index:2;
    background-color:white;
    display:none;
    
    @media only screen and (min-width:1200px) {
        .sideli{
            display:none;
        }
    }
    @media only screen and (min-width:376px) and (max-width:768px) {
        width:60%;
    }
    @media only screen and (max-width:376px){
        width:100%;
    }
    
    
`;

const SIDEUI=styled.div`
    width:100%;
    margin-top:50px;
    height:100vh;
    overflow:scroll;
    display:flex;
    flex-direction:column;
    align-items:center;
   &::-webkit-scrollbar{
        display :none;
    }
`;
const SIDELI=styled.a`
    text-decoration:none;
    width:80%;
    text-transform:uppercase;
    font-weight:600;
    color:rgba(0,0,0,0.6);
    height:10px;
    padding:10px;
    padding-bottom:30px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    cursor:pointer;
    
`;


const RegionPopUp=styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width:25%;
    min-height:90vh;
    border-radius:1rem;
    border:0px;
    background-color:white;
    box-shadow: 0 0 50px -10px black;
    top:80%; 
    left:50%; 
    transform:translate(-50%, 0%); 
    
    .innerRegion{
        width:70%;
        height:90vh;
        display :flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:flex-start;
        span{
            font-weight:700;
            font-size:25px;
            text-transform:capitalize;
        }
        .RegionSpan1{
        font-size:30px;
        height:0%;
        }
      
        div{
            margin-left:20px;
            display:flex;
            flex-direction:column;
            height:30%;
            justify-content:space-around;
            font-weight:600;
            div{
                text-decoration:none;
                color:rgba(0,0,0,0.8);
                cursor:pointer;
            }
        }
        .RegionSpan2{
            div{
                margin-top:50px;
                height:40%;
            }
        }
    }
    

    @media only screen and (min-width:940px) and (max-width:1500px) {
        width:40%;
    }
    @media only screen and (min-width:625px) and (max-width:940px) {
        width:60%;
    }
    @media only screen and (max-width:624px){
        width:100%;
    }
    
`;

export default Navbar

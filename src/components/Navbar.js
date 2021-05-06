import React from 'react'
import styled from "styled-components"
import logo1 from "../images/TeslaHomeLogo.png";
import DehazeIcon from '@material-ui/icons/Dehaze';
const Navbar = () => {
    return (
        <NavbarHome>
            <HomeE1 >
                <img src={logo1} alt="TeslaHomeLogo" />
            </HomeE1>
            <HomeE2>
                <PageLink>
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
                <PageLink>
                <DehazeIcon />
                </PageLink>
            </HomeE3>
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
    text-transform:uppercase;
    font-weight:600;
    cursor: pointer;
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

export default Navbar

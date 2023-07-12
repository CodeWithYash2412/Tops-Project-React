import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { styled } from 'styled-components';
const Navbar = () => {

    const NavWrapper = styled.div`
    width: 100%;
    background: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    
    
    h2 {
        font-size: 25px
        
    }
    .searchDiv{
        
        width: 40%;
        display: flex;
        height: 80%;
        
    }

    .searchDiv input{
        width: 100%;
        height: 40px
    }

    .searchDiv button {
        cursor: pointer; 
        width: 20%;
        background: white;
    }
    .storeDiv{
        display: flex;
        width: 5%;
        height: 40px;
        
        justify-content: end;
        position: relative;
        
    }
    .storeDiv button{
        width: 100%;
        cursor: pointer;
        background: white;

    }
   
    `;
    return (
        <NavWrapper>
            <h2> ABC STORE </h2>
            <div className='searchDiv'>
                <input type="text" name="search" id="search" placeholder='Search Here....' />
                <button> {<AiOutlineSearch />} </button>
            </div>
            <div className='storeDiv'>
                <button> {<AiOutlineShoppingCart />} </button>
            </div>

        </NavWrapper>
    )
}

export default Navbar
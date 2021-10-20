import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import { MdNoEncryption } from 'react-icons/md';


export const StarContainer = styled.div `


align-items:center;
justify-content:center;
background:transparent;
color:aqua;
padding-top:0px;
padding-bottom:30px;


`

export const StarSize = styled.div`

height:100%;
width:100%;
`

export const StarWrapper = styled.div `


margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr ;
grid-gap:16px;
padding:0 30px;
background:transparent;


@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 60px;
}
`
export const StarCard = styled.div `
background:white;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:10px;
border:1px solid;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
height:180px;
border-color:#00985a;
background-color:black;
color:#00985a;
&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`

export const StarImg = styled.img `

height:120px;
width:200px;
margin-bottom:20px;
margin-top:10px;
border-radius:10px;
`

export const StarLink = styled.a `

text-decoration:none;
`

export const StarSection = styled.section`

background:black;

`

export const StarH1 = styled.h1 `
font-size:3rem;
color:white;
margin-bottom:30px;
margin-top:90px;
align-items:center;
justify-content:center;

@media screen and(max-width:480px){

    font-size:2rem;
}
`
export const StarH2 = styled.h2 `

font-size:1rem;
margin:10px;
`

export const Starinput = styled.div`

align-items:center;
justify-content:center;
height:20px;
width:1500px;

`

export const FormInput = styled.input `

padding:16px 16px;
Width:500px;
margin-bottom:22px;
border:none;
border-radius:4px;
border:1px solid;
border-color:#00985a;
color:#00985a;
background-color:black;
`

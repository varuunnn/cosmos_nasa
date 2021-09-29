import styled from 'styled-components'

export const WeatherContainer = styled.div `

height:120px;
flex-direction:column;
justify-content:center;
align-items:center;
background:transparent;

@media screen and(max-width:768px){

    height:1100px;
}
@media screen and(max-width: 480px){

height:1300px;
}

`
export const WeatherContainer1 = styled.div `

height:700px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:transparent;
Padding-top:50px;
Padding-bottom:100px;

@media screen and(max-width:768px){

    height:1100px;
}
@media screen and(max-width: 480px){

height:1300px;
}

`
export const WeatherH1 = styled.h1 `
font-size:2.5rem;
color:#ffffff;
margin-bottom:0px;
background:transparent;
`

export const WeatherCard = styled.div `

display:flex;
color:#ffffff;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:20px;
//box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
border-radius:10px;
border:1px solid;
border-color:#01bf71;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`
export const WeatherCard1 = styled.div `
border-radius:4px;
border: 1px  solid;
border-color:#01bf71;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:40px;
color:#ffffff;
margin-bottom:30px;

box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}




`
export const WeatherCard2 = styled.div `

display:flex;
color: #ffffff;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;

box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
}




`

export const WeatherWrapper = styled.div `
background:transparent;
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 20px;
}
`
export const WeatherWrapper1 = styled.div `
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 20px;
}
`
export const FormInput = styled.input `

padding:16px 16px;
Width:500px;
margin-bottom:22px;
border:none;
border-radius:4px;
border-color:rgb(0, 255, 255);
border:1px solid;
`
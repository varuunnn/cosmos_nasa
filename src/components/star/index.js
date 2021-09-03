import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Const from './Const.json'
import star from './star.json'
import Nebula from './Nebula.json'
import { StarContainer, StarWrapper, StarCard, StarImg, StarLink, StarH1, Starinput, FormInput } from './starElements'
import video from '../../images/video.mp4'

import { useState } from 'react';
const Star = () => {

  const [SearchTerm, SetSearchTerm] = useState('');


  return (


    <StarContainer>
      <div id='stars'>
        <video autoPlay loop muted >
          <source src={video} type='video/mp4' />
        </ video>
        {/* <center>
          <Starinput>
            <FormInput
              label="Search Country"
              placeholder="search"
              onChange={event => {
                SetSearchTerm(event.target.value);
              }}

            />
          </Starinput>
        </center> */}

        <center> <StarH1>Constellations</StarH1></center>
        <StarWrapper>

          {Const.filter((val) => {

            if (SearchTerm == "") {
              return val
            } else if (val.Constellation.toLocaleLowerCase().includes(SearchTerm.toLowerCase())) {

              return val
            }
          }).map((val, key) => {

            return (

              <StarLink href={val.C_link} target="_blank">
                <StarCard key={key}>

                  <h2 style={{ margin: 0 }}>{val.Constellation}</h2>
                  <StarImg src={val.img} />
                </StarCard>
              </StarLink>


            )
          })}



        </StarWrapper>
      </div>
      <div id='stars1'>
        <center> <StarH1>Stars</StarH1></center>
        <StarWrapper>

          {star.filter((val) => {

            if (SearchTerm == "") {
              return val
            } else if (val.Constellation.toLocaleLowerCase().includes(SearchTerm.toLowerCase())) {

              return val
            }
          }).map((val, key) => {

            return (

              <StarLink href={val.C_link} target="_blank">
                <StarCard key={key}>

                  <h2 style={{ margin: 0 }}>{val.Constellation}</h2>
                  <StarImg src={val.img} />
                </StarCard>
              </StarLink>


            )
          })}



        </StarWrapper>
      </div>
      <div id='stars2'>
        <center> <StarH1>Nebula</StarH1></center>
        <StarWrapper>
          {Nebula.filter((val) => {

            if (SearchTerm == "") {
              return val
            } else if (val.Constellation.toLocaleLowerCase().includes(SearchTerm.toLowerCase())) {

              return val
            }
          }).map((val, key) => {

            return (

              <StarLink href={val.C_link} target="_blank">
                <StarCard key={key}>
                  <h2 style={{ margin: 0 }}>{val.Constellation}</h2>
                  <StarImg src={val.img} />
                </StarCard>
              </StarLink>


            )
          })}

        </StarWrapper>
      </div>
    </StarContainer>



  )
}
export default Star;
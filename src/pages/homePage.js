import React from "react"
import Layout from "../layout/layout";
import styled from "@emotion/styled";
import image from "../assets/ambulance.png"


const ImageStyle = styled('div')({
  height:"100vh",
  backgroundImage:`url(${image})`,
  backgroundSize:"cover",
  backgroundPosition:"center center",
  backgroundRepeat:"no-repeat",
  width:"100%",
})

const HomePage = ()=>{
  return (
    <>
     <Layout>
     <ImageStyle>
      dfgdf
     </ImageStyle>
        
    </Layout>
    </>
  )
}


export default HomePage;
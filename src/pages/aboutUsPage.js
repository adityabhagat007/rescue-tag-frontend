import React, { useState } from "react"
import Layout from "../layout/layout";

const AboutUsPage = ()=>{
  const [value,setValue] = useState(false);
  return (
    <>
    <Layout>
        <h1>ABOUT US</h1>
    </Layout>
    </>
  )
}


export default AboutUsPage;
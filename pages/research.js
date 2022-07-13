import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'
import Placeholder from '../public/images/placeholder.svg'

const Research = () => {
  return (
    <>
    <Navigation />
    <div className="containerGlobal">
        <h2 className="title">
Model Overview        </h2>


        <p className="para">Linear models of pharmaceutical innovation and commercialization are inadequate and did not capture the complexity of the data we acquired. For example, the classic “pipeline model” of drug development demonstrates the sequence of events necessary for translating basic research from “bench to bedside,” however it fails to account for the elaborate systems of communication, legal and regulatory framework, financial inputs and outputs, and scientific hurdles that shape and determine the path of innovation in this sector.
<br></br><br></br>
We use the metaphor of a roadmap to demonstrate that translational medicine occurs sequentially but not necessarily linearly. This overview of the road to pharmaceutical innovation visualizes the institutions along the route, the stakeholders moving along the road, and the roadblocks and bottlenecks that impede progress. This is an active ecosystem where the social and scientific are inherently enmeshed.
</p>

<h3 style={{color: 'red'}}>Currently broken - fixing in progress... </h3>
<div className="container">
<Image src={Placeholder} alt="" />
</div>    
      <Footer />
      </div>
</>

  )
}

export default Research
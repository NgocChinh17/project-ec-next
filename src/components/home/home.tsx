"use client"
import React from "react"

import Banner1 from "../bannerHome/Banner1"
import BannerPromotion from "../bannerHome/BannerPromotion"
import BannerNewArrival from "../bannerHome/BannerNewArrival"
import BestSellingProducts from "../bannerHome/BestSellingProducts"
import FamousBrands from "../bannerHome/FamousBrands"
import LayoutAllProduct from "../bannerHome/LayoutAllProduct"
import MakeupSolution from "../bannerHome/makeupSolution"

const Home = () => {
  return (
    <>
      <Banner1 />
      <BannerPromotion />
      <BannerNewArrival />
      <BestSellingProducts />
      <FamousBrands />
      <LayoutAllProduct />

      <MakeupSolution />
    </>
  )
}

export default Home

import React from 'react'
import HomeBanner from './HomeBanner'
import HomeEvaluateCustomer from './HomeEvaluateCustomer'
import HomeTrademark from './HomeTrademark'
import HomeBrouse from './HomeBrouse'
import ViewsProduct from '../product/ViewsProduct'

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeTrademark />
      <ViewsProduct 
        title="NEW ARRIVALS" 
        subtitle="Experience the peak of craftsmanship with our latest drops. Meticulously designed for the modern connoisseur."
      />
      <ViewsProduct 
        title="BEST SELLERS" 
        subtitle="Our community's favorites. These timeless pieces have defined the season's most iconic looks."
      />
      <HomeBrouse />
      <HomeEvaluateCustomer />
    </>
  )
}

export default HomePage
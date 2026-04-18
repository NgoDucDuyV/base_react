import React from 'react'
import HomeBanner from './HomeBanner'
import HomeViewsProduct from './HomeViewsProduct'
import HomeEvaluateCustomer from './HomeEvaluateCustomer'
import HomeTrademark from './HomeTrademark'
import HomeBrouse from './HomeBrouse'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../../services/product.service'
import ViewsProduct from '../product/ViewsProduct'

const HomePage = () => {
  const {data} = useQuery({
    queryKey: ['product'],
    queryFn: () => productService.getProduct(),
    staleTime: 1000 * 60 * 5
  })

  return (
    <>
      {/* Home Banner */}
      <HomeBanner />

      <HomeTrademark/>

      <ViewsProduct title="NEW ARRIVALS" />

      <ViewsProduct title="BEST SELLERS" />

      <HomeBrouse/>

      <HomeEvaluateCustomer/>
    </>
  )
}

export default HomePage
import React from 'react'
import PodcastEpisode from './podcastepisode/PodcastEpisode'
import BehindTheMic from './behindthemic/BehindTheMic'
import FeaturedGuests from './featuredguests/FeaturedGuests'
import ProductList from './product/ProductList'

const Home = () => {
  return (
<>
<PodcastEpisode/>
<ProductList/>
<BehindTheMic/>
<FeaturedGuests/>

</>  )
}

export default Home
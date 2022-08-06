import Head from 'next/head'
import Image from 'next/image'
import HomeBanner from '../components/Banner'
import DiscountCard from '../components/Banner/DiscountCard'
import Featured from '../components/Featured'
import HomeLayout from '../components/Layouts'
import Navbar from '../components/Navbar'
import SmallNav from '../components/Navbar/SmallNav'
import PopularProducts from '../components/PopularProducts'


export default function Home() {
  return (
    <div className='max-w-screen w-full font-open-sans relative !scrollbar-hide' >
      <Head>
        <title>Fresh Mart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div >
  <HomeLayout>
    <div  className='fixed bottom-0 z-10 w-full'>

    <SmallNav/>
    </div>
   <HomeBanner/>
   <Featured/>
   <PopularProducts/>
  </HomeLayout>
</div>

    
    </div>
  )
}

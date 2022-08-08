import Head from 'next/head'
import HomeBanner from '../components/Banner'
import Featured from '../components/Featured'
import HomeLayout from '../components/Layouts'

import SmallNav from '../components/Navbar/SmallNav'
import PopularProducts from '../components/PopularProducts'

export default function Home() {
  return (
    <div className="max-w-screen w-full font-open-sans relative !scrollbar-hide">
      <Head>
        <title>Fresh Mart</title>
    

      </Head>

      <div>
        <HomeLayout>
          <div className="fixed bottom-0 z-10 w-full">
            <SmallNav />
          </div>
          <HomeBanner />
          <Featured />
          <PopularProducts />
        </HomeLayout>
      </div>
    </div>
  )
}



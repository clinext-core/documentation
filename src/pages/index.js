import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
// import HomepageFeatures from '@site/src/components/project/homepageFeatures'
import Framework from '@site/src/components/project/framework'
import HomePageHeader from '../components/project/homePageHeader'
import Sample from '../components/project/sample'
// import SponsorUs from '../components/project/sponsorUs'
import HomepageFeatures2 from '../components/project/homepageFeatures2'
// import HomepageFeatures3 from '../components/project/homepageFeatures3'
// import HomepageFeatures4 from '../components/project/homepageFeatures4'
// import EverythingIsAFeature from '../components/project/everythingIsAFeature'
// import Pollination from '../components/project/pollination'
// import FeaturesSample from '../components/domain/featuresSample'
import Manifest from '../components/project/manifest'
// import Definitions from '../components/project/definitions'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Node JS framework built on top of Parse Server and tailored for features. It provides a concise, easy to use and scalable template to get the best of features.\n Get ready to change the way you code your server!">
      <HomePageHeader />
      {/* <div className='bg-slate-200 dark:bg-slate-800 h-[1px] w-full'></div> */}
      <main className='pb-16'>
        
        <Framework />
        {/* <Pollination />         */}
        <HomepageFeatures2 />
        {/* <Definitions align={'left'}/> */}
        <Manifest  align={'left'}/>  
             
        {/* <FeaturesSample /> */}
       
        
        {/* <EverythingIsAFeature /> */}
        {/* <HomepageFeatures />
        <HomepageFeatures2 /> */}
        
        {/* <HomepageFeatures3 /> */}
        {/* <ExtremeRefactoring /> */}
        {/* <HomepageFeatures4 /> */}
        {/* <Featureed /> */}
        <Sample />
        {/* <SponsorUs /> */}
      </main>
    </Layout>
  )
}

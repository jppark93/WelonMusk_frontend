import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarMini from '../../components/NavbarMini/NavbarMini'
import InfoHeader from '../../components/InfoHeader/InfoHeader'
import InfoSubHeader from '../../components/InfoSubHeader/InfoSubHeader'
import InfoButton from '../../components/InfoButton/InfoButton'
import ButtonDown from '../../components/ButtonDown/ButtonDown'
import Video from '../../videos/experience-hero-desktop.mp4'
import Footer from '../../components/Footer/Footer'
import { TOOLTIPS, ANCHORS } from './data'
import ReactFullpage from '@fullpage/react-fullpage'
import './Home.scss'

const Home = () => (
  <ReactFullpage
    verticalCentered={false}
    navigation={true}
    anchors={ANCHORS}
    navigationTooltips={TOOLTIPS}
    showActiveTooltip={true}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <section className='section home__first'>
            <Navbar />
            <div className='info__content'>
              <InfoHeader text='Model 3' />
              <InfoButton text='지금 주문하기' />
            </div>
            <ButtonDown section='#section2' />
          </section>
          <section className='section home__second'>
            <NavbarMini />
            <video
              className='bg-vid'
              data-src={Video}
              type='video/mp4'
              autoPlay
              data-keepplaying
              loop
              muted
            />
            <div className='info__content'>
              <InfoHeader text='Tesla 알아보기' />
              <InfoButton text='시승 신청' />
            </div>
            <ButtonDown section='#section3' />
          </section>
          <section className='section home__third'>
            <NavbarMini />
            <div className='info__content'>
              <InfoHeader text='모든 전력을 공급' />
              <InfoSubHeader text='태양광과 Powerwall' />
              <InfoButton text='자세히 알아보기' />
            </div>
            <ButtonDown section='#section4' />
          </section>
          <section className='section home__last'>
            <NavbarMini />
            <div className='info__content'>
              <InfoSubHeader text='Tesla' />
              <InfoHeader text='Model Y' />
              <InfoButton text='자세히 알아보기' />
            </div>
            <Footer />
          </section>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Home

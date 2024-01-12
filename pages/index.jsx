import React from 'react';
import Layout3 from '../components/Layout/Layout3';
import HeroStyle3 from '../components/Hero/HeroStyle3';
import Head from 'next/head';
import CtaStyle3 from '../components/Cta/CtaStyle3';
import PricingSectionStyle3 from '../components/Pricing/PricingSectionStyle3';
import SectionHeadingStyle2 from '../components/SectionHeading/SectionHeadingStyle2';
import SectionHeading from '../components/SectionHeading';
import IconBoxStyle4 from '../components/IconBox/IconBoxStyle4';
import Button from '../components/Button';
import IconBoxStyle5 from '../components/IconBox/IconBoxStyle5';
import FeatureCardStyle3 from '../components/FeatureCard/FeatureCardStyle3';
import FeatureCardStyle4 from '../components/FeatureCard/FeatureCardStyle4';
import TestimonialSlider from '../components/TestimonialSlider';
import heroBanner from '../public/images/gfx/banner/b.png';
import featuredImg1 from '../public/images/gfx/process/a.jpg';
import featuredImg2 from '../public/images/gfx/process/b.jpg';
import featuredImg3 from '../public/images/gfx/process/c.jpg';
import Accordion from '../components/Accordion';

export default function HomeS3() {
  return (
    <>
  <Head>
  <title>
    Aihio.ai - AI-kirjoittaja
  </title>
</Head>
<Layout3>
  <HeroStyle3
    title="Hanki korkealaatuista tekstiä nopeasti <span className='text-gradient-primary'>tekoälyn avulla</span>"
    subTitle="Tekoälyä hyödyntävä kirjoitusassistentti, joka auttaa sinua luomaan korkealaatuista sisältöä vain muutamassa sekunnissa murto-osalla tavallisista kustannuksista!"
    bnt1Text="Rekisteröidy"
    btn1Url="/index-s3"
    btn2Text="Rekisteröidy Googlen kautta"
    btn2Url="/register"
    alertMessage="<span className='text-primary'>*100% ilmaista </span> aloittaa. Luottokorttia ei vaadita."
    thumbImg={heroBanner}
  />
  <section className="section section-0 has-shape">
    <div className="nk-shape bg-shape-blur-d start-50 bottom-0" />
    <div className="nk-shape bg-shape-blur-e mt-n12 me-n10 end-50" />
    <div className="container">
      <div className="section-content">
        <div className="row text-center g-gs justify-content-center">
          <div className="col-md-6 col-xl-4">
            <IconBoxStyle5
              variant="text-bg-primary-soft-outline"
              iconClass="speed"
              title="Kirjoita blogeja 10x nopeammin"
              subTitle="Avaa salaisuudet tehokkaaseen ja vaivattomaan blogikirjoittamiseen, muuntaen ideasi vaikuttaviksi postauksiksi murto-osassa tavallisesta ajasta."
              btnText="Kokeile Blogikirjoittajia"
              btnUrl="/"
            />
          </div>
          <div className="col-md-6 col-xl-4">
            <IconBoxStyle5
              variant="text-bg-info-soft-outline"
              iconClass="edit"
              title="Kirjoita kiinnostavia somejulkaisuja"
              subTitle="Ammenna inspiraatiota suurten ajattelijoiden viisaudesta, rakentaen polkua aitoon vuorovaikutukseen ja iloon kirjoittamisessasi."
              btnText="Sosiaalisen median vaikuttajat"
              btnUrl="/"
            />
          </div>
          <div className="col-md-6 col-xl-4">
            <IconBoxStyle5
              variant="text-bg-blue-soft-outline"
              iconClass="chat-msg"
              title="Kirjoita mukaansatempaavampia sähköposteja"
              subTitle="Vangitse lukijoiden huomio sanojen voimalla."
              btnText="Sähköpostimarkkinoijat"
              btnUrl="/"
            />
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className="section section-lg section-bottom-0 has-shape">
  <div className="nk-shape bg-shape-blur-g mt-n20p start-50" />
  <div className="nk-shape bg-shape-blur-h translate-middle-y top-50 end-50" />
  <div className="nk-shape bg-shape-blur-i mb-n30p bottom-0 start-50" />
  <div className="container">
    <SectionHeadingStyle2 title="Kuinka se toimii" variant="h1" />
    <FeatureCardStyle3
      number="01"
      title="Valitse malli"
      subtitle="Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem
      aperiam, quasi architecto beatae vitae dicta sunt
      explicabo."
      imgUrl={featuredImg1}
      svgBgUrl="/images/svgbg/1.svg"
      svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n3 me-6 z-index-n1"
    />
    <FeatureCardStyle4
      number="02"
      title="Täytä tuotetietosi"
      subtitle="Selitä mahdollisimman monilla yksityiskohdilla tekoälylle, mitä haluaisit kirjoittaa."
      featureList={[
        'At vero eos et accusamus et iusto',
        'At vero eos et accusamus et iusto',
      ]}
      imgUrl={featuredImg2}
      svgBgUrl="/images/svgbg/2.svg"
      svgBgUrlClass="position-absolute top-0 start-0 mt-n5 mt-lg-n6 mt-xl-n7 ms-2 ms-sm-3 ms-md-0 ms-lg-1 me-5 me-sm-6 me-md-2 me-lg-0 me-xl-2 z-index-n1"
    />
    <FeatureCardStyle3
      number="03"
      title="Luo tekoälyn sisältöä"
      subtitle="Erittäin koulutettu tekoälymme ymmärtää yksityiskohtasi ja luo ainutlaatuista ja ihmismäistä sisältöä sekunneissa."
      imgUrl={featuredImg3}
      svgBgUrl="/images/svgbg/3.svg"
      svgBgUrlClass="position-absolute top-0 start-0 mt-n5 ms-n5 z-index-n1"
    />
  </div>
</section>

          <section className="section section-lg section-bottom-0">
  <div className="container">
    <SectionHeadingStyle2
      title="Minkälaisia hämmästyttäviä sisältöjä luot tekoälyn avulla?"
      variant="h1"
    />
    <div className="section-content">
      <div className="row g-gs">
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-primary"
            iconClass="globe"
            title="Verkkosivun tekstit & SEO"
            subTitle="Kaipaatko inspiraatiota laskeutumissivulle? Luo otsikoita, metatageja."
            variant="h-100"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-info"
            iconClass="flag"
            title="Sosiaalinen media & mainokset"
            subTitle="Kirjoita Facebook- tai Google-mainoksia, Youtube-videoiden kuvauksia tai otsikoita."
            variant="h-100"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-purple"
            iconClass="edit"
            title="Blogien kirjoittaminen"
            subTitle="Kirjoita Facebook- tai Google-mainoksia, Youtube-videoiden kuvauksia tai otsikoita."
            variant="h-100"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-warning"
            iconClass="signal"
            title="Digitaalisen mainonnan tekstit"
            subTitle="Kirjoita luovia ja alkuperäisiä mainostekstejä sosiaalisen median kanaviin."
            variant="h-100"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-danger"
            iconClass="briefcase"
            title="Työpaikkailmoitukset"
            subTitle="Luo houkuttelevia työpaikkailmoituksia mihin tahansa tehtävään parhaiden ehdokkaiden houkuttelemiseksi"
            variant="h-100"
          />
        </div>
        <div className="col-md-6 col-xl-4">
          <IconBoxStyle4
            iconBoxBgClass="bg-success"
            iconClass="chat-msg"
            title="Taikakomento"
            subTitle="Anna pyyntösi komentona ja anna tekoälyn tehdä työ puolestasi kuin taikaiskusta."
            variant="h-100"
          />
        </div>
      </div>
    </div>
    <div className="section-actions text-center">
      <ul className="btn-list btn-list-inline g-gs">
        <li>
          <Button
            href="/usecase"
            btnText="Näytä kaikki käyttötapaukset"
            btnClass="btn btn-primary btn-lg rounded-pill"
            rightIconClass="arrow-long-right"
          />
        </li>
      </ul>
    </div>
  </div>
</section>
<section className="section section-bottom-0">
  <div className="container">
    <SectionHeading title="Usein Kysytyt Kysymykset" />
    <Accordion plusMinus />
  </div>
</section>
<section className="section section-lg section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-f me-12 mt-10p end-50" />
          <div className="container">
            <SectionHeadingStyle2
              title='CopyGen helps <span className="text-gradient-primary">76,000+</span> people like you create better content 10X faster.'
              variant="h1"
              containerWidthClass="col-xl-11 col-xxl-10"
              btnUrl="/login"
              btnText="Start for free"
              btnClass="btn btn-lg rounded-pill btn-primary"
            />

          </div>
        </section>
      </Layout3>
    </>
  );
}

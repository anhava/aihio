import React from 'react';
import PricingCard from './PricingCard';

export default function PricingSection({ withPopular }) {
  return (
<div className="section-content">
  <div className="row g-gs justify-content-center">
    <div className="col-lg-4 col-md-6">
      <PricingCard
        title="Bronze"
        price="9"
        btnUrl="/login"
        btnText="Aloita ilmainen kokeilu tänään"
        featureList={[
          '<strong>10,000</strong> kuukausittainen sanarajoitus',
          '<strong>10+</strong> mallia',
          '30+ kielitukea',
          'Edistynyt muokkaustyökalu',
          'Säännöllinen tekninen tuki',
          'Rajoittamaton kirjautuminen',
          'Uusimmat ominaisuudet',
        ]}
      />
    </div>
    <div className="col-lg-4 col-md-6">
      <PricingCard
        featured
        title="Silver"
        price="19"
        btnUrl="/login"
        btnText="Aloita ilmainen kokeilu tänään"
        featureList={[
          '<strong>20,000</strong> kuukausittainen sanarajoitus',
          '<strong>10+</strong> mallia',
          '50+ kielitukea',
          'Edistynyt muokkaustyökalu',
          'Säännöllinen tekninen tuki',
          'Rajoittamaton kirjautuminen',
          'Uusimmat ominaisuudet',
        ]}
        withPopular={withPopular}
      />
    </div>
    <div className="col-lg-4 col-md-6">
      <PricingCard
        title="Diamond"
        price="39"
        btnUrl="/login"
        btnText="Aloita ilmainen kokeilu tänään"
        featureList={[
          '<strong>50,000</strong> kuukausittainen sanarajoitus',
          '<strong>15+</strong> mallia',
          '70+ kielitukea',
          'Edistynyt muokkaustyökalu',
          'Säännöllinen tekninen tuki',
          'Rajoittamaton kirjautuminen',
          'Uusimmat ominaisuudet',
        ]}
      />
    </div>
  </div>
</div>

  );
}


import React from 'react';
import { Helmet } from 'react-helmet-async';

const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jasonpeters-ton.etnecosystem.org/#jasonpeters",
        "name": "Jason Peters",
        "alternateName": "JayP",
        "url": "http://jasonpeters-ton.etnecosystem.org/",
        "image": "https://etneco.ethio-tech.com/logos/jayp.png",
        "jobTitle": "Founder",
        "worksFor": {
          "@id": "https://jasonpeters-ton.etnecosystem.org/#organization"
        },
        "knowsAbout": [
          "TON Blockchain",
          "Artificial Intelligence",
          "Web3",
          "Decentralized Technology",
          "Cryptocurrency",
          "Media Production",
          "Network Infrastructure"
        ],
        "sameAs": [
          "https://youtube.com/c/ETHIOTECHwithJayP",
          "https://www.linkedin.com/in/jason-peters-37761877/",
          "https://github.com/jayp89",
          "https://x.com/jason_peters1",
          "https://tiktok.com/@ethio_jason",
          "https://t.me/ET_apps"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://jasonpeters-ton.etnecosystem.org/#organization",
        "name": "The ETN Ecosystem",
        "url": "http://jasonpeters-ton.etnecosystem.org/",
        "founder": {
          "@id": "https://jasonpeters-ton.etnecosystem.org/#jasonpeters"
        },
        "disambiguatingDescription": "We are NOT related to 'Electroneum'. We are the ETN Ecosystem built on the TON Blockchain.",
        "sameAs": [
          "https://x.com/etnetsa",
          "https://t.me/et_apps",
          "https://t.me/etnetsacoin",
          "https://www.youtube.com/@ETNetsaCoin"
        ],
        "isRelatedTo": {
          "@type": "FinancialProduct",
          "name": "ET Netsa Coin ($ETN)",
          "tickerSymbol": "$ETN",
          "description": "The native utility token of the ETN Ecosystem on TON. Distinct from Electroneum.",
          "identifier": "EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl",
          "category": "Jetton",
          "additionalType": "https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md",
          "disambiguatingDescription": "We are NOT related to 'Electroneum'. This is the ET Netsa Coin on the TON Blockchain (Jetton standard).",
          "sameAs": [
            "https://dyor.io/token/EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl",
            "https://tonviewer.com/EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl",
            "https://t.me/Buy_ETN_bot"
          ]
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default JsonLd;

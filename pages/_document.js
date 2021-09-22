import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#48b316' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            name='description'
            content='Promo Spider - As melhores ofertas'
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='twitter:card' value='summary'></meta>
          <meta
            name='twitter:image'
            content='http://spider.promo/link-img.png'
          ></meta>

          <meta
            property='og:title'
            content='Promo Spider - As melhores ofertas'
          />
          <meta property='og:type' content='article' />
          <meta property='og:url' content='http://spider.promo/' />
          <meta
            property='og:image'
            content='http://spider.promo/link-img.png'
          />
          <meta
            property='og:description'
            content='Promo Spider - As melhores ofertas'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

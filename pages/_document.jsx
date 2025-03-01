import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '';
    
    return (
      <Html>
        <Head>
          <style>{`
            @font-face {
              font-family: "Iceland";
              src: url('${basePath}/Portfolio/fonts/Iceland-Regular.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
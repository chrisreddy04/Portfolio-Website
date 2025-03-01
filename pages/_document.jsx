import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '';
    
    return (
      <Html>
        <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Iceland&display=swap&weight=700"
            rel="stylesheet"
          />
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
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Kilany - Mo</title>
        <link
          rel='icon'
          type='image/x-icon'
          href='/images/portfolio-icon.png'
        ></link>
      </Head>
      <body className='dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

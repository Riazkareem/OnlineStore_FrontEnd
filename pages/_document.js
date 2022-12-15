import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
function Mydocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Online Store" />
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
        /> */}

        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Mydocument;

import "@/styles/globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
const desiredChainid = ChainId.Goerli;
export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainid}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

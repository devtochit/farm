import "./global.css";
import SiteLayout from "../components/layouts/SiteLayout"
import {useEffect,useState} from 'react'
function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
return(
  // <SiteLayout>
<Component {...pageProps} />
//  </SiteLayout>
)}
}

export default MyApp;

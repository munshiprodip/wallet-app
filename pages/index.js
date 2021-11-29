import { useState } from 'react';
import Head from 'next/head'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from '../styles/Home.module.css';
import Image from 'next/image';
import PrivacyLogo from '../public/assets/wallet.png'
import WalletPage from './wallet';
function Home() {

  const [showWalletPage, setShowWalletPage] = useState(false)
  const [check, setCheck] = useState(false);

  const handleCheckBox = () => {
    setCheck(!check);
  }

  const handleWalletPage = () => {
    setShowWalletPage(!showWalletPage)
  }

  return (
    <>
     <Head>
        <title>Wallet-Connect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Polkadot Wallet is a mobile wallet company for Ethereum and ERC20/ERC223 tokens. It provides provide a fully security audited system that makes it simple to store your cryptocurrency. Polkadot applications, designed for Android." />
        {/* meta description for SEO */}
      </Head>
    <section>      
      {showWalletPage ? <WalletPage /> : <div className="container"><div className={classes.privacyHeader}>
        <Image src={PrivacyLogo} alt="privacy logo" width="50" height="50" />
        <h3>Privacy Policy</h3>
      </div>
        <div className={classes.policyContents}>
          <div className={classes.about}>
            <h3>About us</h3>
            <p> Polkadot Wallet is a mobile wallet company for Ethereum and ERC20/ERC223 tokens. It provides provide a fully security audited system that makes it simple to store your cryptocurrency. Polkadot applications, designed for Android.</p>
          </div>
          <div className={classes.acceptance}>
            <h3>Acceptance of Policy</h3>
            <p>Your privacy is important to us. At Polkadot Wallet, we follow a few fundamental principles: We don’t ask you for personally identifiable information (defined below).</p>
          </div>
          <div className={classes.contactUs}>
            <h3>Contact US</h3>
            <p>We’d be happy to answer them. Shoot us an email or send us a note: Email: support@PolkadotWallet.com Mailing Address: DApps Platform, Inc. 548 Market St PMB 96630 San Francisco, California 94104-5401 US Thanks for reading our Privacy Policy!</p>
          </div>
          <div className="contact-us">
            <p><b>Last Update :</b> May 2021</p>
            <input onClick={handleCheckBox} type="checkbox" id="agree" name="agree" value="agree" />
            <label style={{paddingLeft:"10px"}} className="checkLabel" htmlFor="agree"> I agree with terms of service</label><br />
          </div>
          <button onClick={() => handleWalletPage(true)} className={classes.continueBtn} disabled={!check} >Continue</button>
        </div></div>}

    </section>
    </>
  )
}
export default Home;
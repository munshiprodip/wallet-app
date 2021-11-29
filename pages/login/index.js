
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from '../../styles/LoginPage.module.css';
import Image from 'next/image';
import Locker from '../../public/assets/lock.png';
import Dashboard from '../../public/assets/dashboard.png';
import Arrow from '../../public/assets/arrow.png';
import Google from '../../public/assets/google.png';
import { useState } from 'react';
import Recovery from './../recovery/index';

function LoginPage({showLoginPage}) {

  const [showWalletPage, setShowWalletPage] = useState(false);

  const walletHandler = () => {
    setShowWalletPage(!showWalletPage)
  };


  return (
    <section>
      {
        showWalletPage ? <Recovery walletHandler={walletHandler} /> : <><div className="container pt-2">
          <div onClick={showLoginPage} className={classes.topContentBox}>
            <span className={classes.arrowIcon}> <Image width="20" height="20" src={Arrow} alt="arrow image" /> </span>
            <h3>Login To Your Wallet</h3>
            <p>Select Your Preffered Method</p>
          </div>
          <div className={classes.logInBtnBox}>
            <button onClick={walletHandler} className={classes.lockerBtn}> <Image src={Locker} alt="Button img" width="15" height="15" /> Import Seed Phrase </button>
            <button onClick={walletHandler} className={classes.dashboardBtn}> <Image src={Dashboard} alt="Button img" width="15" height="15" /> Safulet </button>
          </div>
          <h4 className={classes.orHr}>or</h4>
          <div className={classes.googleButton}>
            <p>Contuinue with tkey via :</p>
            <button onClick={walletHandler} className={classes.googleBtn}> <Image src={Google} alt="Button img" width="20" height="20" /> Google </button>
          </div>
        </div></>
      }
    </section>
  )
}





export default LoginPage;


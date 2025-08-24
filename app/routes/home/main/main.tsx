import React from 'react'
import "../../../styling/pages/home/main.scss"
import { formatNumber } from '~/utils/formatter';

function Main() {
  return (
    <div className='main-container'>
      <div className='main-inner'>
        <div className='sep-l'></div>
        <div className='title-wrapper'>
          <h1 className='vn-bold txt-xxl'>🇩🇪 Handbook</h1>
          <p className='vn-reg txt-m'>This handbook provides the relevant information related to the expenses in Germany.
            It serves as a personal guidebook as I am going to study abroad there for 2 years.
            It shall reflect the estimated expenses correctly. Let's go!
          </p>
        </div>
        <div className='sep-l'></div>
        <div className='form-section'>
          <div className='title-wrapper'>
            <h2 className='vn-bold txt-xl'>Expenses</h2>
            <p className='vn-reg txt-m'>The followings are the speculated expenses. More would be seen once I arrive at Germany.
              With that said, the current types of expenses are used to produce the calculate the estimated expense and will be updated later.
            </p>
          </div>
          <div className='sep-m'></div>
          <div className='form-container'>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Rent & Insurance</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Rent</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(700)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Insurance</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(140)}></input>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>University</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Semester Fee</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(85)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Study Materials</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Transportation</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>U-Bahn</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>S-Bahn</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Bus</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Food & Groceries</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Groceries</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Food</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Phone & Internet</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>SIM card</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Wi-fi</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Subscriptions</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Youtube Premium</label>
                  <input type='number/text' className='vn-reg' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Duolingo</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Spotify</label>
                  <input type='number/text' className='vn-reg txt-m' value={formatNumber(0)}></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='sep-l'></div>
      </div>
  )
}

export default Main;
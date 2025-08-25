import { useState, useRef, useEffect } from 'react'
import "../../../styling/pages/home/main.scss"
import { formatNumber, getVietnamTime } from '~/utils/utils';
import type { Expense } from '../../../models/models';
import { LuArrowLeftRight } from "react-icons/lu";

function Main() {
  const [form, setForm] = useState<Expense>({
    rent: "700",
    insurance: "140",
    semester_fee: "14.20",
    study_matierals: "0",
    u_bahn: "0",
    s_bahn: "0",
    bus: "0",
    food: "0",
    groceries: "0",
    youtube: "7.99",
    spotify: "5.99",
    duolingo: "5.99",
    wifi: "0",
    sim: "0"
  })

  const rate = 30777

  const [monthly, setMonthly] = useState<number>(0)
  const [annual, setAnnual] = useState<number>(0)

  const round2 = (num: number) => Math.round(num * 100) / 100;

  useEffect(() => {
    let sum = 0;
    for (const expense in form) {
      const key = expense as keyof Expense;
      const price = parseFloat(form[key])
      sum += price;
    }

    setMonthly(round2(sum));
    setAnnual(round2(sum * 12));
  }, [form])

  return (
    <div className='main-container'>
      <div className='total-panel'>
        <div className='tab'>
          <h3 className='vn-bold txt-s'>🇪🇺 EUR</h3>
          <div className='result'>
            <span className='vn-reg txt-s'>€ {formatNumber(monthly)}/mon</span>
          </div>
          <div className='result'>
            <span className='vn-reg txt-s'>€ {formatNumber(annual)}/yr</span>
          </div>
        </div>
        <span><LuArrowLeftRight className='icon txt-xl'></LuArrowLeftRight></span>
        <div className='tab'>
          <h3 className='vn-bold txt-s'>🇻🇳 VND</h3>
          <div className='result'>
            <span className='vn-reg txt-s'>€ {formatNumber(round2(monthly * rate))}/mon</span>
          </div>
          <div className='result'>
            <span className='vn-reg txt-s'>€ {formatNumber(round2(annual * rate))}/yr</span>
          </div>
        </div>
      </div>
      <div className='main-inner'>
        <div className='sep-l'></div>
        <div className='title-wrapper'>
          <h1 className='vn-bold txt-xxl'>🇩🇪 Handbook</h1>
          <p className='vn-reg txt-m'>This handbook provides the relevant information related to Germany.
            It serves as a personal guidebook as I am going to study abroad there for 2 years.
            It shall reflect the estimated expenses correctly. Let's go!
          </p>
        </div>
        <div className='sep-l'></div>
        <div className='phrase-section'>
          <div className='title-wrapper'>
            <h1 className='vn-bold txt-xl'>Phrase of the Day</h1>
            <p className='vn-reg txt-m'>A random German phrase of the day to help me improving the language. Try to enter the right meaning to extend the streak!
            </p>
            <blockquote>
              <p className='detusch vn-bold txt-l'>„Auf Wiedersehen!"</p>
              <input id='phrase' type='text' value={""} className='englicsh vn-reg txt-s'></input>
              <button><span className='vn-bold txt-m'>Check</span></button>
            </blockquote>
          </div>
        </div>
        <div className='sep-l'></div>
        <div className='conversion-section'>
          <div className='title-wrapper'>
            <h1 className='vn-bold txt-xl'>Exchange Rate</h1>
            <p className='vn-reg txt-m'>Below is the current exchange rate from EUR to VND. This rate would be updated continuously, however,
              it is always changing due to the market fluctations.
            </p>
          </div>
          <div className='conversion-table'>
            <div className='header'>
              <h3 className='vn-bold txt-xl'>Current Rate</h3>
              <span className='date vn-reg txt-m'>{getVietnamTime()}</span>
            </div>
            <div className='conversion-inner'>
              <div className='rate'>
                <span className='vn-bold txt-l'>1 EUR</span>
              </div>
              <span className='sign vn-reg txt-l'>≈</span>
              <div className='rate'>
                <span className='vn-bold txt-l'>{formatNumber(rate)} VND</span>
              </div>
            </div>
          </div>
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
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                      value={form.rent === "0" ? "" : formatNumber(form.rent)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          rent: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Insurance</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='insurance'
                      value={form.insurance === "0" ? "" : formatNumber(form.insurance)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          insurance: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>University</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Semester Fee</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='sem_fee'
                      value={form.semester_fee === "0" ? "" : formatNumber(form.semester_fee)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          semester_fee: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Study Materials</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='materials'
                      value={form.study_matierals === "0" ? "" : formatNumber(form.study_matierals)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          study_matierals: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Transportation</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>U-Bahn</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.u_bahn === "0" ? "" : formatNumber(form.u_bahn)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          u_bahn: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>S-Bahn</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.s_bahn === "0" ? "" : formatNumber(form.s_bahn)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          s_bahn: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Bus</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.bus === "0" ? "" : formatNumber(form.bus)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          bus: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Food & Groceries</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Groceries</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.groceries === "0" ? "" : formatNumber(form.groceries)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          groceries: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Food</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.food === "0" ? "" : formatNumber(form.food)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          food: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Phone & Internet</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>SIM card</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.sim === "0" ? "" : formatNumber(form.sim)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          sim: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Wi-fi</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.wifi === "0" ? "" : formatNumber(form.wifi)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          wifi: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
            <div className='section'>
              <h3 className='vn-bold txt-l'>Subscriptions</h3>
              <div className='sep-s'></div>
              <div className='input-wrapper'>
                <div className='row'>
                  <label className='vn-reg txt-m'>Youtube Premium</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.youtube === "0" ? "" : formatNumber(form.youtube)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          youtube: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Duolingo</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.duolingo === "0" ? "" : formatNumber(form.duolingo)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          duolingo: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
                <div className='row'>
                  <label className='vn-reg txt-m'>Spotify</label>
                  <span className='price vn-reg txt-m'>
                    €
                    <input type='number/text' className='vn-reg' id='rent'
                    value={form.spotify === "0" ? "" : formatNumber(form.spotify)}
                      onChange={(e) =>
                        setForm(prev => ({
                          ...prev,
                          spotify: e.target.value !== "" ? e.target.value : "0"})
                      )}></input>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sep-l'></div>
        </div>
        <div className='sep-l'></div>
        <div className='sep-l'></div>
      </div>
  )
}

export default Main;
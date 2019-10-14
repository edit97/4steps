import React from 'react';

import image_zin from './assets/img/zinanshan.png';
import image_hh from './assets/img/hh.png';
import image_4 from './assets/img/4.png';
import image_0 from './assets/img/5.png';
import image_1 from './assets/img/6.png';
import image_2 from './assets/img/7.png';
import image_3 from './assets/img/8.png';
import image_5 from './assets/img/9.png';
import image_6 from './assets/img/10.png';
import image_7 from './assets/img/11.png';


import './index.scss';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <div className="header-title">
          <img className="header-img" src={image_zin} />
          <div>
            <p>Հայաստանի Հանրապետության Արդարադատության Նախարարություն</p>
            <h2>ՔՐԵԱԿԱՏԱՐՈՂԱԿԱՆ ԾԱՌԱՅՈՒԹՈՒՆ</h2>
          </div>
          <img className="header-img" src={image_hh} />
        </div>
        <nav>
          <ul>
            <li><a href='#'>Գլխավոր</a></li>
            <li><a href='#'>Նորություններ</a></li>
            <li><a href='#'>Ծառայություններ</a></li>
            <li><a href='#'>Հիﬓարկներ</a></li>
            <li><a href='#'>Կապ</a></li>
            <li><i className="fa fa-search"></i></li>
            <li><a href='#'>ՀԱՅ</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <section className="slider-section">
          <div className="slider">
            <div className="img">
              <img src={image_3} alt=""/>
              <p>Արդարադատության նախարարն այցելել է Նուբարաշեն» ՔԿՀ</p>
            </div>
            <div className="img">
              <img src={image_6} alt=""/>
              <p>Վարչապետի պաշտոնակատարն ընդունել է ԱՊՀ մասնակից …</p>
            </div>
          </div>
          <div className="arrows">
            <button><i className="fa fa-angle-left"></i></button>
            <button><i className="fa fa-angle-right"></i></button>
          </div>
        </section>
        <section className="about-section">
          <div className="about">
            <div className="about-header">
              <img src={image_4} />
                <div className="about-header-inner">
                  <h3>ԱՐԹՈՒՐ ՍՏԵՓԱՆԻ ԳՈՅՈՒՆՅԱՆ</h3>
                  <p>ՀՀ ԱՆ Քրեակատարողական ծառայության պետ,
                    արդարադատության գեներալ-մայոր</p>
                  <button className="see-more">Կարդալ ավելին &#8594;</button>
                </div>
            </div>
            <div>
              <p className="about-title">Հարգելի՛ հայրենակիցներ, ողջունում եմ ձեզ քրեակատարողական
                ծառայության պաշտոնական կայքում:
              </p>
              <p>
                Քրեակատարողական ծառայությունը պատժի նպատակների կատարուﬓ ապահովող կարևորագույն պետական
                կառույց է, որը գործելով Հայաստանի Հանրապետության արդարադատության նախարարության իրավասությանը
                վերապահված գործունեության շրջանակներում ՝ ապահովում է ոլորտային պետական քաղաքականության
                իրականացումը։
                Կայքէջը նախատեսված է ծառայելու հանրության լայն շերտերին՝ նրանց համար ավելի թափանցիկ և հասանելի
                դարձնելով քրեակատարողական գործունեության առանձնահատկությունները, նպաստելու հասարակության
                հնարավոր ներգրավվածությանը՝ դրանք առավել արդյունավետ և արդի պահանջներին համահունչ դարձնելու համար,
                ինչպես նաև լուսաբանելու և ﬔկնաբանելու ծրագրերը, որոնք ուղղված են ճաղերից այն կողմ գտնվող անձանց
                վերասոցիալականացմանը, հասարակության հետ նրանց կառուցողական համագործակցությանը, կրթմանն ու
                հետագայում հանրության համար լիարժեք անհատ ներկայանալուն և ինտեգրվելուն։
                Քրեակատարողական ծառայության պաշտոնական կայքէջը հանդես է գալու որպես քրեակատարողական ոլորտում
                առկա խնդիրների ու դրանց լուծմանը միտված ուղիների վերհանման նպատակային հարթակ:
              </p>
            </div>
          </div>
          <div>
            <div className="accordion">
              <button className="accordion-line">Իրավաբանական օգնություն ազատազրկվածների հարազատներին</button>
              <button className="accordion-line">Օրենսդրություն</button>
              <button className="accordion-line">
                ԱՊՀ մասնակից պետությունների
                քրեակատարողական ծառայությունների
                ղեկավարների խորհուրդ
              </button>
              <button className="accordion-line">Սոցիալական, հոգեբանական և իրավական
                խորհրդատվություն
              </button>
              <button className="accordion-line">Դատապարտյալների զբաղվածություն</button>
              <button className="accordion-line">Վիճակագրություն</button>
              <button className="accordion-line">Հոգևոր ծառայություն</button>
              <button className="accordion-btn">Թափուր աշխատատեղեր &#8594;</button>
            </div>
          </div>
        </section>
        <section className="news-section">
          <div>
            <h2>Նորություններ</h2>
            <p>Բոլոր նորությունները &#8594;</p>
          </div>
          <div className="news-section-content">
            {
              [image_0,image_1,image_2,image_3].map((item, index) => {
                return (
                    <div className="news-card" key={index}>
                      <img src={item} alt=""/>
                      <div className="card-content">
                        <button>ՊԱՇՏՈՆԱԿԱՆ</button>
                        <h4>Վարչապետի պաշտոնակատարն ընդունել …</h4>
                        <p>2014թ. սեպտեմբերի 26-ին, ժամը 14:15-ի
                          սահմաններում, ՀՀ ԱՆ «Սևան» քրեակատարողական հիﬓարկի
                        </p>
                        <div className="card-footer">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          <small>Օգոստոս 21, 2019</small>
                          <i className="fa fa-angle-right footer-angel"></i>
                        </div>
                      </div>
                </div>
                )
              })
            }
          </div>
        </section>
        <section className="video-section">
          <div>
            <h2>Տեսադարան</h2>
            <p>Բոլոր նորությունները &#8594;</p>
          </div>
          <div className="content">
            {
              [image_5,image_6,image_7].map((item, index) => {
                return (
                    <div className="video-card" key={index}>
                      <div className="img">
                        <img src={item} alt=""/>
                        <div className="chip">ՕՊԵՐԱՏԻՎ</div>
                      </div>
                      <div className="card-text">
                        ՀՀ ԱՆ քրեակատարողական
                        ծառայության պետ Ա. Մխոյանը ՀՀ
                      </div>
                    </div>
                )
              })
            }
          </div>
        </section>
        <section className="question-section">
          <div>
            <p className="question-title">Եթե ունեք հարցեր, </p>
            <p className="question-text">Ցանկանում եք մանրամասն տեղեկություններ ստանալ ﬔր ծառայությունների մասին</p>
          </div>
          <button>Հետադարձ կապ</button>
        </section>
      </div>
      <footer>
        <div className="top">
          <div className="img">
            <img src={image_hh} alt=""/>
          </div>
          <ul>
            <li>Գլխավոր</li>
            <li>Նորություններ</li>
            <li>Ծառայություն</li>
            <li>Հիﬓարկներ</li>
          </ul>
          <ul>
            <li>Նորություններ</li>
            <li>Պաշտոնական</li>
            <li>Օպերատիվ</li>
            <li>Ժամանցային</li>
          </ul>
          <ul>
            <li>Հետադարձ կապ</li>
            <li>Թեժ գիծ՝ 010 44 22 73</li>
            <li>Ձայնային պորտալ՝ 060 74 33 33</li>
            <li>Հասցե՝ Արշակունյաց պողոտա 63, Երևան</li>
          </ul>
          <div className="social">
            <div><i className="fa fa-facebook-f"></i></div>
            <div><i className="fa fa-youtube"></i></div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">ՀՀ Արդարադատության Նախարարություն Քրեակատարողական Ծառայություն
            © 2014-2019 Հեղինակային իրավունքները պաշտպանված են
          </div>
          <div className="right">Developed by STUDIO ONE</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import StarfieldAnimation from "react-starfield-animation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class App extends Component {
  componentDidMount() {
    //An array of assets
    let scripts = [
      {
        src: "assets/js/scrollreveal.min.js",
      },
      { src: "assets/js/swiper-bundle.min.js" },
      { src: "assets/js/mixitup.min.js" },
      { src: "assets/js/main.js" },
    ];
    //Append the script element on each iteration
    scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  render() {
    return (
      <>
        <StarfieldAnimation
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <Header />
        <main className="main">
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <span className="home__greeting">Hello, I'm</span>
                <h1 className="home__name">Thinh</h1>
                <h3 className="home__education">Fullstack Developer</h3>

                <div className="home__buttons">
                  <a
                    download=""
                    href="assets/pdf/thinh.pdf"
                    className="button button--ghost"
                  >
                    Download CV
                  </a>
                  <a href="#about" className="button">
                    About me
                  </a>
                </div>
              </div>
              <div className="home__handle">
                <img src="assets/img/avatar.png" alt="" className="home__img" />
              </div>

              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/hoangthinhdotdev"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
                <a
                  href="https://github.com/nhtdev1"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://twitter.com/nht_dev1"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>

              <a href="#about" className="home__scroll">
                <i className="bx bx-mouse home__scroll-icon"></i>
                <span className="home__scroll-name">Scroll Down</span>
              </a>
            </div>
          </section>

          <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About me</h2>

            <div className="about__container container grid">
              <img src="assets/img/about.png" alt="" className="about__img" />
              <div className="about__data">
                <div className="about__info">
                  <div className="about__box">
                    <i className="bx bx-award about__icon"></i>
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">2 Years Working</span>
                  </div>

                  <div className="about__box">
                    <i className="bx bx-briefcase-alt about__icon"></i>
                    <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">10 + Projects</span>
                  </div>

                  <div className="about__box">
                    <i className="bx bx-support about__icon"></i>
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">Online 24/7</span>
                  </div>
                </div>

                <p className="about__description">
                  Fullstack Developer, I create app with Java/Kotlin Android,
                  Flutter, NodeJS, Express. I have years of experience and many
                  clients are happy with the projects carried out.
                </p>

                <a href="#contact" className="button">
                  Contact
                </a>
              </div>
            </div>
          </section>

          <section className="skills section" id="skills">
            <span className="section__subtitle">My abilities</span>
            <h2 className="section__title">My Experience</h2>

            <div className="skills__container container grid">
              <div className="skills__content">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Kotlin</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Dart</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">ReactJs</h3>
                        <span className="skills__level">Immediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Android</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Jar, aar SDK</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Flutter</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Provider,Bloc,Get</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__content">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">PM2,Yarn</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">AWS,Azure,Heroku</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">Docker,Kubernetes</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services section">
            <span className="section__subtitle">My Service</span>
            <h2 className="section__title">What I Offer</h2>

            <div className="services__container container grid">
              <div className="services__card">
                <h3 className="services__title">
                  Product <br /> Developer
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-chevron-right services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">Product Developer</h3>

                    <p className="services__modal-description">
                      Service with more than 2 years of experience. Providing
                      quality work to clients and companies
                    </p>

                    <ul className="services__modal-list">
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Develop android app with Java/Kotlin Android
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Develop cross-platform app with Flutter
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Develop website with ReactJs
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Build backend ecosystem with NodeJs, Express
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="services__card">
                <h3 className="services__title">
                  DevOps <br /> Engineer
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-chevron-right services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">DevOps Engineer</h3>

                    <p className="services__modal-description">
                      Service with more than 2 years of experience. Providing
                      quality work to clients and companies
                    </p>

                    <ul className="services__modal-list">
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Experience with App Store deployment
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Experience with Google Play Store deployment
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Experience with Docker, Docker Compose, Docker Swarm,
                          Kubernetes
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Experience with AWS, Azure, Google Cloud, Digital
                          Ocean, Heroku
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="services__card">
                <h3 className="services__title">
                  Business <br /> Analyst
                </h3>
                <span className="services__button">
                  See more{" "}
                  <i className="bx bx-chevron-right services__icon"></i>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close"></i>
                    <h3 className="services__modal-title">Business Analyst</h3>

                    <p className="services__modal-description">
                      Service with more than 2 years of experience. Providing
                      quality work to clients and companies
                    </p>

                    <ul className="services__modal-list">
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Determine requirements
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Design new business models
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Running analysis projects
                        </p>
                      </li>
                      <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="servicaes__modal-info">
                          Project Management
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
              <span className="work__item active-work" data-filter="all">
                All
              </span>
              <span className="work__item" data-filter=".web">
                App
              </span>
              <span className="work__item" data-filter=".movil">
                Web
              </span>
              <span className="work__item" data-filter=".design">
                Library
              </span>
            </div>

            <div className="work__container container grid">
              <div className="work__card mix web">
                <img src="assets/img/utes.png" alt="" className="work__img" />
                <h3 className="work__title">UTE Share</h3>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hcmute.utes"
                  className="work__button"
                >
                  See <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix movil">
                <img src="assets/img/cv.png" alt="" className="work__img" />
                <h3 className="work__title">Web Portfolio</h3>
                <a href="https://www.hoangthinh.dev/" className="work__button">
                  See <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>

              <div className="work__card mix design">
                <img src="assets/img/ear.png" alt="" className="work__img" />
                <h3 className="work__title">Ear</h3>
                <a href="https://pub.dev/packages/ear" className="work__button">
                  See <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>
            </div>
          </section>

          <section className="testimonial section">
            <span className="section__subtitle">My Clients say</span>
            <h2 className="section__title">Testimonial</h2>

            <div className="testimonial__container container swiper">
              <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                  <img
                    src="assets/img/luuvanquan.jpg"
                    alt=""
                    className="testimonial__img"
                  />
                  <h3 className="testimonial__name">
                    Luu Van Quan
                    <br />
                    <span class="about__subtitle">PM at Gameloft</span>
                  </h3>
                  <p className="testimonial__description">
                    A really good job, all aspects of the project were followed
                    step by step and with good results
                  </p>
                </div>

                <div className="testimonial__card swiper-slide">
                  <img
                    src="assets/img/huynhnhan.png"
                    alt=""
                    className="testimonial__img"
                  />
                  <h3 className="testimonial__name">
                    Huynh Nhan
                    <br />
                    <span class="about__subtitle">
                      Solution Architecture at QTSoftware
                    </span>
                  </h3>
                  <p className="testimonial__description">
                    Your technical abilities are at architect-level and you
                    repeatedly plunged headfirst to solve technical challenges
                  </p>
                </div>

                <div className="testimonial__card swiper-slide">
                  <img
                    src="assets/img/felix.jpeg"
                    alt=""
                    className="testimonial__img"
                  />
                  <h3 className="testimonial__name">
                    Felix Angelov
                    <br />
                    <span class="about__subtitle">Founder of VGVentures</span>
                  </h3>

                  <p className="testimonial__description">
                    Thank you for your contributions to making the Bloc library
                    more and more popular in the Flutter community
                  </p>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </section>

          <section className="contact section" id="contact">
            <span className="section__subtitle">Get in touch</span>
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container grid">
              <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                  <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">
                      nht.studio.vn@gmail.com
                    </span>
                    <a
                      href="mailto:nht.studio.vn@gmail.com"
                      target="_blank"
                      className="contact__button"
                    >
                      Write me{" "}
                      <i className="bx bx-right-arrow-alt contact__card-icon"></i>
                    </a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-skype contact__card-icon"></i>
                    <h3 className="contact__card-title">Skype</h3>
                    <span className="contact__card-data">live:blv.tu98</span>
                    <a
                      href="skype:0988419846?chat"
                      target="_blank"
                      className="contact__button"
                    >
                      Write me{" "}
                      <i className="bx bx-right-arrow-alt contact__card-icon"></i>
                    </a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-discord-alt contact__card-icon"></i>
                    <h3 className="contact__card-title">Discord</h3>
                    <span className="contact__card-data">
                      nht.dev@icloud.com
                    </span>
                    <a href="" target="_blank" className="contact__button">
                      Write me{" "}
                      <i className="bx bx-right-arrow-alt contact__card-icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
                <form action="" className="contact__form">
                  <div className="contact__form-div">
                    <label for="" className="contact__form-tag">
                      Names
                    </label>
                    <input
                      type="text"
                      placeholder="Insert your name"
                      className="contact__form-input"
                    />
                  </div>

                  <div className="contact__form-div">
                    <label for="" className="contact__form-tag">
                      Mail
                    </label>
                    <input
                      type="email"
                      placeholder="Insert your email"
                      className="contact__form-input"
                    />
                  </div>

                  <div className="contact__form-div contact__form-area">
                    <label for="" className="contact__form-tag">
                      Project
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Write your project"
                      className="contact__form-input"
                    ></textarea>
                  </div>

                  <button className="button">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

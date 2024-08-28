import React from "react";
import { courses } from "../../data/courses";
import Card from "../../Components/Card";
import "../../App.css";
import { Button } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoryCard from "../../Components/StoryCard/StoryCard";
import { stories } from "../../data/stories";
import Header from "../../Components/Header/Header";
function Home() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
  };
  return (
    <main>
      <section className="custom-section">
        <div className="">
          <img src="shape-dots.svg" alt="shape" className="w-32 h-auto" />
        </div>
        <div className="">
          <img src="kesik-yan-cizgi.svg" alt="shape" className="w-32 h-auto" />
        </div>
        <div className="content-container">
          <Header />
        </div>
      </section>
      <section className="container-card">
        <div className="container-cardItem">
          {courses.slice(0, 3).map((course) => (
            <Card
              key={course.id}
              title={course.title}
              image={course.image}
              preinformation={course.preinformation}
              date={course.date}
              buttonText="Başvur"
            />
          ))}
        </div>
        <Button>Tüm Etkinlikleri Gör</Button>
      </section>

      <section className="why-techcareer">
        <h2>Neden Techcareer.net?</h2>
        <div className="why-techcareer-content">
          <div className="why-techcareer-item">
            <img
              src="/why-tcn-icon1.svg"
              alt="icon"
              className="why-techcareer-icon"
            />
            <h3>Ücretsiz etkinliklere katıl</h3>
            <p>
              Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken
              tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile
              başlayacaksın.
            </p>
          </div>
          <div className="why-techcareer-item">
            <img
              src="/why-tcn-icon2.svg"
              alt="icon"
              className="why-techcareer-icon"
            />
            <h3>Kendini kanıtla</h3>
            <p>
              Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak
              hem becerilerini geliştirecek hem de ödül kazanma fırsatı
              yakalayacaksın.
            </p>
          </div>
          <div className="why-techcareer-item">
            <img
              src="/why-tcn-icon3.svg"
              alt="icon"
              className="why-techcareer-icon"
            />
            <h3>İş fırsatı yakala</h3>
            <p>
              Sektöründe lider teknoloji şirketleriyle tanışacak ve iş
              fırsatları yakalayacaksın.
            </p>
          </div>
        </div>
      </section>

      <section className="career-guide">
        <div className="career-guide-content">
          <h2 className="career-guide-heading">Kariyer Rehberi’yle Geliş</h2>
          <h4 className="career-guide-subheading">
            Yeni teknoloji kariyerini seçmeye hazır mısın?
          </h4>
          <p>
            Teknoloji alanında kariyer yapmak istiyor ancak hangi pozisyonu
            seçeceğini veya seçtiğin pozisyonda hangi adımlardan geçmen
            gerektiğini bilmiyorsan, Kariyer Rehberi ile en doğru yerdesin!
          </p>
          <button>Hemen İncele</button>
        </div>
        <img
          src="/cta-bg-desktop.svg"
          alt="career-guide"
          className="career-guide-image"
        />
      </section>
      <div className="storycardSection">
        <h2>Bizi Katılımcılarımızdan Dinle</h2>
        <div className="cardSectionStory">
          <Slider {...settings}>
            {stories.map((story) => {
              return (
                <StoryCard
                  key={story.id}
                  image={story.image}
                  name={story.name}
                  title={story.title}
                  feedback={story.feedback}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      <section className="why-join-us">
        <div className="why-join-us-content">
          <div className="join-us-item">
            <img
              src="/eventsbar-hiring.svg"
              alt="Yeni Beceri Kazan"
              className="join-us-icon"
            />
            <h3>Bootcamp</h3>
            <p>
              Bootcamp etkinlikleri, yazılım teknolojileri, veri bilimi, ürün
              yönetimi gibi teknolojik konularda düzenlenir. Hem eğitim
              alabilir, hem de o alanda işe başlayabilecek kadar fazla bilgi ve
              donanım kazanabilirsin.
            </p>
            <div>
              <a href="#" className="apply-now-button">
                Hemen Başvur ➜
              </a>
            </div>
          </div>
          <div className="join-us-item">
            <img
              src="/eventsbar-hackathon.svg"
              alt="Yeteneklerini Göster"
              className="join-us-icon"
            />
            <h3>Hackathon</h3>
            <p>
              Hackathon etkinliklerinde takımlar halinde veya bireysel olarak
              yarışacaksın. Etkinlik için belli bir zaman verilir ve yeni
              fikirler, yeni dijital ürünler üretmesi, sonra da bunları
              kodlaması istenir.
            </p>
            <div>
              <a href="#" className="apply-now-button">
                Hemen Başvur ➜
              </a>
            </div>
          </div>
          <div className="join-us-item">
            <img
              src="/eventsbar-hackathon.svg"
              alt="Kariyer Fırsatlarını Yakalayın"
              className="join-us-icon"
            />
            <h3>Hiring Challenge</h3>
            <p>
              Hiring Challenge yarışmalarında Android, iOS, algoritma veya kod
              hatası gibi problemleri belirli bir zaman aralığı içerisinde
              çözmeye çalışacaksın. Bu yarışmalarda algoritma tasarımına,
              özgünlüğe ve kod kalitesine göre puan alırsın.
            </p>
            <div>
              <a href="#" className="apply-now-button">
                Hemen Başvur ➜
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="techcareer-contact-info">
        <div className="techcareer-contact-info-content">
          <div className="contact-info-text">
            <h2>Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?</h2>
            <p>
              Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail
              adresinizi girin! 🚀
            </p>
            <div className="techcareer-contact-input">
              <input type="email" placeholder="Şirket E-Mail Adresiniz" />
              <button className="techcareer-contact-button">Gönder</button>
            </div>
            <p className="techcareer-contact-other">
              Tüm soru ve önerileriniz için;
            </p>
            <p className="techcareer-contact-details">
              hello@techcareer.net | 0216 468 76 00
            </p>
          </div>
        </div>
      </section>
      <section className="techcareer-footer">
        <div className="techcareer-footer-content">
          <div className="techcareer-footer-item">
            <h3>TECHCAREER</h3>
            <ul>
              <li>Hakkımızda</li>
              <li>Etkinlikler</li>
              <li>Şirketler İçin</li>
              <li>Eğitmen Ol</li>
              <li>İş Birliği</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className="techcareer-footer-item">
            <h3>BAŞVUR</h3>
            <ul>
              <li>Bootcamp</li>
              <li>Hackathon</li>
              <li>Hiring Challenge</li>
              <li>İş İlanları</li>
            </ul>
          </div>
          <div className="techcareer-footer-item">
            <h3>SENİN İÇİN</h3>
            <ul>
              <li>Komünite</li>
              <li>TDC</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Kariyer Rehberi</li>
              <li>Teknik Sözlük</li>
            </ul>
          </div>
          <div className="techcareer-footer-item">
            <h3>VERİ POLİTİKAMIZ</h3>
            <ul>
              <li>Aydınlatma Metni</li>
              <li>Hizmet Sözleşmesi</li>
              <li>Açık Rıza Metni</li>
              <li>Çerez Politikası</li>
            </ul>
          </div>
          <div className="techcareer-footer-item">
            <div className="techcareer-footer-logo">
              <img src="/techcareer-logo.svg" alt="Techcareer Logo" />
              <p>Türkiye'nin teknoloji kariyeri platformu</p>
            </div>
            <div className="techcareer-footer-social">
              <h3>SOSYAL MEDYA</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/techcareer.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/techcareer-net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/linkedin.svg" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC7l610M6b18u0F9359h019A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/youtube.svg" alt="Youtube" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/techcareer.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/facebook.svg" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

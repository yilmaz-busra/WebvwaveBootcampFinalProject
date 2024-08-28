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
      <section>
        <div>
          <div className=""></div>
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
      <div>
        <h2>Bizi Katılımcılarımızdan Dinle</h2>
        <Slider {...settings}>
          {stories.map((story) => {
            return (
              <StoryCard
                key={story.id}
                name={story.name}
                title={story.title}
                feedback={story.feedback}
              />
            );
          })}
        </Slider>
      </div>
    </main>
  );
}

export default Home;

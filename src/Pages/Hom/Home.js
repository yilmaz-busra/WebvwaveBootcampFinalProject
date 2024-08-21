import React from "react";
import { courses } from "../../courses";
import Card from "../../Components/Card";
import "../../App.css";

function Home() {
  return (
    <main>
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
        <button>Tüm Etkinlikleri Gör</button>
      </section>

      <section className="why-techcareer">
        <h2>Neden Techcareer.net?</h2>
        <div className="why-techcareer-content">
          <div className="why-techcareer-item">
            <img src="" alt="icon" className="why-techcareer-icon" />
            <h3>Ücretsiz etkinliklere katıl</h3>
            <p>
              Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken
              tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile
              başlayacaksın.
            </p>
          </div>
          <div className="why-techcareer-item">
            <img src="" alt="icon" className="why-techcareer-icon" />
            <h3>Kendini kanıtla</h3>
            <p>
              Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak
              hem becerilerini geliştirecek hem de ödül kazanma fırsatı
              yakalayacaksın.
            </p>
          </div>
          <div className="why-techcareer-item">
            <img src="" alt="icon" className="why-techcareer-icon" />
            <h3>İş fırsatı yakala</h3>
            <p>
              Sektöründe lider teknoloji şirketleriyle tanışacak ve iş
              fırsatları yakalayacaksın.
            </p>
          </div>
        </div>
      </section>

      <section className="career-guide">
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
      </section>
    </main>
  );
}

export default Home;

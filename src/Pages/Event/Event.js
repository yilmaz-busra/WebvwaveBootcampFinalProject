import React from "react";
import { courses } from "../../data/courses";
import Accordion from "react-bootstrap/Accordion";
import WorkshopCard from "../../Components/WorkshopCard/WorkshopCard";
import Footer from "../../Components/Footer/Footer";
function Event() {
  return (
    <div>
      <section>
        <div className="background-section">
          <div className="contentwrapper">
            <nav className="breadcrumb">
              <a href="/">Ana Sayfa</a> <span>&gt;</span>{" "}
              <a href="#">Etkinlikler</a>
            </nav>

            <div className="container-content">
              <h1 className="title">Tüm Etkinlikler</h1>
              <p className="description">
                Techcareer.net ile teknoloji dünyasına adım at! En yenilikçi
                yazılım eğitimleri ve teknoloji yarışmalarına katıl, bilgi ve
                becerilerini geliştir. Hemen keşfet, hızla başvur ve kariyerini
                ileri taşı!
              </p>
              <div>
                <button className="explore-button">Keşfet</button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="/vectorevent.svg"
                alt="icon"
                className="education-icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-card">
        <h1 className="title-h1">Başvurunu Bekleyen Etkinlikler</h1>
        <div className="container-cardItem">
          {courses.map((course) => (
            <WorkshopCard
              key={course.id}
              title={course.title}
              image={course.image}
              preinformation={course.preinformation}
              date={course.date}
              buttonText="Başvur"
            />
          ))}
        </div>
      </section>

      <section className="techcareer-contact-info">
        <h2>"İlerlemenin sırrı, başlamaktır." Mark Twain</h2>
      </section>

      <section className="accordionCss">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Eğitimler Hakkında</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Techcareer.net olarak, hem teknoloji paydaşları hem yeni
                başlayanlar hem de meraklıları için özel olarak tasarlanmış,
                geniş yelpazede, ücretsiz eğitim modülleri sunmaktayız.
                Amacımız, katılımcılara sektörde en çok talep gören bilgi ve
                yetkinlikleri kazandırarak, onların profesyonel dünyada başarılı
                bir kariyer inşa etmelerine katkı sağlamaktır. Eğitimlerimiz,
                alanında uzman ve deneyimli eğitmenler tarafından verilen
                kapsamlı içeriklerle desteklenmektedir.
              </p>
              <h5>Neden Techcareer.net Eğitim Modülleri?</h5>
              <p>
                Techcareer.net’in eğitim modülleri, sadece teorik bilgi sunmakla
                kalmaz, aynı zamanda katılımcıların öğrendiklerini pratik
                uygulamalarla pekiştirmelerine olanak tanır. Her bir eğitim,
                başlangıç seviyesinden ileri düzeye kadar geniş bir skalada
                içerikler sunarak, farklı bilgi seviyelerindeki katılımcılar
                için uygun hale getirilmiştir. Bu sayede, teknoloji dünyasında
                yeni olanlar da, mevcut becerilerini bir üst seviyeye taşımak
                isteyenler de ihtiyaçlarına yönelik eğitim bulabilir.
              </p>
              <h5>Eğitim İçeriklerimiz</h5>
              <p>
                Back-end'den front-end'e, DevOps'dan mobil uygulama geliştirmeye
                kadar pek çok farklı alanda, derin öğrenme sağlayacağınız ve
                edindiğiniz blgileri gerçek hayatta pratiğe dönüştürebileceğiniz
                pek çok eğitime ücretsiz bir şekilde techcareer.net'den
                erişebilirsiniz. Programlama dilleri arasında Java, Python ve
                JavaScript gibi dillerin yanı sıra, web geliştirme, veri bilimi,
                yapay zeka, yazılım mühendisliği ve siber güvenlik gibi çeşitli
                uzmanlık alanlarına yönelik eğitimler sunmaktayız.
              </p>
              <h5>Başarıya Giden Yolda Yanınızdayız</h5>
              <p>
                Techcareer.net, eğitim modüllerini katılımcıların kariyer
                hedeflerine ulaşmalarına destek olmak amacıyla tasarlamıştır.
                Sunduğumuz eğitimlerle, sektörde rekabet avantajı elde edebilir,
                teknolojinin hızla gelişen dünyasında kendinizi güncel tutabilir
                ve kariyerinizde yeni zirvelere ulaşabilirsiniz. Eğitim
                programlarımız, sadece bilgi aktarmakla kalmaz, aynı zamanda
                katılımcıların kariyer yolculuklarında onlara rehberlik eder ve
                onları teknoloji sektörünün gelecekteki liderleri haline
                getirir.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Event;

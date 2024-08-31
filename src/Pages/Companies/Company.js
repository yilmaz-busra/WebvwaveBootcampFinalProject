import React, { useState } from "react";
import "./Company.css";
import Footer from "../../Components/Footer/Footer";
function Company() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", name);
  };

  return (
    <div>
      <div className="background-section">
        <div className="content-wrapper">
          <nav className="breadcrumb">
            <a href="/">Ana Sayfa</a> &gt; <a href="#">Şirketler</a>
          </nav>
          <div className="container">
            <div className="container-content">
              <h1 className="title">
                Şirketiniz için en doğru{" "}
                <span className=""> "Dijital Yetenek" </span> techcareer.net'te!
              </h1>

              <button className="explore-button">
                Hemen Etkinlikler Düzenle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section>
        <div className="company-container">
          <div className="text-section">
            <h2 className="form-title">
              Hemen formu doldurun,{" "}
              <span className="highlight">şirketinizle iletişime geçelim!</span>
            </h2>
            <p className="form-description">
              İşe alım uzmanlarının %83’ü dijital yetenek ihtiyacı olan
              pozisyonları doldurmada zorluk çekiyor. techcareer.net ile dijital
              yetenek arayışındaki zorlukları aşın!
            </p>
          </div>
          <div className="formSection">
            <form onSubmit={handleSubmit}>
              <label className="input-label">Adınız - Soyadınız*</label>
              <input
                type="text"
                className="input-field"
                placeholder="Yanıtınızı buraya yazın..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Tamam
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">
          techcareer.net ile şirketinize dijital yetenekleri kazandırın!
        </h2>
        <p className="services-description">
          Aradığınız dijital yetenekler için yarışmalar ve eğitimler düzenleyin,
          işe alacağınız kişilerin teknik yetkinliklerinden emin olun!
        </p>
        <div className="services-container">
          <div className="service-card">
            <img src="/eventsbar-bootcamp.svg" alt="Bootcamp Icon" />
            <h3>Bootcamp</h3>
            <p>
              Yazılım teknolojileri, veri bilimi, ürün yönetimi gibi bilişim
              alanındaki konularda düzenlenen ücretsiz bir öğrenme maratonudur.
            </p>
          </div>
          <div className="service-card">
            <img src="/eventsbar-hackathon.svg" alt="Hackathon Icon" />
            <h3>Hackathon</h3>
            <p>
              Teknolojinin yazılım teknolojileri, veri bilimi, ürün yönetimi
              gibi dallarına ilgi duyanların katılıp, kendilerini kanıtladıkları
              yarışmalardır.
            </p>
          </div>
          <div className="service-card">
            <img src="/eventsbar-hiring.svg" alt="Hiring Challenge Icon" />
            <h3>Hiring Challenge</h3>
            <p>
              Şirketler tarafından belirlenen, Android, iOS ve Algoritma gibi
              problemleri çözmeye yönelik yarışmalardır.
            </p>
          </div>
        </div>
      </section>

      <section className="additional-services">
        <h2 className="additional-title">
          Teknoloji Alanında Aradığınız En Doğru "Dijital Yetenek"
        </h2>
        <p className="additional-description">
          En doğru çalışanı en kısa sürede bulmanız için, size yüksek kalitede
          hizmet sunuyoruz.
        </p>
        <div className="additional-container">
          <div className="additional-card">
            <img src="/icon-0.svg" alt="Service 1" />
            <p>
              Uzmanlarımız ile talebinizi dinliyor ve size uygun yönlendirmeler
              yapıyoruz.
            </p>
          </div>
          <div className="additional-card">
            <img src="/icon-1.svg" alt="Service 2" />
            <p>
              Yarışmalar ve eğitimler için 360° pazarlama süreci planlıyoruz.
            </p>
          </div>
          <div className="additional-card">
            <img src="/icon-2.svg" alt="Service 3" />
            <p>Doğru hedef kitleyi belirlemenizde yardımcı oluyoruz.</p>
          </div>
          <div className="additional-card">
            <img src="/icon-3.svg" alt="Service 4" />
            <p>
              Adayların mesleki yeterliliklerini ölçerek işe alacağınız
              adayların başarı sıralamalarını paylaşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="skills-title">
          Bulabileceğiniz Bazı Dijital Yetenekler
        </h2>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/dataScience.svg" alt="Veri Bilimi" />
            <h2>Veri Bilimi</h2>
            <h3>Veri Madenciliği Uzmanı, </h3>
            <h3> Veri Bilimci,</h3>
            <h3>Veri Merkezi Uzmanı.</h3>
          </div>
          <div className="skill-card">
            <img src="/webDevelopment.svg" alt="Web Geliştirme" />
            <h2>Web Programlayıcı</h2>
            <h3>Kıdemli Front-End Geliştiricisi</h3>
            <h3>Yazılım Mühendisi</h3>
            <h3>Web Arayüz Tasarımcısı</h3>
            <h3>Algoritma Geliştirme Uzmanı</h3>
            <h3> Yazılım Geliştirme Uzmanı</h3>
          </div>
          <div className="skill-card">
            <img src="/appDevelopment.svg" alt="App Geliştirme" />
            <h2>App Geliştirme</h2>
            <h3>Uygulama Geliştirme Uzmanı</h3>
            <h3>Mobil Teknoloji Uzmanı</h3>
            <h3>Mobil Uygulama Uzmanı</h3>
            <h3> iOS Geliştirici</h3>
            <h3> Android Geliştirici</h3>
          </div>
          <div className="skill-card">
            <img src="/product.svg" alt="Ürün" />
            <h2>Ürün</h2>
            <h3>Sistem Analisti</h3>
            <h3>İş Analisti</h3>
            <h3>BT Proje Yöneticisi</h3>
            <h3> Ürün Mühendisi</h3>
            <h3> Ürün Yöneticisi</h3>
          </div>
          <div className="skill-card">
            <img src="/system.svg" alt="Sistem" />
            <h2>Sistem</h2>
            <h3>Bilgi Teknolojileri Uzmanı </h3>
            <h3>DevOps Mühendisi </h3>
            <h3> Veri Tabanı Yöneticisi,</h3>
            <h3>Siber Güvenlik Uzmanı</h3>
            <h3>Kalite Sistem Mühendisi</h3>
            <h3>Bulut Mühendisi</h3>
          </div>
          <div className="skill-card">
            <img src="/test.svg" alt="Test" />
            <h2>Test</h2>
            <h3>Yazılım Destek Uzmanı</h3>
            <h3> Sistem Test Mühendisi,</h3>
            <h3>Yazılım Test Ve Kalite Uzmanı</h3>
            <h3>Yazılım Test Mühendisi</h3>
          </div>
        </div>
      </section>

      <section className="additional-services">
        <h2 className="additional-title">
          Teknoloji Alanında Aradığınız En Doğru "Dijital Yetenek"
        </h2>
        <p className="additional-description">
          En doğru çalışanı en kısa sürede bulun!
        </p>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Company;

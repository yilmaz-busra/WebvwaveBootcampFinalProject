import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="techcareer-footer">
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
    </div>
  );
}

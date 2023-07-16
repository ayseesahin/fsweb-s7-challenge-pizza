import React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="shrink">
          <div className="footer-column">
            <div className="footer-sol">
              <div className="column">
                <h2 className="footer-logo">Teknolojik <br />Yemekler</h2>
                <div className="adres">
                  <img src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/icon-1.png"></img>
                  <p>341 Londonderry Road, İstanbul/Türkiye</p>
                </div>
                <div className="mail">
                  <img src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/icon-2.png"></img>
                  <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div className="iletisim">
                  <img src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/icon-3.png"></img>
                  <p>+90 216 123 45 67</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="sicacik">
              <h3>Sıccacık Menüler</h3>
              <div className="menulistesi">
                <p>Terminal Pizza</p>
                <p>5 kişilik Hackatlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frostly</p>
                <p>Position Absolute Acı Burger</p>
                <p>Testler Geçti Mutlu Burger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink">
          <div className="footer-column">
            <div className="column-insta">
              <h3>İnstagram</h3>
              <div className="insta">
                <div className="insta1">
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-0.png"
                    width={50}
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-1.png"
                    width={50}
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-2.png"
                    width={50}
                  ></img>
                </div>
                <div className="insta2">
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-3.png"
                    width={50}
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-4.png"
                    width={50}
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/main/src/Assets/esnek/insta/li-5.png"
                    width={50}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

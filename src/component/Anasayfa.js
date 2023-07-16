import React from "react";
import pizza from "../Assets/esnek/mini-buttons/2.png.svg";
import burger from "../Assets/esnek/mini-buttons/3.png.svg";
import patates from "../Assets/esnek/mini-buttons/4.png.svg";
import icecek from "../Assets/esnek/mini-buttons/6.png.svg";
import tatlı from "../Assets/esnek/mini-buttons/5.png.svg";

export default function Anasayfa() {
  return (
    <div className="anasayfa">
      <div className="topDiv">
        <div className="description">
          <img src="https://raw.githubusercontent.com/ayseesahin/fsweb-s7-challenge-pizza/78b7d66e6edb4395790bbe0084fff1f8d81fba5c/Assets/logo.svg"></img>
          <p>fırsatı kaçırma</p>
          <p className="baslik">KOD ACIKTIRIR,</p>
          <p className="baslik">PİZZA DOYURUR</p>
          <div className="mt">
            <a className="order-button" type="button" href="/pizza">
              ACIKTIM
            </a>
          </div>
        </div>
      </div>

      <nav className="nav-bar-button">
        <button className="food">
          <img src={pizza} alt="Pizza" />
          Pizza
        </button>
        <button className="food">
          <img src={burger} alt="Burger" />
          Burger
        </button>
        <button className="food">
          <img src={patates} alt="Patates" />
          Patates
        </button>
        <button className="food">
          <img src={icecek} alt="İçecek" />
          İçecekler
        </button>
        <button className="food">
          <img src={tatlı} alt="Tatlı" />
          Tatlılar
        </button>
      </nav>

      <div>
        <h2 className="menuAdi">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="menu">
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-1.png?raw=true" />
            <h3>Klasik Pizza</h3>
            <p>
              Klasik pizza, İtalyan mutfağının en sevilen lezzetlerinden
              biridir. Genellikle ince hamur, domates sosu ve mozzarella peyniri
              ile yapılır. Üzerine peynir, sebzeler, etler veya deniz ürünleri
              gibi çeşitli malzemeler eklenebilir. Klasik pizza, dünya genelinde
              yaygın olarak tüketilmektedir ve farklı ülkelerde çeşitli
              lezzetlerle sunulmaktadır. Pizza severlerin vazgeçilmez
              lezzetlerinden biridir.
            </p>
            <ul className="fiyat">
              <li>110₺</li>
            </ul>
          </div>
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-2.png?raw=true" />
            <h3>Vegan Pizza</h3>
            <p>
              Vegan pizza, geleneksel pizza tarifinden farklı olarak hayvansal
              ürünler kullanılmadan hazırlanan bir çeşittir. Hamur, domates sosu
              ve peynir alternatifleri olarak soya, badem, hindistan cevizi veya
              fındık bazlı ürünler kullanılabilir. Sebzeler, mantarlar,
              baharatlar ve zeytin gibi malzemelerle zenginleştirilebilir. Vegan
              pizza, vegan beslenme tercih edenlerin favori lezzetlerinden
              biridir ve son yıllarda popülerliği artmaktadır.
            </p>
            <ul className="fiyat">
              <li>85₺</li>
            </ul>
          </div>
          <div className="menu-item">
            <img src="https://github.com/Workintech/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/food-3.png?raw=true" />
            <h3>UseEffect Burger</h3>
            <p>
              UseEffect tarafından özel yapım burger, onun sevdiği malzemelerle
              dolu bir lezzet şölenidir. Taze hamburger köftesi, cheddar
              peyniri, turşu, domates, marul ve acı sosuyla hazırlanmıştır. Ek
              olarak, özel sosuyla ve çıtır çıtır kızarmış patatesleriyle servis
              edilir. UseEffect'ın damak zevkine uygun olarak hazırlanan burger,
              onun yüzünde bir gülümseme yaratır. Her lokmada ağızda patlayan
              lezzetiyle keyifli bir yemek deneyimi sunar ve özel bir anı
              yaratır.
            </p>
            <ul className="fiyat">
              <li>185₺</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import axios from "axios";
import { useState } from "react";
import { object, string } from "yup";

export default function Pizza(props) {
  const [formData, setFormData] = useState({});
  const [hataMesaji, setHataMesaji] = useState("");
  const [pizzaAdet, setPizzaAdet] = useState(1);
  const [pizzaFiyati, setPizzaFiyati] = useState(110);
  const [malzemeFiyati, setMalzemeFiyati] = useState(0);
  const ektramalzemeler = ["Pepperoni", "Mantar", "Zeytin", "Sosis", "Soğan", "Ananas", "Dana Füme", "Yeşil Biber", "Ispanak" ]
  const boyutFiyat = {
    small: 110,
    medium: 150,
    large: 190,
  };

  let userSchema = object({
    boyut: string().required("Boyut seçmelisiniz"),
    hamur: string().required("Hamur tipi seçmelisiniz"),
  });

  function changeHandler(e) {
 
    let { value, type, checked } = e.target;

    if (type === "checkbox") {
      value = checked;
      if (checked) {
        setMalzemeFiyati(malzemeFiyati + 5);
      } else {
        setMalzemeFiyati(malzemeFiyati - 5);
      }
    }

    if (type === "radio") {
      setPizzaFiyati(boyutFiyat[value]);
    }
    const newFormData = {
      ...formData,
      [e.target.name]: value,
    };
    setFormData(newFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      // Form verilerini validate ediyoruz. userSchema yapısı ile kontrol ediyoruz
      await userSchema.validate(formData);
    } catch (err) {
      // Hata varsa hata mesajını güncelliyoruz
      setHataMesaji(err.message);
      return;
    }

    // Hata yoksa hata mesajını temizliyoruz
    setHataMesaji("");

    // Form verilerini POST ile gönderiyoruz
    axios
      .post("https://reqres.in/api/orders", formData)
      .then(function(response) {
        // Sipariş başarılı bir şekilde oluşturulduğunda siparişleri güncelliyoruz
        props.addSiparis(response.data);
        window.location.href = "/success";
      })
      .catch(function(error) {
        if (error.message === "Network Error") {
          alert("İnternet bağlantınızı kontrol edin");
        }
      });
  }

  return (
    <div className="pizzaDiv">
      <div className="header">
        <img src="https://raw.githubusercontent.com/frkn8/fsweb-s7-challenge-pizza/78b7d66e6edb4395790bbe0084fff1f8d81fba5c/Assets/logo.svg"></img>
      </div>
      <div className="breadcrumbs">
        <div>
          <a href="/">Anasayfa</a>
          <a href="/pizza">Sipariş Oluştur</a>
        </div>
      </div>

      <div className="content content-height">
        <h1>Klasik Pizza</h1>
        <div className="top-fiyat">
          <p>{pizzaAdet * (pizzaFiyati + malzemeFiyati)} ₺</p>
        </div>
        <p>
          Klasik pizza, dünya mutfağının en bilinen yemeklerinden biridir. İnce
          hamuru, sosu ve peynirleriyle her lokması ayrı bir lezzet sunar.
          Sitemizdeki klasik pizza seçeneği, özellikle Amerikan stili pizzalara
          benzeyen, bol peynirli ve isteğe bağlı olarak pepperoni, füme ve yeşil
          biber gibi malzemelerle hazırlanır.
        </p>
        <p style={{ color: "#e84a5f" }}>{hataMesaji}</p>
        <form id="pizza-form" onSubmit={handleSubmit}>
          <div className="row first-row">
            <div className="column boyutSec">
              <h2>Boyut Seçin</h2>
              <div>
                <input
                  type="radio"
                  id="small"
                  name="boyut"
                  value="small"
                  onChange={changeHandler}
                />
                <label htmlFor="small">Küçük</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="medium"
                  name="boyut"
                  value="medium"
                  onChange={changeHandler}
                />
                <label htmlFor="medium">Orta</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="large"
                  name="boyut"
                  value="large"
                  onChange={changeHandler}
                />
                <label htmlFor="large">Büyük</label>
              </div>
            </div>
            <div className="column">
              <h2>Hamur Boyutu Seçin</h2>
              <select
                id="pizza"
                name="hamur"
                defaultValue="none"
                onChange={changeHandler}
              >
                <option value="none" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>

          <h2>Ekstra Malzemeler</h2>
          <div className="row ikinci-row">
            <div className="column">
              {
                ektramalzemeler.map((malzeme, i )=> {
                 return (
                 <div className="checkbox-group">
                <input
                  type="checkbox"
                  id= {i}
                  name= {"malzeme"+(i+1)}
                  value= {malzeme}
                  onChange={changeHandler}
                />
                <label htmlFor={"malzeme"+(i+1)}>{malzeme}</label>
              </div>)
                })
              }
            
            </div>
          </div>

          <label htmlFor="special-text" className="siparisNotu">
            Sipariş Notuzu Girin
          </label>
          <textarea
            id="special-text"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            name="özel"
            onChange={changeHandler}
          />

          <hr />

          <div className="row ucuncu-row">
            <div className="column">
              <div>
                {/* Pizza adetini secmemi saglayan bir button grubu */}
                <button
                  id="pizza-minus"
                  type="button"
                  onClick={() => {
                    if (pizzaAdet > 1) {
                      setPizzaAdet(pizzaAdet - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  id="pizza-quantity"
                  type="number"
                  name="pizzaAdet"
                  value={pizzaAdet}
                  onChange={changeHandler}
                />
                <button
                  id="pizza-plus"
                  type="button"
                  onClick={() => {
                    setPizzaAdet(pizzaAdet + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="column bottom-column">
              <div>
                <h3>Sipariş Toplamı</h3>
                <div className="siparis-toplam">
                  <div className="fiyat-bottom">
                    <h2>Ek Malzemeler</h2>
                    <p>{malzemeFiyati} ₺</p>
                  </div>
                  <div className="fiyat-bottom">
                    <h2>Toplam</h2>
                    <p>{pizzaAdet * (pizzaFiyati + malzemeFiyati)} ₺</p>
                  </div>
                </div>
                <button id="order-button" type="submit">
                  Sipariş Ver
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
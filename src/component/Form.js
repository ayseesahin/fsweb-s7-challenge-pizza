import React from "react";
import { useState } from "react";

const addForm = {
  name: "Position Absolute Acı Pizza",
  price: 85.5,
  rate: 4.9,
  comment: 200,
  content: {
    explanation: `Lezzetli ve taze malzemelerle hazırlanmış pizza seçenekleriyle kendinizi
      İtalyan mutfağının eşsiz lezzetlerine doğru bir yolculuğa çıkarın. İnce
      hamuru, yoğun sosu ve zengin peynirleriyle hazırlanan pizzalarımız
      arasından seçim yaparken kendinizi kaybedeceksiniz. Çeşitli sebzeler,
      etler ve deniz ürünleriyle zenginleştirilen menümüzde her zevke hitap
      edecek bir seçenek bulabilirsiniz. Sıcak ve lezzetli pizzalarımızı
      dilimlerken, keyifli bir yemek deneyimi yaşayacaksınız.`,
    size: ["Küçük", "Orta", "Büyük"],
    additional: [
      "Peperoni",
      "Sosis",
      "Kanada Jambonu",
      "Tavuk Izgara",
      "Soğan",
      "Domates",
      "Mısır",
      "Sucuk,",
      "Jalepeno",
      "Sarımsak",
      "Biber",
      "Sucuk",
      "Ananas",
      "Kabak",
    ],
    dough: ["İnce", "Normal", "Kalın"],
  },
};

const siparis = { siparisAdeti: 1 };

function Form() {
  const [formData, setFormData] = useState(siparis);

  const changeHandler = (e) => {
    const { value, type, checked, name } = e.target;
    let fieldData = type === "checkbox" ? checked : value;
    const newformData = {
      ...formData,
      [name]: fieldData,
    };
    setFormData(newformData);
  };

  const changeNumber = (event) => {
    event.preventDefault();

    const { name, id } = event.target;
    let changeNum = formData.siparisAdeti;
    if (id === "-" && changeNum > 1) {
      setFormData({ [name]: changeNum - 1 });
    } else if (id === "+") {
      setFormData({ ...formData, [name]: changeNum + 1 });
    }
  };

  return (
    <form>
      <div className="form_giris">
        <h1>Teknolojik Yemekler</h1>
        <ul>
          <a href="">Anasayfa</a>
          <a href="">Seçenekler</a>
          <a href="">Sipariş Oluştur</a>
        </ul>
      </div>
      <div className="form_about">
        <h3>name</h3>
        <h2>fiyat</h2>
        <p>İçerik Bilgisi</p>
      </div>
      <div className="hamur-boyut">
        <div className="boyut">
          <p>Boyut Seç *</p>
          <input
            onChange={(e) => changeHandler(e)}
            type="radio"
            id="kucuk"
            name="fav_language"
            value="kucuk"
          />
          <label for="kucuk">Küçük</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="radio"
            id="orta"
            name="fav_language"
            value="orta"
          />
          <label for="orta">Orta</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="radio"
            id="buyuk"
            name="fav_language"
            value="buyuk"
          />
          <label for="buyuk">Büyük</label>
        </div>
        <div className="hamur">
          <h4>Hamur Seç *</h4>
          <select onChange={(e) => changeHandler(e)} type="text" name="hamur">
            <option value="Hamur">Hamur Kalınlığı</option>
            <option value="Kalın">Kalın</option>
            <option value="Orta">Orta</option>
            <option value="İnce">İnce</option>
          </select>
        </div>
      </div>
      <div className="ek-malzemeler">
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Pepperoni"
        />
        <label for="vehicle1"> Pepperoni</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="Sosis"
        />
        <label for="vehicle2"> Sosis</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="Kanada-Jambonu"
        />
        <label for="vehicle3"> Kanada Jambonu</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle4"
          name="vehicle4"
          value="Tavuk-Izgara"
        />
        <label for="vehicle4"> Tavuk Izgara</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle5"
          name="vehicle5"
          value="Sogan"
        />
        <label for="vehicle5"> Soğan</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle6"
          name="vehicle6"
          value="Domates"
        />
        <label for="vehicle6"> Domates</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle7"
          name="vehicle7"
          value="Misir"
        />
        <label for="vehicle7"> Mısır</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle8"
          name="vehicle8"
          value="Sucuk"
        />
        <label for="vehicle8"> Sucuk</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle9"
          name="vehicle9"
          value="Jalepeno"
        />
        <label for="vehicle9"> Jalepeno</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle10"
          name="vehicle10"
          value="Sarimsak"
        />
        <label for="vehicle10"> Sarımsak</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle11"
          name="vehicle11"
          value="Biber"
        />
        <label for="vehicle11"> Biber</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle12"
          name="vehicle12"
          value="Salam"
        />
        <label for="vehicle12"> Salam</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle13"
          name="vehicle13"
          value="Ananas"
        />
        <label for="vehicle13"> Ananas</label>

        <input
          onChange={(e) => changeHandler(e)}
          type="checkbox"
          id="vehicle14"
          name="vehicle14"
          value="Kabak"
        />
        <label for="vehicle14"> Kabak</label>
      </div>
      <div>
        <h4>Sipariş Notu</h4>
        <label htmlFor="siparisNotu">
          Siparişinize eklemek istediğiniz bir not var mı?
        </label>
        <input type="text" name="siparisNotu" />
      </div>

      <div className="toplam">
        <div>
          <button
            name="siparisAdeti"
            value={formData.siparisAdeti}
            onClick={changeNumber}
            id="-"
          >
            -
          </button>
          {formData.siparisAdeti}
          <button
            name="siparisAdeti"
            value={formData.siparisAdeti}
            onClick={changeNumber}
            id="+"
          >
            +
          </button>
        </div>
        <div>
          <h4>Sipariş Toplamı</h4>
          <p>
            Seçimler <span> 25.00₺</span>
          </p>
          <p>
            Toplam <span>110.50₺</span>
          </p>
          <button>SİPARİŞ VER</button>
        </div>
      </div>
    </form>
  );
}

export default Form;

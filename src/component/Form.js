import React from "react";
import { useState } from "react";
import Giris from "./Giris";
import Siparis from "./Siparis";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
    materials: [
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

  const history = useHistory();
  const handleSubmit = () => {
    history.push("/siparis");
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

  const choiceMoney = Object.values(formData).reduce((acc, value) => {
    if (value === true) {
      return acc + 5;
    } else {
      return acc;
    }
  }, 0);

  const totalMoney = addForm.price + choiceMoney;

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <div className="form_giris">
        <nav>
          <li>
            <NavLink to="/">Anasayfa</NavLink>
          </li>
          <li>Seçenekler</li>
          <li>
            <NavLink to="/pizza">Sipariş Oluştur</NavLink>
          </li>
        </nav>
      </div>
      <div className="form_about">
        <h3>{addForm.name}</h3>
        <h2>{addForm.price}</h2>
        <p>{addForm.content.explanation}</p>
      </div>
      <div className="hamur-boyut">
        <div className="boyut">
          <h4>Boyut Seç *</h4>
          {addForm.content.size.map((size, i) => {
            return (
              <label key={i}>
                {size}
                <input
                  onChange={(e) => changeHandler(e)}
                  type="radio"
                  name="boyut"
                  value={size}
                  checked={formData.boyut === size}
                />
              </label>
            );
          })}
        </div>
        <div className="hamur">
          <h4>Hamur Seç *</h4>
          <select onChange={(e) => changeHandler(e)} type="text" name="hamur">
            <option value={formData.name}>Hamur Kalınlığı</option>
            {addForm.content.dough.map((dough, i) => {
              return (
                <option onChange={(e) => changeHandler(e)} value={dough}>
                  {dough}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="ek-malzemeler">
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {addForm.content.materials.map((malzemeler, i) => {
          return (
            <label key={i}>
              <input
                onChange={changeHandler}
                name={malzemeler}
                type="checkbox"
                value={formData.value}
              />
              {malzemeler}
            </label>
          );
        })}
      </div>

      <div>
        <h4>Sipariş Notu</h4>
        <label htmlFor="siparisNotu"></label>
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          name="siparisNotu"
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        />
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
            Seçimler <span>{choiceMoney}₺</span>
          </p>
          <p>
            Toplam <span>{totalMoney}₺</span>
          </p>
          <button>
            <a href="./Siparis">SİPARİŞ VER</a>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

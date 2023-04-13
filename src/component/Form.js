import React from "react";
import { useState, useEffect } from "react";
import Giris from "./Giris";
import Siparis from "./Siparis";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./Form.css";

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

const siparis = { siparisAdeti: 1, fiyat: 0 };

const copyForm = {
  name: "",
  price: "",
  rate: "",
  comment: "",
  size: "",
  materials: [],
  dough: "",
  note: "",
  count: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .required("It is mandatory to fill in the name field")
    .min(3, "The name must be at least 3 characters"),
  size: Yup.string().required("Please select a pizza size."),
  materials: Yup.array().max(10, "You can choose 10 ingredients most."),
  dough: Yup.string().required("Please select a pizza dough."),
  note: Yup.string(),
});

function Form(props) {
  const [buttonDisabledMi, setButtonDisabledMi] = useState(true);
  const [formData, setFormData] = useState(siparis);

  const [errors, setErrors] = useState({
    dough: "",
    size: "",
    materials: "",
  });

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
  const handleSubmit = (e) => {
    axios
      .post("https://reqres.in/api/orders", formData)
      .then(function(response) {
        console.log(response.data);
        !response && history.push("/siparis");
      })
      .catch(function(error) {
        console.log(error);
      });
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

  useEffect(() => {
    schema.isValid(formData).then((valid) => setButtonDisabledMi(!valid));
  }, [formData]);

  function checkValidation(fieldName, fieldDataValue) {
    Yup.reach(schema, fieldName)
      .validate(fieldDataValue)
      .then(() => {
        setErrors({
          ...errors,
          [fieldName]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [fieldName]: err.errors[0],
        });
      });
  }

  const choiceMoney = Object.values(formData).reduce((acc, value) => {
    if (value === true) {
      return acc + 5;
    } else {
      return acc;
    }
  }, 0);

  const totalMoney = addForm.price + choiceMoney;

  return (
    <form className="form">
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="form_giris">
          <nav>
            <li>
              <NavLink to="/">Anasayfa-</NavLink>
            </li>
            <li>Seçenekler-</li>
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
                  <input
                    onChange={(e) => changeHandler(e)}
                    type="radio"
                    name="boyut"
                    value={size}
                    checked={formData.boyut === size}
                  />
                  {size}
                </label>
              );
            })}
          </div>
          <div className="hamur" data-cy="dough-dropdown">
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
          <div className="ek-malzemeler-cont">
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
        </div>

        <div>
          <h4>Sipariş Notu</h4>
          <label htmlFor="siparisNotu"></label>
          <input
            onChange={(e) => changeHandler(e)}
            id="special-text"
            type="text"
            name="siparisNotu"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />
        </div>

        <div className="toplam">
          <div className="siparisAdeti">
            <button
              className="azalt"
              name="siparisAdeti"
              value={formData.siparisAdeti}
              onClick={changeNumber}
              id="-"
            >
              -
            </button>
            <p className="siparisP">{formData.siparisAdeti}</p>
            <button
              className="arttir"
              name="siparisAdeti"
              value={formData.siparisAdeti}
              onClick={changeNumber}
              id="+"
            >
              +
            </button>
          </div>
          <div className="toplam-siparis">
            <div className="toplam-siparis-change">
              <h4>Sipariş Toplamı</h4>
              <div className="secimler">
                <p>Seçimler</p>
                <span> {choiceMoney} ₺</span>
              </div>
              <div className="total">
                <p>Toplam</p>
                <span> {totalMoney} ₺</span>
              </div>
            </div>
            <button disabled={buttonDisabledMi} type="submit">
              <a href="/siparis">SİPARİŞ VER</a>
            </button>
          </div>
        </div>
      </form>
    </form>
  );
}

export default Form;

import React from "react";

export default function Giris() {
  return (
    <div className="anasayfa">
      <div className="anasayfa_p">
        <p>
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </p>
      </div>
      <button className="aciktim">
        <a href="/pizza">ACIKTIM</a>
      </button>
      <img src="banner.png" />
    </div>
  );
}

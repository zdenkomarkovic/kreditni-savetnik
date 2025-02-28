import BackgroundImage from "@/components/BackgroundImage";
import React from "react";

const page = () => {
  const pStyle = "text-lg md:text-2xl";
  const h2Style = "text-xl font-bold md:text-4xl text-primary";
  return (
    <div className="py-24">
      <div className="container px-2 md:px-4 mx-auto space-y-14">
        <h1 className="text-2xl md:text-5xl font-bold text-primary">
          Krediti za pravna lica – Pomoć u ostvarivanju poslovnih ciljeva
        </h1>
        <p className={pStyle}>
          U <span className="font-bold text-primary">Kreditnom Savetniku</span>,
          razumemo da je stabilnost finansija ključ uspeha svake firme. Bilo da
          vam je potrebna podrška za širenje poslovanja, ulaganje u nove
          projekte ili prevazilaženje finansijskih izazova, naš tim je tu da vam
          pomogne da pronađete najpovoljnije kreditne opcije. Saradnjom sa
          renomiranim bankama i finansijskim institucijama, nudimo rešenja koja
          su prilagođena vašim specifičnim potrebama, omogućavajući vam da
          ostvarite dugoročni rast i uspeh. podršku u odabiru kredita koji
          najbolje odgovara vašim potrebama.
        </p>

        <div className="space-y-5">
          <div className="space-y-5">
            <h2 className={h2Style}>Naša ponuda kredita za pravna lica:</h2>
            <p className={pStyle}>
              🔹 Krediti za likvidnost – Ako želite da poboljšate likvidnost
              svoje firme, naši krediti su tu da vam pomognu da obezbedite
              potrebna sredstva za dnevno poslovanje i investicije.
            </p>
            <p className={pStyle}>
              🔹 Obrtna sredstva – Fleksibilni obrtni krediti omogućavaju vam da
              upravljate sezonskim promenama u gotovini, pokrijete kratkoročne
              obaveze ili iskoristite prilike za ekspanziju poslovanja.
            </p>
            <p className={pStyle}>
              🔹 Investicioni krediti – Planirate li proširenje poslovanja ili
              ulaganje u dugoročne projekte? Naši investicioni krediti pružaju
              vam potrebnu podršku za ostvarenje ambicioznih ciljeva.
            </p>
          </div>
          <BackgroundImage />
          <div className="space-y-5">
            <h2 className={h2Style}>
              Zašto izabrati Kreditni Savetnik za poslovne kredite?
            </h2>
            <p className={pStyle}>
              ✔️ Personalizovana rešenja – Svako preduzetje ima svoje specifične
              potrebe, stoga nudimo kredite koji su u potpunosti prilagođeni
              vašem poslovanju.
            </p>
            <p className={pStyle}>
              ✔️ Iskustvo i stručnost – Naš tim ima bogato iskustvo u radu sa
              firmama svih veličina i iz različitih industrija.
            </p>
            <p className={pStyle}>
              ✔️ Brza i efikasna procedura – Razumemo da brzina odlučivanja može
              biti ključna, zato se trudimo da vaši zahtevi budu obrađeni brzo i
              efikasno.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <p className={pStyle}>
            Kontaktirajte nas danas kako biste saznali više o našim poslovnim
            kreditnim programima i kako vam možemo pomoći da ostvarite
            finansijski uspeh. Bez obzira na veličinu vaše firme, Kreditni
            Savetnik je tu da vas podrži na svakom koraku poslovnog razvoja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
  signiture: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Brzo i lako do stambenog kredita",
    image: "/hero1.jpg",
    description:
      "Dugo sam tražio najbolju ponudu za stambeni kredit, ali su mi uslovi u bankama delovali komplikovano. Kreditni Savetnik mi je pomogao da pronađem najpovoljniju opciju i ubrzam ceo proces. Sada sam vlasnik stana bez stresa i skrivenih troškova!",
    signiture: "Marko P",
  },
  {
    id: 2,
    title: "Refinansiranje koje mi je smanjilo rate",
    image: "/hero1.jpg",
    description:
      "Zbog više kredita koje sam imao, mesečne rate su mi bile previsoke. Uz pomoć tima Kreditnog Savetnika uspeo sam da refinansiram dugovanja i smanjim mesečne troškove za 30%! Preporučujem svima koji žele bolju kontrolu nad svojim finansijama.",
    signiture: "Jelena M",
  },
  {
    id: 3,
    title: " Keš kredit bez komplikacija",
    image: "/hero2.jpg",
    description:
      "Trebao mi je keš kredit za hitne troškove, ali nisam bio siguran gde da ga uzmem. Stručnjaci iz Kreditnog Savetnika su mi objasnili sve opcije i pronašli najbolju ponudu. Zahvaljujući njima, novac sam dobio u roku od nekoliko dana!",
    signiture: "Nemanja S",
  },
  {
    id: 4,
    title: "Profesionalna pomoć pri žalbi Kreditnom birou",
    image: "/hero3.jpg",
    description:
      "Iznenadio sam se kada sam video negativne podatke u svom izveštaju Kreditnog biroa, iako sam uredno plaćao sve obaveze. Kreditni Savetnik mi je pomogao da napišem prigovor i rešim problem. Odlična usluga i maksimalna profesionalnost!",
    signiture: "Ivana K",
  },
  {
    id: 5,
    title: "Transparentno i bez skrivenih troškova",
    image: "/hero1.jpg",
    description:
      "Najviše mi se dopala transparentnost u radu Kreditnog Savetnika. Sve su mi objasnili, nisu mi obećavali nemoguće stvari i stvarno su pronašli ponudu koja je najbolja za mene. Osećao sam se sigurno u svakoj fazi procesa.",
    signiture: "Dragan L",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i stručnost",
    text: "Naš tim čine finansijski savetnici sa dugogodišnjim iskustvom u oblasti kreditiranja i finansija.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Personalizovane preporuke",
    text: "Svakom klijentu pristupamo individualno, analiziramo njegove potrebe i pronalazimo najpovoljnija rešenja.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Ušteda vremena i novca",
    text: "Umesto da sami istražujete banke i uslove, mi vam pružamo sve relevantne informacije i pregovaramo u vaše ime.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Transparentnost i pouzdanost",
    text: "Kod nas nema skrivenih troškova ni nejasnih uslova. Svaku odluku donosimo zajedno s vama, uz jasne informacije",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Saradnja sa vodećim bankama",
    text: "Radimo sa renomiranim finansijskim institucijama, što nam omogućava da vam obezbedimo najbolje uslove na tržištu.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Podrška od početka do kraja",
    text: "Vodimo vas kroz ceo proces – od procene kreditne sposobnosti do realizacije kredita, rešavanja žalbi i tumačenja izveštaja Kreditnog biroa.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 7,
    icon: GiWeight,
    title: "Posredovanje pri odobravanju kredita.",
    text: "",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Tumačenje izveštaja Kreditnog biroa.",
    text: "",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pisanje prigovora bankama i kreditnom birou",
    text: "bankama i kreditnom birou",
  },
  {
    id: 1,
    icon: GiWeight,
    title: "Pomoc u pripremi kreditne dokumentacije",
    text: "analiza ponuda, poređenje uslova, procena kreditne sposobnosti",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Refinansiranje",
    text: "smanjenje mesečne rate, konsolidacija dugova",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Analiza prihoda, rashoca i kreditne sposobnosti",
    text: "pomoć pri izboru najpovoljnijeg stambenog kredita",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Pronalazenje kredita sa najboljim uslovima",
    text: "saveti za brže i lakše dobijanje gotovinskog kredita",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Pregovaranje sa bankama za bolje uslove",
    text: "saveti za brže i lakše dobijanje gotovinskog kredita",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

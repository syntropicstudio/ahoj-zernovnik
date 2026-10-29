import PhotoButton from './PhotoButton.jsx';
import OpeningHours from './OpeningHours.jsx';

export function Hero() {
  return (
    <section className="hero wrap"><div className="hero-copy"><span className="eyebrow">Kousek od shonu. Blízko k lidem.</span><h1>Dobré místo<br />na jedno.<br /><em>A na chvíli.</em></h1><p>Vítejte U Zvěřinů a na zahrádce Ahoj. V Žernovníku, kde k sobě patří poctivé chutě, vychlazené pivo a obyčejná radost z posezení.</p><div className="actions"><a className="btn" href="#nabidka">Co si u nás dáte <span>↗</span></a><a className="btn secondary" href="#navsteva">Naplánovat návštěvu</a></div></div><div className="hero-photo"><img src="assets/IMG_3314.jpg" alt="Dřevěná zahrádka Ahoj s historickým kolem na průčelí" fetchPriority="high" /><div className="photo-stamp">Ahoj!<small>V ŽERNOVNÍKU</small></div><div className="hero-caption"><span>Vítejte u nás.</span><span>POHOSTINSTVÍ S HISTORIÍ<br />A ZAHRÁDKA S POHODOU</span></div></div></section>

  );
}

export function IntroStrip() {
  return (
    <div className="wrap intro-strip"><div><span>♧</span> Zahrádka pod širým nebem</div><div><span>⌂</span> Tradiční vesnický hostinec</div><div><span>↝</span> Zastávka na vašem výletě</div></div>
  );
}

export function Places({ onPhoto, onSummer }) {
  return (
    <section id="u-nas" className="wrap section"><div className="section-top"><div><span className="eyebrow">Dvě podoby. Jedna pohoda.</span><h2>Udělejte si u nás hezky.</h2></div><p>V létě venku, v chladnějších dnech v hostinci. Na kole, pěšky nebo jen tak za sousedy.</p></div><div className="places"><article><div className="place-photo"><PhotoButton src="assets/IMG_3325.jpg" caption="Letní zahrádka Ahoj" label="Zvětšit fotografii zahrádky" onPhoto={onPhoto}><img src="assets/IMG_3325.jpg" alt="Dřevěné lavice a stoly v zelené letní zahrádce" loading="lazy" /></PhotoButton></div><div className="place-title"><h3>Zahrádka Ahoj</h3><span className="tag">Jaro & léto</span></div><p>Posezení na čerstvém vzduchu a zasloužená zastávka při toulkách okolní přírodou. Na žízeň, na hlad i na kus řeči.</p><a className="textlink" href="#navsteva" onClick={onSummer}>Letní otevírací doba ↗</a></article><article><div className="place-photo"><PhotoButton src="assets/IMG_3303.jpg" caption="Pohostinství U Zvěřinů" label="Zvětšit fotografii hostince" onPhoto={onPhoto}><img src="assets/IMG_3303.jpg" alt="Interiér pohostinství U Zvěřinů" loading="lazy" /></PhotoButton></div><div className="place-title"><h3>Pohostinství U Zvěřinů</h3><span className="tag">Podzim & zima</span></div><p>Od října se potkáváme v hostinci. V odděleném prostoru lze po domluvě uspořádat také menší oslavu či setkání do 35 osob.</p><a className="textlink" href="tel:+420723748557">Domluvit oslavu ↗</a></article></div></section>

  );
}

export function History({ onPhoto }) {
  return (
    <section id="pribeh" className="wrap section history"><figure><PhotoButton src="assets/HospodaKolemRoku1925.jpg" caption="Hostinec kolem roku 1925 — fotografie z původního webu" label="Zvětšit historickou fotografii" onPhoto={onPhoto}><img src="assets/HospodaKolemRoku1925.jpg" alt="Historická fotografie hostince kolem roku 1925" loading="lazy" /></PhotoButton><figcaption>ŽERNOVNÍK · HOSTINEC KOLEM ROKU 1925</figcaption></figure><div><span className="eyebrow">Místo, které má co vyprávět</span><h2>Některé věci<br />je hezké zachovat.</h2><p>Hostinec patří k vesnici stejně jako cesty, které do ní vedou. Naše historie se odráží i ve starých fotografiích — třeba na té z doby kolem roku 1925.</p><p className="quote">„Na chvíli se zastavit.<br />A být prostě spolu.“</p><p>Dnes vás vítáme U Zvěřinů i na zahrádce Ahoj. Přijďte si udělat svou vlastní vzpomínku.</p></div></section>

  );
}

export function Location() {
  return (
    <section className="wrap location"><div><span className="eyebrow">Cesta je taky zážitek</span><h3>Pěšky, na kole. A pak Ahoj.</h3><p>Okolní příroda láká k procházkám i výletům na kole. U nás si můžete dopřát příjemnou přestávku, než vyrazíte zase dál.</p><a className="textlink" href="https://www.ahojz.cz/foto-z-okoli.html" target="_blank" rel="noopener">Prohlédnout fotografie z okolí ↗</a></div><img className="location-image" src="assets/IMG_3332.jpg" alt="Zelená zahrádka Ahoj v Žernovníku" loading="lazy" /></section>

  );
}

export function Footer() {
  return (
    <footer className="wrap footer"><b>ahoj. &nbsp; Pohostinství U Zvěřinů & zahrádka Ahoj</b><span>Jan Zvěřina · IČ 62136569 · Žernovník 10</span><span><a href="https://www.ahojz.cz/home.html" target="_blank" rel="noopener">Původní web ↗</a></span></footer>

  );
}

export function Visit({ season, onSeasonChange }) {
return (<section id="navsteva" className="visit"><div className="wrap visit-grid"><div><span className="eyebrow">Budeme se těšit</span><h2>Stavte se.<br />Třeba už o víkendu.</h2><p className="contact-line">Pohostinství U Zvěřinů & zahrádka Ahoj<br />Žernovník 10, 679 21 Černá Hora</p><a className="contact-phone" href="tel:+420723748557">723 748 557 ↗</a><p><a href="mailto:ahoj.zverina@seznam.cz">ahoj.zverina@seznam.cz</a></p><a className="btn" href="https://www.google.com/maps/search/?api=1&query=Pohostinstvi+U+Zverinu+Zernovnik+10" target="_blank" rel="noopener">Naplánovat cestu <span>↗</span></a></div><OpeningHours season={season} onSeasonChange={onSeasonChange} /></div></section>);
}

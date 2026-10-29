import { useState } from 'react';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import PhotoDialog from './components/PhotoDialog.jsx';
import { Hero, IntroStrip, Places, History, Visit, Location, Footer } from './components/Sections.jsx';

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [season, setSeason] = useState('winter');

  return (
    <>
      <div className="topline">POHOSTINSTVÍ U ZVĚŘINŮ <span>•</span> ZAHRÁDKA AHOJ <span>•</span> ŽERNOVNÍK</div>
      <Header />
      <main id="domu">
        <Hero />
        <IntroStrip />
        <Places onPhoto={setPhoto} onSummer={() => setSeason('summer')} />
        <Menu onPhoto={setPhoto} />
        <History onPhoto={setPhoto} />
        <Visit season={season} onSeasonChange={setSeason} />
        <Location />
      </main>
      <Footer />
      <PhotoDialog photo={photo} onClose={() => setPhoto(null)} />
    </>
  );
}

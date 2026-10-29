import Tabs from './Tabs.jsx';

const seasons = {
  winter: {
    label: 'Zimní provoz',
    dates: '16. 10. 2026 – 25. 4. 2027 · v hostinci',
    rows: [['Pondělí–čtvrtek', 'Zavřeno'], ['Pátek', '16:00–21:00'], ['Sobota', '16:00–21:00'], ['Neděle', '11:30–20:00']],
  },
  summer: {
    label: 'Letní provoz',
    dates: '30. 4. – 12. 9. 2027 · na zahrádce',
    rows: [['Pondělí', 'Zavřeno'], ['Úterý–pátek', '14:30–21:00'], ['Sobota', '11:30–21:00'], ['Neděle', '11:30–20:00']],
  },
};
const tabs = Object.entries(seasons).map(([id, data]) => ({ id, label: data.label, tabId: `tab-${id}`, panelId: `hours-${id}` }));

export default function OpeningHours({ season, onSeasonChange }) {
  return (
    <div className="hours">
      <h3>Kdy máme otevřeno</h3>
      <Tabs className="season" label="Sezónní otevírací doba" tabs={tabs} value={season} onChange={onSeasonChange} />
      {Object.entries(seasons).map(([id, data]) => (
        <div key={id} id={`hours-${id}`} role="tabpanel" aria-labelledby={`tab-${id}`} hidden={season !== id}>
          {data.rows.map(([day, time]) => <div className="hour-row" key={day}><span>{day}</span><span>{time}</span></div>)}
          <p className="hours-note">{data.dates}</p>
        </div>
      ))}
      <p className="hours-note">Údaje dle původního webu. Při plánování oslavy nebo návštěvy o svátcích nám prosím zavolejte.</p>
    </div>
  );
}

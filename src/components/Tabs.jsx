export default function Tabs({ className, label, tabs, value, onChange }) {
  function handleKey(event, index) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
      : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    onChange(tabs[next].id);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next].focus();
  }

  return (
    <div className={className} role="tablist" aria-label={label}>
      {tabs.map((tab, index) => (
        <button key={tab.id} role="tab" id={tab.tabId} aria-controls={tab.panelId}
          aria-selected={value === tab.id} tabIndex={value === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)} onKeyDown={event => handleKey(event, index)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}

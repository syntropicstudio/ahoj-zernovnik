import { useEffect, useRef } from 'react';

export default function PhotoDialog({ photo, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (photo && !dialog.open) dialog.showModal();
    else if (!photo && dialog.open) dialog.close();
  }, [photo]);

  return (
    <dialog ref={ref} aria-label="Fotogalerie" onClose={onClose}
      onClick={event => { if (event.target === event.currentTarget) ref.current.close(); }}>
      {photo && <>
        <img src={photo.src} alt={photo.caption} />
        <div className="dialogbar"><span>{photo.caption}</span>
          <button aria-label="Zavřít fotografii" onClick={() => ref.current.close()}>Zavřít ×</button>
        </div>
      </>}
    </dialog>
  );
}

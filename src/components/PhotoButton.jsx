export default function PhotoButton({ src, caption, label, onPhoto, children }) {
  return <button className="gallery-trigger" aria-label={label} onClick={() => onPhoto({ src, caption })}>{children}</button>;
}

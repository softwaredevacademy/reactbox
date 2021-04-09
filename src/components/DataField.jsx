export default function DataField({ label, text }) {
  return (
    <div className="data-field">
      <p className="label">{label}</p>
      <p className="description">{text}</p>
      <hr />
    </div>
  );
}

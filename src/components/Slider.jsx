export default function Slider({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return <>
    <h3>Current Age: {value}</h3>
    <input type='range' value={value} onChange={handleChange} min={18} max={50} />
  </>
}
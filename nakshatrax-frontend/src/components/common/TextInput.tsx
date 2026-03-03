import React from "react"

interface Props {
  label: string
  value: string
  onChange: (val: string) => void
}

const TextInput: React.FC<Props> = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default TextInput
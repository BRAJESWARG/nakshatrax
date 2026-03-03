import React, { useState } from "react"
import TextInput from "../common/TextInput"
import { createKundli } from "../../api/astrology"

const KundliForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    place: "",
    latitude: 0,
    longitude: 0,
  })

  const handleSubmit = async () => {
    try {
      const result = await createKundli(form)
      console.log("Kundli Result:", result)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <TextInput
        label="Name"
        value={form.name}
        onChange={val => setForm({ ...form, name: val })}
      />
      <button onClick={handleSubmit}>Create Kundli</button>
    </div>
  )
}

export default KundliForm
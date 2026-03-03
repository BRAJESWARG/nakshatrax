import React, { useState } from "react";
import { generateKundli } from "./api/api";
import { KundliInput, KundliResult } from "./types/types";

const App: React.FC = () => {
  const [form, setForm] = useState<KundliInput>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    place: "",
    latitude: 0,
    longitude: 0,
  });

  const [result, setResult] = useState<KundliResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "latitude" || name === "longitude") {
      setForm({ ...form, [name]: parseFloat(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await generateKundli(form);
      setResult(data);
    } catch (err) {
      setError("Failed to generate kundli.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>NakshatraX</h1>

      {/* Form Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
        />

        <input
          type="time"
          name="timeOfBirth"
          value={form.timeOfBirth}
          onChange={handleChange}
        />

        <input
          name="place"
          placeholder="Birth Place (City)"
          value={form.place}
          onChange={handleChange}
        />

        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={form.latitude}
          onChange={handleChange}
        />

        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={form.longitude}
          onChange={handleChange}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Kundli"}
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>
          {error}
        </p>
      )}

      {/* Result Section */}
      {result && (
        <div style={{ marginTop: "40px" }}>
          <h2>Chart Overview</h2>
          <p><strong>Ascendant:</strong> {result.chart.ascendant}</p>
          <p><strong>Moon Sign:</strong> {result.chart.moonSign}</p>
          <p><strong>Sun Sign:</strong> {result.chart.sunSign}</p>

          <h3>Planetary Positions</h3>
          <ul>
            {Object.entries(result.chart.planetaryPositions).map(
              ([planet, data]) => (
                <li key={planet}>
                  <strong>{planet}</strong> → {data.rashi}, House {data.house}, {data.degree}°, {data.nakshatra}
                  {data.retrograde ? " (Retrograde)" : ""}
                </li>
              )
            )}
          </ul>

          <h3>Interpretation</h3>
          <p>{result.interpretation}</p>
        </div>
      )}
    </div>
  );
};

export default App;
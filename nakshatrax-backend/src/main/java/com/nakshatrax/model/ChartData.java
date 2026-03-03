package com.nakshatrax.model;

import java.util.Map;

public class ChartData {

    private String ascendant;
    private String moonSign;
    private String sunSign;
    private Map<String, PlanetPosition> planetaryPositions;

    public ChartData(String ascendant,
                     String moonSign,
                     String sunSign,
                     Map<String, PlanetPosition> planetaryPositions) {
        this.ascendant = ascendant;
        this.moonSign = moonSign;
        this.sunSign = sunSign;
        this.planetaryPositions = planetaryPositions;
    }

    public String getAscendant() {
        return ascendant;
    }

    public String getMoonSign() {
        return moonSign;
    }

    public String getSunSign() {
        return sunSign;
    }

    public Map<String, PlanetPosition> getPlanetaryPositions() {
        return planetaryPositions;
    }
}
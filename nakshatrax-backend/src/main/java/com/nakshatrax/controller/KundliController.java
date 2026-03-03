package com.nakshatrax.controller;

import com.nakshatrax.model.*;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/kundli")
public class KundliController {

    @PostMapping
    public KundliResult generate(@RequestBody KundliInput input) {

        // 🔹 Temporary dummy astrology logic
        Map<String, PlanetPosition> planets = new HashMap<>();

        planets.put("Sun",
                new PlanetPosition("Capricorn", 10, 15.4, "Shravana", false));

        planets.put("Moon",
                new PlanetPosition("Cancer", 4, 22.1, "Pushya", false));

        planets.put("Mars",
                new PlanetPosition("Aries", 1, 8.7, "Ashwini", false));

        planets.put("Venus",
                new PlanetPosition("Pisces", 12, 27.3, "Revati", false));

        planets.put("Saturn",
                new PlanetPosition("Aquarius", 11, 3.5, "Dhanishta", true));

        ChartData chart = new ChartData(
                "Aries",        // Ascendant
                "Cancer",       // Moon sign
                "Capricorn",    // Sun sign
                planets
        );

        return new KundliResult(
                chart,
                "Strong leadership qualities with emotional sensitivity."
        );
    }
}
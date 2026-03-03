package com.nakshatrax.controller;

import com.nakshatrax.model.KundliInput;
import com.nakshatrax.model.KundliResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kundli")
public class KundliController {

    @PostMapping
    public KundliResult generate(@RequestBody KundliInput input) {
        // TODO: implement astrology logic
        return new KundliResult("chartObject", "Interpretation text");
    }
}
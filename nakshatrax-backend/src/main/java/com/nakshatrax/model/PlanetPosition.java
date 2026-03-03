package com.nakshatrax.model;

public class PlanetPosition {

    private String rashi;
    private int house;
    private double degree;
    private String nakshatra;
    private boolean retrograde;

    public PlanetPosition(String rashi,
                          int house,
                          double degree,
                          String nakshatra,
                          boolean retrograde) {
        this.rashi = rashi;
        this.house = house;
        this.degree = degree;
        this.nakshatra = nakshatra;
        this.retrograde = retrograde;
    }

    public String getRashi() { return rashi; }
    public int getHouse() { return house; }
    public double getDegree() { return degree; }
    public String getNakshatra() { return nakshatra; }
    public boolean isRetrograde() { return retrograde; }
}
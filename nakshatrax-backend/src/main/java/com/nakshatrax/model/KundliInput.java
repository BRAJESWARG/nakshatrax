package com.nakshatrax.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class KundliInput {

    @NotBlank
    private String name;

    @NotBlank
    private String dateOfBirth;   // ISO: YYYY-MM-DD

    @NotBlank
    private String timeOfBirth;   // HH:mm

    @NotBlank
    private String place;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    public KundliInput() {}

    public String getName() { return name; }
    public String getDateOfBirth() { return dateOfBirth; }
    public String getTimeOfBirth() { return timeOfBirth; }
    public String getPlace() { return place; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }

    public void setName(String name) { this.name = name; }
    public void setDateOfBirth(String dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    public void setTimeOfBirth(String timeOfBirth) { this.timeOfBirth = timeOfBirth; }
    public void setPlace(String place) { this.place = place; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }
}
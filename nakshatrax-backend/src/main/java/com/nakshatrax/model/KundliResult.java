package com.nakshatrax.model;

public class KundliResult {

    private ChartData chart;
    private String interpretation;

    public KundliResult(ChartData chart, String interpretation) {
        this.chart = chart;
        this.interpretation = interpretation;
    }

    public ChartData getChart() {
        return chart;
    }

    public String getInterpretation() {
        return interpretation;
    }
}
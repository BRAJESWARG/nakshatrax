package com.nakshatrax;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class NakshatraxApplication {

    public static void main(String[] args) {
        SpringApplication.run(NakshatraxApplication.class, args);
    }
}
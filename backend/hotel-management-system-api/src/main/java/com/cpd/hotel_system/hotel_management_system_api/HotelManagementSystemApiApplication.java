package com.cpd.hotel_system.hotel_management_system_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HotelManagementSystemApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelManagementSystemApiApplication.class, args);
	}

}

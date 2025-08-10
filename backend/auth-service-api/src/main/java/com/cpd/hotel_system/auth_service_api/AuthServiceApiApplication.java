package com.cpd.hotel_system.auth_service_api;

import com.cpd.hotel_system.auth_service_api.dto.request.SystemUserRequestDto;
import com.cpd.hotel_system.auth_service_api.service.SystemUserService;
import com.cpd.hotel_system.auth_service_api.utils.PasswordGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import java.util.Arrays;

@SpringBootApplication
@EnableDiscoveryClient
@RequiredArgsConstructor
public class AuthServiceApiApplication implements CommandLineRunner {

    private final SystemUserService userService;
    private final PasswordGenerator passwordGenerator;

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceApiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        SystemUserRequestDto user1 = new SystemUserRequestDto("ABC",
                "XYZ",
                "amirumithsara1234@gmail.com",
                passwordGenerator.generatePassword(), "0717244872"
        );
        SystemUserRequestDto user2 = new SystemUserRequestDto("STY",
                "WTY",
                "abc@gmail.com",
                passwordGenerator.generatePassword(), "0717244872"
        );
        userService.initializeHosts(Arrays.asList(user1, user2));
    }
}

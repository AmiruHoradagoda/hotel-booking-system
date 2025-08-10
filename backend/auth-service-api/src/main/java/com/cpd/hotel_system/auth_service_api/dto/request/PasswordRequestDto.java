package com.cpd.hotel_system.auth_service_api.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PasswordRequestDto {
    private String email;
    private String password;
    private String code;
}

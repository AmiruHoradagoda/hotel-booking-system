package com.cpd.hotel_system.auth_service_api.service;

import com.cpd.hotel_system.auth_service_api.dto.request.PasswordRequestDto;
import com.cpd.hotel_system.auth_service_api.dto.request.SystemUserRequestDto;

import java.io.IOException;
import java.util.List;

public interface SystemUserService {
    public void createUser(SystemUserRequestDto dto) throws IOException;
    public void initializeHosts(List<SystemUserRequestDto> users) throws IOException;
    public void resend(String email,String type) throws IOException;
    public void forgetPasswordSendVerificationCode(String email, String type) throws IOException;
    public boolean verifyRest(String otp,String email);
    public boolean passwordReset(PasswordRequestDto passwordRequestDto);
    public boolean verifyEmail(String otp,String email);

}

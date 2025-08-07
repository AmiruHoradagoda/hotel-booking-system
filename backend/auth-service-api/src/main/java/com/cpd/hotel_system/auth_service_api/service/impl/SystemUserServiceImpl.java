package com.cpd.hotel_system.auth_service_api.service.impl;

import com.cpd.hotel_system.auth_service_api.config.KeyClockSecurityUtil;
import com.cpd.hotel_system.auth_service_api.dto.request.SystemUserRequestDto;
import com.cpd.hotel_system.auth_service_api.entity.Otp;
import com.cpd.hotel_system.auth_service_api.entity.SystemUser;
import com.cpd.hotel_system.auth_service_api.exceptions.BadRequestException;
import com.cpd.hotel_system.auth_service_api.exceptions.DuplicateEntryException;
import com.cpd.hotel_system.auth_service_api.repo.OtpRepo;
import com.cpd.hotel_system.auth_service_api.repo.SystemUserRepo;
import com.cpd.hotel_system.auth_service_api.service.SystemUserService;

import lombok.RequiredArgsConstructor;
import org.keycloak.admin.client.Keycloak;
//import org.keycloak.representations.account.UserRepresentation;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SystemUserServiceImpl implements SystemUserService {

    @Value("${keycloak.config.realm}")
    private String realm;

    private final SystemUserRepo systemUserRepo;
    private final KeyClockSecurityUtil keyClockUtil;
    private final OtpRepo otpRepo;

    @Override
    public void createUser(SystemUserRequestDto dto) {
//        Validate the dto data
        if (dto.getFirstName() == null || dto.getFirstName().trim().isEmpty()) {
            throw new BadRequestException("First name is required");
        }
        if (dto.getLastName() == null || dto.getLastName().trim().isEmpty()) {
            throw new BadRequestException("Last name is required");
        }
        if (dto.getEmail() == null || dto.getEmail().trim().isEmpty()) {
            throw new BadRequestException("First name is required");
        }

        String userId = "";
        String otp = "";
        Keycloak keycloak = null;

        UserRepresentation existingUser = null;
        keycloak = keyClockUtil.getKeyClockInstance();

        keycloak.realm(realm).users().search(dto.getEmail()).stream().findFirst().orElse(null);

        if (existingUser != null) {
            Optional<SystemUser> selectedSystemUserFromAuthService =
                    systemUserRepo.findByEmail(dto.getEmail());
            if (selectedSystemUserFromAuthService.isEmpty()) {
                keycloak.realm(realm).users().delete(existingUser.getId());
            } else {
                throw new DuplicateEntryException("Email already exists");
            }
        } else {
            Optional<SystemUser> selectedSystemUserFromAuthService =
                    systemUserRepo.findByEmail(dto.getEmail());
            if (selectedSystemUserFromAuthService.isPresent()) {
                Optional<Otp> selectedOtp =
                        otpRepo.findBySystemUserId(selectedSystemUserFromAuthService.get().getUserId());
                if (selectedOtp.isPresent()) {
                    otpRepo.deleteById(selectedOtp.get().getPropertyId());
                }
                systemUserRepo.deleteById(selectedSystemUserFromAuthService.get().getUserId());
            }
        }
        //TODO need to complete

    }

    private UserRepresentation mapUserRepo(SystemUserRequestDto dto) {
        UserRepresentation user = new UserRepresentation();
        user.setEmail(dto.getEmail());
        user.setFirstName(dto.getEmail());
        user.setLastName(dto.getEmail());
        user.setUsername(dto.getEmail());
        user.setEnabled(false);
        List<CredentialRepresentation> credList = new ArrayList<>();
        CredentialRepresentation cred = new CredentialRepresentation();
        cred.setTemporary(false);
        cred.setValue(dto.getPassword());
        credList.add(cred);
        user.setCredentials(credList);

        return user;
    }

}

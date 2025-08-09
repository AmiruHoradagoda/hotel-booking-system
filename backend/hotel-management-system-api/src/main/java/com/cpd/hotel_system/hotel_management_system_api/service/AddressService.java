package com.cpd.hotel_system.hotel_management_system_api.service;

import com.cpd.hotel_system.hotel_management_system_api.dto.request.RequestAddressDto;
import com.cpd.hotel_system.hotel_management_system_api.dto.response.ResponseAddressDto;

public interface AddressService {
    public void create(RequestAddressDto dto);
    public void update(RequestAddressDto dto, String addressId);
    public void delete(String addressId);
    public ResponseAddressDto findById(String addressId);
    public ResponseAddressDto findByBranchId(String branchId);
}

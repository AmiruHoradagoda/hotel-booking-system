package com.cpd.hotel_system.hotel_management_system_api.service;

import com.cpd.hotel_system.hotel_management_system_api.utils.CommonFileSavedBinaryDataDTO;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    public CommonFileSavedBinaryDataDTO createResource(MultipartFile file, String directory, String bucket);
    public void deleteResource(String bucket,String directory, String fileName);
    public byte[] downloadFile(String bucket, String fileName);
}

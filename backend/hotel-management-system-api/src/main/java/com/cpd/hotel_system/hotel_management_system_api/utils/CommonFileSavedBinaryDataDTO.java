package com.cpd.hotel_system.hotel_management_system_api.utils;

import lombok.*;

import java.sql.Blob;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommonFileSavedBinaryDataDTO {
    private Blob hash;
    private String directory;
    private Blob fileName;
    private Blob resourceUrl;
}

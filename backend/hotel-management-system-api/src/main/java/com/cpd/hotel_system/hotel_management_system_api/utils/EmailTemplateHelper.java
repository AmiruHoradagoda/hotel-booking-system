package com.cpd.hotel_system.hotel_management_system_api.utils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.springframework.core.io.ClassPathResource;

public class EmailTemplateHelper {
    public String loadHtmlTemplate(String templateName){
        try{
            ClassPathResource resource = new ClassPathResource(templateName);
            byte[] fileData = resource.getInputStream().readAllBytes();
            return new String(fileData, StandardCharsets.UTF_8);
        }catch(IOException e){
            e.printStackTrace();
            return "";
        }
    }
}

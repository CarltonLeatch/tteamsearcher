package com.project.Model;

import org.springframework.beans.factory.annotation.Value;

public interface PlayerSummary {

    Long getIdPlayer();
    String getUsername();
    String getPassword();
    String getEmail();
}

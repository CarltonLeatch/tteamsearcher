package com.project.Model.Summary;

import org.springframework.beans.factory.annotation.Value;

public interface PlayerSummary {

    Long getIdPlayer();
    String getUsername();
    String getPassword();
    String getEmail();
}

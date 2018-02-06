package com.project.Application;

import groovy.util.logging.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Slf4j
@SpringBootApplication
@ComponentScan({"com.project"})
@EnableJpaRepositories({"com.project.Repository"})
@EntityScan({"com.project.Model"})
public class TteamsearcherApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = new SpringApplicationBuilder()
				.sources(TteamsearcherApplication.class)
				.run(args);
	}
}

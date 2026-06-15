package com.salvador.portfolio.contactapi;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class ContactApiApplicationTests {

    @LocalServerPort
    private int port;

    @Test
    void contextLoads() {
        assertThat(port).isPositive();
    }

    @Test
    void exposesHealthAndProbeEndpoints() throws Exception {
        assertHealthy("/api/actuator/health");
        assertHealthy("/api/actuator/health/liveness");
        assertHealthy("/api/actuator/health/readiness");
    }

    private void assertHealthy(String path) throws Exception {
        var request = HttpRequest.newBuilder(URI.create("http://127.0.0.1:" + port + path))
                .build();
        var response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        assertThat(response.statusCode()).isEqualTo(200);
        assertThat(response.body()).contains("\"status\":\"UP\"");
    }
}

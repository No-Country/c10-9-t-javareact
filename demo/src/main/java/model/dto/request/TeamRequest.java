package model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;




@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class TeamRequest {
    @NotBlank(message = "team is mandatory")
    private String[] team;
}

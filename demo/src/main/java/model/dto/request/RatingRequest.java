package model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;



@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class RatingRequest {
    @NotBlank(message = "rating is mandatory")
    private double rating;
}

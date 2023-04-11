package security.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;



@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class LoginUserRequest {
    @NotBlank(message = "email is mandatory")
    private String email;
    @NotBlank(message = "password is mandatory")
    private String password;
}

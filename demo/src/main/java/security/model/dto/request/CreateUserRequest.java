package security.model.dto.request;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;



@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class CreateUserRequest {

    @NotBlank(message = "email is mandatory")
    @Email(message = "Invalid email")
    private String email;
    @NotBlank(message = "password is mandatory")
    private String password;
    @NotBlank(message = "name is mandatory")
    private String name;
    @NotBlank(message = "lastname is mandatory")
    private String lastname;
    @NotBlank(message = "profile is mandatory")
    private String profile;
    @NotBlank(message = "stack is mandatory")
    private String stack;
    @NotBlank(message = "experience is mandatory")
    private String experience;
    @NotBlank(message = "portfolio is mandatory")
    private String portfolio;
}

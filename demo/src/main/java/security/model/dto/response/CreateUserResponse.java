package security.model.dto.response;


import lombok.*;
import security.model.entity.Role;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateUserResponse {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String lastname;
    private String profile;
    private String stack;
    private String experience;
    private String portfolio;
    private Set<Role> roles;
}

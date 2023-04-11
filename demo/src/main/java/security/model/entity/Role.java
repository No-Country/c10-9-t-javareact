package security.model.entity;



import lombok.*;
import security.model.enums.RoleEnum;

import javax.persistence.*;


@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(value = EnumType.STRING)
    private RoleEnum name;

}

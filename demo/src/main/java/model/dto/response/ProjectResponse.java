package model.dto.response;


import lombok.*;
import model.dto.StackDto;

import java.util.Set;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ProjectResponse {

    private Long id;
    private String name;
    private String type;
    private StackDto stack;
    private String description;
    private String link;
    private String image;
    private double rating;
    private Set<UserInfoResponse> team;

}

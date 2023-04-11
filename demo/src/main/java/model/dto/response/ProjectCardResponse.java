package model.dto.response;


import lombok.*;
import model.dto.StackDto;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ProjectCardResponse {

    private Long id;
    private String image;
    private String name;
    private StackDto stack;
    private String type;
    private double rating;

}

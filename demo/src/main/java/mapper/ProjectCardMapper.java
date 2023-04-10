package mapper;


import model.dto.StackDto;
import model.dto.response.ProjectCardResponse;
import model.entity.Project;

public class ProjectCardMapper {

    public static ProjectCardResponse mapToDto(Project project, double rating){

        String[] techs = project.getStack().split(", ");
        StackDto stackDto = StackDto.builder()
                .tech1(techs[0])
                .tech2(techs[1])
                .build();

        return ProjectCardResponse.builder()
                .id(project.getId())
                .image(project.getImage().getPath())
                .name(project.getName())
                .stack(stackDto)
                .type(project.getType())
                .rating(rating)
                .build();
    }
}

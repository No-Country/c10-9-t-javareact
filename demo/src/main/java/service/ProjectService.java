package service;


import exception.ResourceNotFoundException;
import model.dto.request.ProjectRequest;
import model.dto.response.ProjectCardResponse;
import model.dto.response.ProjectResponse;
import model.entity.Project;
import org.apache.catalina.User;

import java.awt.*;
import java.util.List;
import java.util.Set;

public interface ProjectService {

    List<ProjectCardResponse> listProjects();
    List<ProjectCardResponse> listTopTenProjects();

    ProjectResponse getProject(Long id) throws ResourceNotFoundException;

    ProjectResponse createProject(ProjectRequest projectRequest, Set<User> team, Image image);

    void deleteProject(Long id);

    ProjectResponse addMembersToTeam(Set<User> team, Project project);
}

package service.implementation;


import exception.ResourceNotFoundException;
import mapper.ProjectCardMapper;
import mapper.ProjectMapper;
import model.dto.request.ProjectRequest;
import model.dto.response.ProjectCardResponse;
import model.dto.response.ProjectResponse;
import model.entity.Project;
import model.entity.Rating;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import repository.ImageRepository;
import repository.ProjectRepository;
import repository.RatingRepository;
import security.repository.UserRepository;
import service.ProjectService;

import java.awt.*;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepo;

    private final UserRepository userRepo;

    private final RatingRepository ratingRepo;

    private final ImageRepository imageRepo;

    public ProjectServiceImpl(ProjectRepository projectRepo,
                              UserRepository userRepo, RatingRepository ratingRepo,
                              ImageRepository imageRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
        this.ratingRepo = ratingRepo;
        this.imageRepo = imageRepo;
    }

    @Override
    public List<ProjectCardResponse> listProjects() {

        List<Project> projects = projectRepo.findAll();

        return projects.stream()
                .map(project -> {

                    Set<Rating> ratings = ratingRepo.findAllByProjectId(project.getId());

                    if (ratings.isEmpty())
                        return ProjectCardMapper.mapToDto(project, 0.0);

                    double rating = RatingUtils.getAverageValue(ratings);
                    return ProjectCardMapper.mapToDto(project, rating);
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<ProjectCardResponse> listTopTenProjects() {
        List<Project> projects = projectRepo.findAll();

        List<ProjectCardResponse> response = projects.stream()
                .map(project -> {

                    Set<Rating> ratings = ratingRepo.findAllByProjectId(project.getId());

                    if (ratings.isEmpty())
                        return ProjectCardMapper.mapToDto(project, 0.0);

                    double rating = RatingUtils.getAverageValue(ratings);

                    return ProjectCardMapper.mapToDto(project, rating);
                })
                .collect(Collectors.toList());

        return response.stream()
                .sorted((r1, r2) -> Double.compare(r2.getRating(), r1.getRating()))
                .collect(Collectors.toList());
    }

    @Override
    public ProjectResponse getProject(Long id) throws ResourceNotFoundException {

        Project projectDB = projectRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("project does not exist"));

        Set<User> teamDB = userRepo.findAllByProjectId(id);

        Set<Rating> ratingList = ratingRepo.findAllByProjectId(id);

        if (ratingList.isEmpty())
            return ProjectMapper.mapToDto(projectDB, teamDB, 0.0);

        double ratingValue = RatingUtils.getAverageValue(ratingList);
        return ProjectMapper.mapToDto(projectDB, teamDB, ratingValue);

    }

    @Override
    public ProjectResponse createProject(ProjectRequest projectRequest, Set<User> team, Image image) {

        Image imageInserted = imageRepo.save(image);

        Project project = ProjectMapper.mapToEntity(projectRequest, imageInserted);
        Project projectInserted = projectRepo.save(project);

        team.forEach(user -> {
            user.getProjects().add(projectInserted);
            userRepo.save(user);
        });

        return ProjectMapper.mapToDto(projectInserted, team, 0.0);
    }

    @Override
    public void deleteProject(Long id) {

    }

    @Override
    public ProjectResponse addMembersToTeam(Set<User> team, Project project) {

        team.forEach(user -> {
            user.getProjects().add(project);
            userRepo.save(user);
        });
        Set<Rating> ratingList = ratingRepo.findAllByProjectId(project.getId());

        if (ratingList.isEmpty())
            return ProjectMapper.mapToDto(project, team, 0.0);

        double ratingValue = RatingUtils.getAverageValue(ratingList);
        return ProjectMapper.mapToDto(project, team, ratingValue);
    }
}

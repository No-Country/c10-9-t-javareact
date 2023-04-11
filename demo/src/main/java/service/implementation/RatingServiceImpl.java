package service.implementation;


import exception.AttributeException;
import exception.ResourceNotFoundException;
import model.dto.request.RatingRequest;
import model.entity.Project;
import model.entity.Rating;
import model.enums.RatingEnum;
import org.springframework.stereotype.Service;
import repository.ProjectRepository;
import security.jwt.RatingRepository;
import security.model.entity.User;
import service.RatingService;
import utils.RatingUtils;

import java.util.Optional;

@Service
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepo;

    private final ProjectRepository projectRepo;

    public RatingServiceImpl(RatingRepository ratingRepo,
                             ProjectRepository projectRepo) {
        this.ratingRepo = ratingRepo;
        this.projectRepo = projectRepo;
    }

    @Override
    public void saveRating(RatingRequest request, User user, Long projectId)
            throws AttributeException, ResourceNotFoundException {

        Project project = projectRepo.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("The project does not exist"));

        Optional<Project> ownProjectFound = user.getProjects().stream()
                .filter(ownProject -> ownProject.getId() == projectId)
                .findFirst();

        if (ownProjectFound.isPresent())
            throw new AttributeException("You cant rating your own project");

        Optional<Rating> ratingFound = ratingRepo.findByProjectAndUser(project.getId(), user.getId());
        ratingFound.ifPresent(rating -> ratingRepo.deleteById(rating.getId()));

        RatingEnum ratingEnum = RatingUtils.getRatingEnum(request.getRating());

        Rating rating = new Rating();
        rating.setValue(ratingEnum);
        rating.setUser(user);
        rating.setProject(project);

        ratingRepo.save(rating);
    }

}

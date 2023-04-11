package service;


import exception.AttributeException;
import exception.ResourceNotFoundException;
import model.dto.request.RatingRequest;
import security.model.entity.User;

public interface RatingService {

    void saveRating(RatingRequest request, User user, Long projectId) throws AttributeException, ResourceNotFoundException;

}

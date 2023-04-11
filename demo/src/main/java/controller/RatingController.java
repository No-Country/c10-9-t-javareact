package controller;


import exception.AttributeException;
import exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import model.dto.request.RatingRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import security.model.entity.User;
import security.service.UserService;
import service.RatingService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RatingController {

    private final RatingService ratingService;

    private final UserService userService;

    @PostMapping("/projects/{id}/rating")
    public ResponseEntity<String> createRating(Authentication authentication,
                                               @PathVariable(value = "id") Long id,
                                               @RequestBody RatingRequest request)
            throws ResourceNotFoundException, AttributeException {
        User user = userService.getUserByEmail(authentication.getName());

        ratingService.saveRating(request, user, id);

        return new ResponseEntity<>("Your rating has been saved", HttpStatus.OK);
    }
}

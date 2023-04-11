package security.service;

import exception.AttributeException;
import exception.ResourceNotFoundException;
import security.model.dto.request.CreateUserRequest;
import security.model.dto.request.LoginUserRequest;
import security.model.dto.response.CreateUserResponse;
import security.model.dto.response.LoginUserResponse;
import security.model.entity.User;

public interface UserService {
    CreateUserResponse create(CreateUserRequest request) throws AttributeException;
    LoginUserResponse login(LoginUserRequest request) throws AttributeException;
    User getUserByEmail(String email) throws ResourceNotFoundException;
}

package security.controller;


import exception.AttributeException;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import security.model.dto.request.CreateUserRequest;
import security.model.dto.request.LoginUserRequest;
import security.model.dto.response.CreateUserResponse;
import security.model.dto.response.LoginUserResponse;
import security.service.implementation.UserServiceImpl;




@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @PostMapping("/signup")
    public ResponseEntity<CreateUserResponse> create(@Valid @RequestBody CreateUserRequest request) throws AttributeException {
        return ResponseEntity.ok(userServiceImpl.create(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginUserResponse> login(@Valid @RequestBody LoginUserRequest dto) throws AttributeException {
        LoginUserResponse response = userServiceImpl.login(dto);
        return ResponseEntity.ok(response);
    }
}

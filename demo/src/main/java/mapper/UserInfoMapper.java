package mapper;


import model.dto.response.UserInfoResponse;
import security.model.entity.User;

public class UserInfoMapper {

    public static UserInfoResponse mapToDto(User user) {
        return UserInfoResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .lastname(user.getLastname())
                .profile(user.getProfile())
                .stack(user.getStack())
                .experience(user.getExperience())
                .portfolio(user.getPortfolio())
                .build();
    }
}

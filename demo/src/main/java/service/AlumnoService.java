package service;

import com.fourjuniors.juniors.model.dto.ImageDto;
import com.fourjuniors.juniors.model.entity.Image;

public interface AlumnoService {

    Image saveImage(ImageDto request);
}

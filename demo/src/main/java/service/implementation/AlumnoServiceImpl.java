package service.implementation;

import com.fourjuniors.juniors.model.dto.ImageDto;
import com.fourjuniors.juniors.model.entity.Image;
import com.fourjuniors.juniors.repository.ImageRepository;
import com.fourjuniors.juniors.service.ImageService;
import org.springframework.stereotype.Service;

@Service
public class AlumnoServiceImpl implements ImageService {

    private final ImageRepository imageRepo;

    public AlumnoServiceImpl(ImageRepository imageRepo) {
        this.imageRepo = imageRepo;
    }

    @Override
    public Image saveImage(ImageDto request) {
        Image image = new Image();
        image.setPath(request.getPath());
        return imageRepo.save(image);
    }
}
package security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class JwtProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;

    public String generateToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .claim("roles", getRoles(userDetails))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
                .signWith(getKey(secret))
                .compact();
    }

    public String getUsernameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey(secret))
                .build()
                .parseClaimsJws(token)
                .getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getKey(secret))
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return true;
        } catch (ExpiredJwtException e) {
            logger.error("expired token");
        } catch (UnsupportedJwtException e) {
            logger.error("unsupported token");
        } catch (MalformedJwtException e) {
            logger.error("malformed token");
        } catch (SignatureException e) {
            logger.error("bad signature");
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (Exception e) {
            logger.error("fail token");
        }
        return false;
    }

    private List<String> getRoles(UserDetails userDetails) {
        return userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
    }

    private Key getKey(String secret) {
        byte[] secretBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(secretBytes);
    }
}
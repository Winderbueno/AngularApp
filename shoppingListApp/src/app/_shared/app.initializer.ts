import { AuthenticationService } from './service/authentication.service';

export function appInitializer(authentService: AuthenticationService) {
    return () => new Promise(resolve => {
        
        // attempt to refresh token on app start up to auto authenticate
        authentService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}
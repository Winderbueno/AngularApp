import { AccountService } from '@app_auth/service/account.service';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        
        // Attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}
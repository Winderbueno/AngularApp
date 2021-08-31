//#region App Component, Model
import { AccountService } from '@app_account/service/account.service';
//#endregion


export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {

        // TODO
        // Attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}

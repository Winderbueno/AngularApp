import { Component, Inject } from '@angular/core';

import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

//#region Model and Service
import { Alert } from '@app_error_mngt/model/alert.model';
//#endregion

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public message: any
  ) { }

  
  
}

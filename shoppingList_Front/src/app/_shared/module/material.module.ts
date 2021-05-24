//#region Angular Module
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//#endregion

//#region Material Module
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
//#endregion

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
})

export class MaterialModule {}
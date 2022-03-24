//#region Angular
import { NgModule } from '@angular/core';
//#endregion

//#region Material UI Component
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
//#endregion

//#region Material UI Component Configuration
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//#endregion

//#region Material Library Adapters
// For 'ngrx-forms' -> See https://ngrx-forms.readthedocs.io/en/master/faq/
import { NgrxMatSelectViewAdapter } from './ngrx-forms-adapter/mat-select-view-adapter';
import { CustomErrorStateMatcherDirective } from './ngrx-forms-adapter/error-state-matcher';
import { MatListOptionFixDirective } from './ngrx-forms-adapter/mat-list-option-fix';
// For 'Luxon' -> See https://material.angular.io/components/datepicker/overview/
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
//#endregion


@NgModule({
  imports: [],
  declarations: [
    /* Material Library Adapters */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  exports: [
    /* Material UI Component */
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,

    /* Material Library Adapters */
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
    MatLuxonDateModule
  ],
  providers: [
    /* Material UI Component Configuration */
    // TODO - Allow this to be configured in a Conf Module
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { 
        appearance: 'outline' 
      } 
    },

    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: { 
        // TODO - Alert auto dismiss should be reimplemented with Ngrx (@timer+action in @alert)
        duration: 10000,
        horizontalPosition: 'left' 
      } 
    }
  ],
})
export class MaterialModule {}
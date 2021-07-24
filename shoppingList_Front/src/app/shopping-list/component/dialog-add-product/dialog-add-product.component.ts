//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app/_shared/form/component/form.component';
import { EnumService } from '@app_shared/enum/enum.service';
import { Enum } from '@app_shared/enum/enum.model';
import { ShoppingListService } from '@app/shopping-list/service/shopping-list.service';
import { CreateProductReq } from '@app/shopping-list/model/create-product-req.model';
import { FormErrorService } from '@app/_shared/form/service/form-error.service';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent extends FormComponent {

  // Proposition values
  productCatEnum!: Enum;
  productSubCatEnum!: Enum;


  prodToCreate!: CreateProductReq;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    formBuilder: FormBuilder,
    formErrorService: FormErrorService,
    alertService: AlertService,
    accountService: AccountService,
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private enumService: EnumService,
    private shoppingListService: ShoppingListService,
  ) {
    super(router, route, formBuilder, formErrorService, alertService, accountService);
  }

  ngOnInit(): void {

    super.formDef = {
      productName: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
    }

    super.ngOnInit();

    // TODO - Change Backend Design to only have 1 backend call to retrieve multiple enums values
    this.enumService.getValuesOf("ProductCategory")
      .subscribe({
        next: res => { this.productCatEnum = res; },
        error: error => this.alertService.error(error)
      });
    this.enumService.getValuesOf("ProductSubCategory")
      .subscribe({
        next: res => { this.productSubCatEnum = res; },
        error: error => this.alertService.error(error)
    });
  }

  submitAction() {

    // Get Active List Id
    var idSl: string = this.shoppingListService.active.shoppingListId;

    // Create product to create
    this.prodToCreate = {
      category: this.f.category.value,
      subCategory: this.f.subCategory.value,
      name: this.f.productName.value,
      quantity: 1,
      note: "test"
    }

    // TODO - Handle case when the user dont give a product name

    // Call the server
    this.shoppingListService.createProduct(idSl, this.prodToCreate)
      .subscribe({
        next: res => {
          this.dialogRef.close();
          this.shoppingListService.getActive().subscribe();
        },
        error: error => this.alertService.error(error)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Store
import * as fromEnum from '@enum/store/';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import { Enum } from '@enum/model/enum.model';
import { CreateProductReq } from '@shoppingList/model/current/create-product-req.model';
import { ShoppingListService } from '@shoppingList/service/shopping-list.service';
//#endregion

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html'
})
export class DialogAddProductComponent extends FormComponent {

  // Proposition values
  productCatEnum$!: Observable<Enum|undefined>;
  productSubCatEnum$!: Observable<Enum|undefined>;

  // TODO - Optimize constructor because we herit from FormCompo ?
  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store<{}>, // TODO
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    private shoppingListService: ShoppingListService,
  ) {

    super(router, route, store);
    this.productCatEnum$ = this.store.select(fromEnum.selectEnumByName('ProductCategory'));
    this.productSubCatEnum$ = this.store.select(fromEnum.selectEnumByName('ProductSubCategory'));
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  dispatchSubmitAction() {

    // Get Active List Id
    //var idSl: string = this.shoppingListService.active.shoppingListId;

    // Create product to create
    var prodToCreate: CreateProductReq = {
      category: this.value.Category as string,
      subCategory: this.value.SubCategory as string,
      name: this.value.ProductName as string,
      quantity: 1,
      note: "test" // TODO - This field should note be that
    }

    // Call the server
    // TODO - NgRx
    /*this.shoppingListService.createProduct(idSl, prodToCreate)
      .subscribe({
        next: res => {
          this.dialogRef.close();
          this.shoppingListService.getActive().subscribe();
        },
        error: error => this.alertService.error(error)
    });*/
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {
  readonly form: FormGroup = new FormGroup({ title: new FormControl(), price: new FormControl(), description: new FormControl(), image: new FormControl(), category: new FormControl() });

  constructor(private _productService: ProductService) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._productService.create({
      title: form.get('title')?.value,
      price: form.get('price')?.value,
      category: form.get('category')?.value,
      description: form.get('description')?.value,
      image: form.get('image')?.value
    }).subscribe(


    );
  }
}

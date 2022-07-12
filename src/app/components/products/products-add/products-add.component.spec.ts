import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddComponent } from './products-add.component';

describe('ProductsAddComponent', () => {
  let component: ProductsAddComponent;
  let fixture: ComponentFixture<ProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

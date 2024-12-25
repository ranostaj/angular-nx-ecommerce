import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersUiComponent } from './orders-ui.component';

describe('OrdersUiComponent', () => {
  let component: OrdersUiComponent;
  let fixture: ComponentFixture<OrdersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

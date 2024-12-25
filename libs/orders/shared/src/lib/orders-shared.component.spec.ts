import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersSharedComponent } from './orders-shared.component';

describe('OrdersSharedComponent', () => {
  let component: OrdersSharedComponent;
  let fixture: ComponentFixture<OrdersSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

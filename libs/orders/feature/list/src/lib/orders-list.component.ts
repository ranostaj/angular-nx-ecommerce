import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '@eshop/orders/data';

@Component({
  selector: 'lib-orders-list',
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css',
})
export class OrdersListComponent implements OnInit {
  private readonly ordersService: OrdersService = inject(OrdersService);
  orders$ = this.ordersService.getOrders();

  ngOnInit(): void {

  }
}


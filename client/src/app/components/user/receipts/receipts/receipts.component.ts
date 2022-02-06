// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/core/models/receipt.model';
import { UserService } from 'src/app/core/services/user.service';

// Services


// Models


@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  receipts: Receipt[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .getPurchaseHistory()
      .subscribe((res) => {
        this.receipts = res.data;
      });
  }

}

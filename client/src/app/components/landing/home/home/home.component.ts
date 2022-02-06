import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { HelperService } from 'src/app/core/services/helper.service';

const newestBooksQuery = '?sort={"creationDate":-1}&limit=5';
const bestRatedBooksQuery = '?sort={"currentRating":-1}&limit=5';
const mostPurchasedBooksQuery = '?sort={"purchasesCount":-1}&limit=5';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  newestBooks: Book[];
  bestRatedBooks: Book[];
  mostPurchasedBooks: Book[];
  isLogged: boolean;
  isAdmin: boolean;

  constructor(
    private helperService: HelperService,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.bestRatedBooks=this.bookService.books;
    // this.newestBooks=this.bookService.books;
    // this.mostPurchasedBooks=this.bookService.books;

    this.isLogged = this.helperService.isLoggedIn();
    this.searchForm = new FormGroup({
      query: new FormControl('', [Validators.required]),
    });

    this.bookService.search(newestBooksQuery).subscribe((res) => {
      this.newestBooks = res.data;
    });

    this.bookService.search(bestRatedBooksQuery).subscribe((res) => {
      this.bestRatedBooks = res.data;
    });

    this.bookService.search(mostPurchasedBooksQuery).subscribe((res) => {
      this.mostPurchasedBooks = res.data;
    });
  }

  onSubmit(): void {
    const query: string = this.searchForm.value.query.trim();
    if (query.length !== 0) {
      this.router.navigate([`/book/store/${query}`]);
      this.helperService.searchQuery.next(void 0);
    }
  }

  isUserAdmin(): boolean {
    if (!this.isAdmin) {
      this.isAdmin = this.helperService.isAdmin();
    }

    return this.isAdmin;
  }
}

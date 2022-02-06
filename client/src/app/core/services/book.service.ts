import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { ServerResponse } from '../models/server-response.model';
const domain = '/';
const getSingleBookEndpoint = domain + 'book/details/';
const createBookEndpoint = domain + 'book/add';
const editBookEndpoint = domain + 'book/edit/';
const deleteBookEndpoint = domain + 'book/delete/';
const rateBookEndpoint = domain + 'book/rate/';
const addToFavoritesEndpoint = domain + 'book/addToFavorites/';
const searchBookEndpoint = domain + 'book/search';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) { }
  search(query: string): Observable<ServerResponse<Book[]>> {
    return this.http.get<ServerResponse<Book[]>>(searchBookEndpoint + query);
  }
  
  getSingleBook(id: string): Observable<ServerResponse<Book>> {
    return this.http.get<ServerResponse<Book>>(getSingleBookEndpoint + id);
  }

  createBook(payload: Book): Observable<ServerResponse<Book>> {
    return this.http.post<ServerResponse<Book>>(createBookEndpoint, payload);
  }

  editBook(id: string, payload: Book): Observable<ServerResponse<Book>> {
    return this.http.put<ServerResponse<Book>>(editBookEndpoint + id, payload);
  }

  deleteBook(id: string): Observable<ServerResponse<Book>> {
    return this.http.delete<ServerResponse<Book>>(deleteBookEndpoint + id);
  }

  rateBook(id: string, payload: object): Observable<ServerResponse<Book>> {
    return this.http.post<ServerResponse<Book>>(rateBookEndpoint + id, payload);
  }

  addToFavourites(id: string): Observable<ServerResponse<Book>> {
    return this.http.post<ServerResponse<Book>>(addToFavoritesEndpoint + id, {});
  }

  books: any = [
    {
      _id: '102',
      title: 'Words Of Radiance',
      author: 'Brandon Sanderson',
      genre: 'Non-Fiction',
      year: 2002,
      description: 'Sir Alex Fergusons compelling story is always honest and revealing he reflects on his managerial career that embraced unprecedented European success for Aberdeen and 26 triumphant seasons with Manchester United. Sir Alex Fergusons best-selling autobiography has now been updated to offer reflections on events at Manchester United since his retirement as well as his teachings at the Harvard Business School, a night at the Oscars and a boat tour round the Hebrides, where he passed unrecognised. The extra material adds fresh insights and detail on his final years as Uniteds manager. Both the psychology of management and the detail of football strategy at the top level can be complex matters but no-one has explained them in a more interesting and accessible way for the general reader than Sir Alex does here.',
      cover: 'https://i.imgur.com/PkOUgGy.jpg',
      isbn: '123456892',
      pagesCount: 102,
      price: 12,
      qty: 1,
      creationDate: new Date('12/06/2022'),
      currentRating: 3,
      ratingPoints: 3,
      ratedCount: 3,
      purchasesCount: 2,
      comments: ['Nice'],
    },
    {
      _id: '103',
      title: 'King Rat',
      author: 'James Clavell',
      genre: 'Non-Fiction',
      year: 2002,
      description: 'Sir Alex Fergusons compelling story is always honest and revealing he reflects on his managerial career that embraced unprecedented European success for Aberdeen and 26 triumphant seasons with Manchester United. Sir Alex Fergusons best-selling autobiography has now been updated to offer reflections on events at Manchester United since his retirement as well as his teachings at the Harvard Business School, a night at the Oscars and a boat tour round the Hebrides, where he passed unrecognised. The extra material adds fresh insights and detail on his final years as Uniteds manager. Both the psychology of management and the detail of football strategy at the top level can be complex matters but no-one has explained them in a more interesting and accessible way for the general reader than Sir Alex does here.',
      cover:
        'https://i.imgur.com/6Pcnx6j.jpg',
      isbn: '9348579345',
      pagesCount: 1209,
      price: 18,
      qty: 1,
      creationDate: new Date('12/06/2022'),
      currentRating: 3,
      ratingPoints: 3,
      ratedCount: 3,
      purchasesCount: 2,
      comments: ['Nice'],
    },
    {
      _id: '104',
      title: 'Game Of Thrones',
      author: 'Geroge R',
      genre: 'Fantasy',
      year: 2014,
      description: 'Prince of the Night. Lord of the Damned. King of Vampires. He is Dracula, the most well-known vampire in the world—and this new illustrated edition of Bram Stoker’s classic tale of terror offers Dracula as you have never seen him before. Brought to life through the stunning visual artistry of Eisner Award-winning illustrator Becky Cloonan (Demo, American Virgin, Victor Von Doom), this new graphically compelling novel offers a spellbinding, edition of the book that launched the world’s enduring fascination with vampires: Bram Stoker’s complete and unabridged Dracula. Illuminated and accentuated by the visionary hand of one of America’s most gifted illustrators, Dracula is perfect for fans of the ghastly and paranormal, and unmissable for fans of True Blood, The Vampire Diaries, and Tim Burton’s macabre new film, Dark Shadows (release May 11, 2012) starring Johnny Depp, Helena Bonham-Carter, Michelle Pfeiffer, Eva Green, and Jackie Earle Haley.',
      cover:
        'https://i.imgur.com/1uqC2to.jpg',
      isbn: '0002247437',
      pagesCount: 1209,
      price: 26,
      qty: 1,
      creationDate: new Date('12/06/2022'),
      currentRating: 3,
      ratingPoints: 3,
      ratedCount: 3,
      purchasesCount: 2,
      comments: ['Nice'],
    },
  ];

  favouriteBooks: any[] = [];
  bookSearch = new Subject<string>();
  

  getBookByID(id: string) {
    let book = [];
    book = this.books.filter((item) => item._id == id);
    return book;
  }

  // editBook(id: string, bookData: any) {
  //   const bookindex = this.books.findIndex((object) => {
  //     return object._id == id;
  //   });

  //   console.log(id, bookData);

  //   this.books[bookindex].title = bookData.title;
  //   this.books[bookindex].author = bookData.author;
  //   this.books[bookindex].genre = bookData.genre;
  //   this.books[bookindex].year = bookData.newyear;
  //   this.books[bookindex].description = bookData.description;
  //   this.books[bookindex].cover = bookData.cover;
  //   this.books[bookindex].isbn = bookData.isbn;
  //   this.books[bookindex].pagesCount = bookData.pagesCount;
  //   this.books[bookindex].price = bookData.price;
  // }

  // deleteBook(id: string): void {
  //   const bookindex = this.books.findIndex((object) => {
  //     return object._id == id;
  //   });
  //   this.books.splice(bookindex, 1);
  //   const favBookIndex=this.favouriteBooks.findIndex((object)=>{
  //     return object._id==id;
  //   })
  //   if(favBookIndex!=-1){
  //     this.favouriteBooks.splice(favBookIndex,1);
  //   }
  // }

  addToFavourite(id: string, userId: string): string {
    const bookindex = this.books.findIndex((object) => {
      return object._id == id;
    });
    let nBook = { username: userId, ...this.books[bookindex] };
    const favIndex=this.favouriteBooks.findIndex((obj)=>{
      return obj._id==id;
    })
    if(favIndex==-1){
      this.favouriteBooks.push(nBook);
      return ("")
    }else{
      return ("Already In Favourites List");
    }
    
  }

  getFavouriteBooks(username:string):any{
    const favbooks=this.favouriteBooks.filter(obj=>{
      return obj.username==username;
    })

    console.log(favbooks);
    return favbooks;
    
  }
}

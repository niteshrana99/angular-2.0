import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http:Http) {}
    // storeBookdetails(books:any[]) {
    //    return this.http.post('https://lib-http-ng.firebaseio.com/bookdetails.json',books);
    // }
    getBookDetails() {
        return this.http.get('https://lib-http-ng.firebaseio.com/bookdetails.json')
            .map(
                (response:Response) =>{
                    const data = Object.values(response.json());
                    // console.log(Object.values(data));
                    return data[0];
                }
            )
    }
}
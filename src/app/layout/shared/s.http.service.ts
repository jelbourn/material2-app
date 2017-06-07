import {
    Headers,
    Http,
    RequestOptions,
    Response,
    URLSearchParams
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SHttpService {

    private _host = 'http://localhost:7267';

    constructor(private _http: Http) { }

    public get<T>(url: string, params: URLSearchParams = null): Observable<T> {
        url = this.fullUrl(url);
        const options = this.options(params);
        return this._http.get(url, options).map(this.extractData).catch(this.handlerError);
    }

    public post<T>(url: string, model: any, params: URLSearchParams = null): Observable<T> {
        url = this.fullUrl(url);
        const body = JSON.stringify(model);
        const options = this.options(params);
        options.headers.append('Content-Type', 'application/json');
        return this._http.post(url, body, options).map(this.extractData).catch(this.handlerError);
    }

    public put<T>(url: string, model: any, params: URLSearchParams = null): Observable<T> {
        url = this.fullUrl(url);
        const body = JSON.stringify(model);
        const options = this.options(params);
        options.headers.append('Content-Type', 'application/json');
        return this._http.put(url, body, options).map(this.extractData).catch(this.handlerError);
    }

    public delete<T>(url: string, params: URLSearchParams = null): Observable<T> {
        url = this.fullUrl(url);
        const options = this.options(params);
        return this._http.delete(url, options).map(this.extractData).catch(this.handlerError);
    }

    private fullUrl(url: string): string {
        url = `${this._host}${url[0] === '/' ? '' : '/'}${url}`;
        // tslint:disable-next-line:no-console
        console.info(url);
        return url;
    }

    private options(params: URLSearchParams): RequestOptions {
        const options = new RequestOptions({
            headers: new Headers({ 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }),
            params: params,
        });
        return options;
    }

    private extractData<T>(res: Response): T {
        const body = res.json();
        return body.value || {};
    }

    private handlerError(error: any) {
        const err = error.toString ? error.toString()
            : (error.message) || error.status
                ? `${error.status} ${error.statusText}`
                : 'Server Error';

        if (error.status === 401) {
            localStorage.removeItem('access_token');
            location.href = '/login';
        }
        console.error(err);
        return Observable.throw(err);
    }
}

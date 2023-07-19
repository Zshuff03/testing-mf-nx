import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiVersion2Service {

  public static JSON_REQUEST: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  public static FORM_REQUEST: Record<string, string> = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  constructor(
    public httpClient: HttpClient,
  ) { }

  /**
   * Makes a get request to the given url.
   * @param url     The url to make a get request to
   * @param params http params to send to api
   * @param additionalHeaders A list of key/value pairs to add as headers
   */
  get<T>(
    url: string,
    params: Record<string, string | string[]> = {},
    additionalHeaders: Record<string, string | string[]> = {}
  ): Observable<HttpResponse<T>> {
    const headers: Record<string, string | string[]> = {
      ...additionalHeaders,
    };

    return this.httpClient.get<T>(this._buildApiUrl(url), {
      headers: new HttpHeaders(headers),
      params: new HttpParams({
        fromObject: params,
      }),
      observe: 'response',
    });
  }

  /**
   * Makes a post request to the given url.
   * @param url               The url to make a post request to
   * @param body              The object for the body of the post request
   * @param sign              Should the request be signed?
   * @param additionalHeaders A list of key/value pairs to add as headers
   * @param handler
   * @returns                 Response from put request
   */
  post<T>(
    url: string,
    body: Record<string, string>,
    sign: boolean,
    additionalHeaders?: Record<string, string>,
  ): Observable<HttpResponse<T>> {
    const headerOptions: Record<string, string> = {
      ...ApiVersion2Service.FORM_REQUEST,
      ...additionalHeaders,
    };


    const bodyString = this.buildApiBody(body);

    return this.httpClient.post<T>(this._buildApiUrl(url), bodyString, {
      headers: new HttpHeaders(headerOptions),
      observe: 'response',
    });
  }

  /**
   * Makes a put request to the given url.
   * @param   url               The url to make a put request to
   * @param   body              The object for the body of the put request
   * @param   additionalHeaders Additional Headers
   * @returns                   Response from put request
   */
  put<T>(url: string, body: Record<string, string>, additionalHeaders?: Record<string, string>): Observable<HttpResponse<T>> {
      const headers: Record<string, string> = {
        ...ApiVersion2Service.FORM_REQUEST,
        ...additionalHeaders,
      };

      const bodyString = this.buildApiBody(body);

      return this.httpClient.put<T>(this._buildApiUrl(url), bodyString, {
        headers: new HttpHeaders(headers),
        observe: 'response',
      });
  }

  /**
   * Makes delete request to given url
   * @param url     The url to make a delete request to
   * @param options The RequestOptions object for the call
   * @returns       Response from delete request
   */
  delete<T>(url: string): Observable<HttpResponse<T>> {
      const headers: HttpHeaders = new HttpHeaders();


      return this.httpClient.delete<T>(this._buildApiUrl(url), {
        headers,
        observe: 'response',
      });
  }

  /**
   * Builds the url for the api call by combining the calls route and the current environments prefix
   * @param url The relative url for the api call
   */
  _buildApiUrl(url: string): string {


    return url;
  }

  /**
   * Builds the api body string
   * @param fromObject The object that represents the body for the request
   */
  buildApiBody(fromObject: any): string {
    const params: HttpParams = new HttpParams({
      fromObject,
      // encoder: new CustomHttpParamEncodingCodec(),
    });

    const body: string = params.toString();

    return body;
  }

  /**
   * Extract the object from the http response from the api service
   * @param response
   */
  extractTypeFromMessage = <T>(response: HttpResponse<T>): T => {

    return (response.body || undefined) as any;
  }
}

/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {salesman} from "../../interfaces/salesman-interface";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List all salesmen
   *
   * This method doesn't expect any request body.
   */
  apiSalesmenGet$Response(): Observable<HttpResponse<salesman[]>> {
      return this.http.get<salesman[]>(environment.apiEndpoint + '/api/salesmen', {observe: 'response', withCredentials: true})
  }

  /**
   * Add a new salesman
   *
   * This method doesn't expect any request body.
   */
  apiSalesmenPost$Response(): Observable<HttpResponse<any>> {
      return this.http.post(environment.apiEndpoint + '/api/salesmen', "",  {observe: 'response',withCredentials: true})
  }

    /**
     * Delete a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdDelete$Response(id: string): Observable<HttpResponse<any>> {
        return this.http.delete(environment.apiEndpoint + `/api/salesmen/${id}`, {observe: 'response', withCredentials: true})
    }

    /**
     * Get a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdGet$Response(id: string): Observable<HttpResponse<salesman>> {
        return this.http.get<salesman>(environment.apiEndpoint + `/api/salesmen/${id}`, {observe: 'response', withCredentials: true})
    }

    /**
     * Update a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdPut$Response(id: string, body: salesman): Observable<HttpResponse<any>> {
        return this.http.put(environment.apiEndpoint + `/api/salesmen/${id}`, body,{observe: 'response', withCredentials: true})
    }



  /**
   * Path part for operation apiSalesmenDelete
   */
  static readonly ApiSalesmenDeletePath = '/api/salesmen';

  /**
   * Delete all salesmen
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalesmenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalesmenDelete$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiSalesmenDeletePath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiSalesmenIdPut
   */
  static readonly ApiSalesmenIdPutPath = '/api/salesmen/{id}';


  apiSalesmenIdPutf$Response(params: {
    id: any;
    salesman?: {
'ocrxID'?: string;
'ohrmID'?: string;
'firstName'?: string;
'lastName'?: string;
'jobTitle'?: string;
};
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiSalesmenIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body('salesman', `${params.salesman}`);
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiEvaluationRecordsGet
   */
  static readonly ApiEvaluationRecordsGetPath = '/api/evaluationRecords';

  /**
   * List all evaluation records
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEvaluationRecordsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEvaluationRecordsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiEvaluationRecordsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiEvaluationRecordsPost
   */
  static readonly ApiEvaluationRecordsPostPath = '/api/evaluationRecords';

  /**
   * Add a new evaluation record
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEvaluationRecordsPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEvaluationRecordsPost$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiEvaluationRecordsPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiEvaluationRecordsIdYearOfPerformanceGet
   */
  static readonly ApiEvaluationRecordsIdYearOfPerformanceGetPath = '/api/evaluationRecords/{id}/{yearOfPerformance}';

  /**
   * Get an evaluation record by salesman ID and year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEvaluationRecordsIdYearOfPerformanceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEvaluationRecordsIdYearOfPerformanceGet$Response(params: {
    id: any;
    yearOfPerformance: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiEvaluationRecordsIdYearOfPerformanceGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('yearOfPerformance', params.yearOfPerformance, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiEvaluationRecordsIdYearOfPerformancePut
   */
  static readonly ApiEvaluationRecordsIdYearOfPerformancePutPath = '/api/evaluationRecords/{id}/{yearOfPerformance}';

  /**
   * Update an evaluation record by salesman ID and year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEvaluationRecordsIdYearOfPerformancePut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEvaluationRecordsIdYearOfPerformancePut$Response(params: {
    id: any;
    yearOfPerformance: any;
    salesman?: {
'sid'?: string;
'year'?: string;
'orderEval'?: string;
'socialEval'?: string;
'orderBonus'?: string;
'socialBonus'?: string;
'totalBonus'?: string;
'remarks'?: string;
};
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiEvaluationRecordsIdYearOfPerformancePutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('yearOfPerformance', params.yearOfPerformance, {});
      rb.body('salesman', `${params.salesman}`);
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiEvaluationRecordsIdYearOfPerformanceDelete
   */
  static readonly ApiEvaluationRecordsIdYearOfPerformanceDeletePath = '/api/evaluationRecords/{id}/{yearOfPerformance}';

  /**
   * Delete an evaluation record by salesman ID and year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEvaluationRecordsIdYearOfPerformanceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEvaluationRecordsIdYearOfPerformanceDelete$Response(params: {
    id: any;
    yearOfPerformance: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiEvaluationRecordsIdYearOfPerformanceDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('yearOfPerformance', params.yearOfPerformance, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxProductsIdGet
   */
  static readonly ApiOcrxProductsIdGetPath = '/api/ocrx/products/{id}';

  /**
   * Retrieve a product by ID from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxProductsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxProductsIdGet$Response(params: {

    /**
     * test
     */
    id: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxProductsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxCustomersGet
   */
  static readonly ApiOcrxCustomersGetPath = '/api/ocrx/customers';

  /**
   * Retrieve all customer from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxCustomersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxCustomersGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxCustomersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxCustomersIdGet
   */
  static readonly ApiOcrxCustomersIdGetPath = '/api/ocrx/customers/{id}';

  /**
   * Retrieve a customer by ID from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxCustomersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxCustomersIdGet$Response(params: {
    id: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxCustomersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxOrdersGet
   */
  static readonly ApiOcrxOrdersGetPath = '/api/ocrx/orders';

  /**
   * Retrieve all orders from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxOrdersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxOrdersGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxOrdersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxOrdersIdPositionsGet
   */
  static readonly ApiOcrxOrdersIdPositionsGetPath = '/api/ocrx/orders/{id}/positions';

  /**
   * Retrieve order positions by order ID from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxOrdersIdPositionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxOrdersIdPositionsGet$Response(params: {
    id: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxOrdersIdPositionsGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxSalesmenGet
   */
  static readonly ApiOcrxSalesmenGetPath = '/api/ocrx/salesmen';

  /**
   * Retrieve all salesmen from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxSalesmenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxSalesmenGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxSalesmenGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxSalesmenIdGet
   */
  static readonly ApiOcrxSalesmenIdGetPath = '/api/ocrx/salesmen/{id}';

  /**
   * Retrieve a salesman by ID from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxSalesmenIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxSalesmenIdGet$Response(params: {
    id: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxSalesmenIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOcrxSalesmenIdOrdersYearGet
   */
  static readonly ApiOcrxSalesmenIdOrdersYearGetPath = '/api/ocrx/salesmen/{id}/orders/{year}';

  /**
   * Retrieve all orders of a salesman in a given year from OpenCRX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOcrxSalesmenIdOrdersYearGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOcrxSalesmenIdOrdersYearGet$Response(params: {
    id: any;
    year: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOcrxSalesmenIdOrdersYearGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOhrmSalesmenGet
   */
  static readonly ApiOhrmSalesmenGetPath = '/api/ohrm/salesmen';

  /**
   * Retrieve all salesmen from OrangeHRM
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOhrmSalesmenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOhrmSalesmenGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOhrmSalesmenGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOhrmSalesmenIdGet
   */
  static readonly ApiOhrmSalesmenIdGetPath = '/api/ohrm/salesmen/{id}';

  /**
   * Retrieve a salesman by ID from OrangeHRM
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOhrmSalesmenIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOhrmSalesmenIdGet$Response(params: {
    id: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOhrmSalesmenIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation apiOhrmSalesmenIdBonusYearBonusPut
   */
  static readonly ApiOhrmSalesmenIdBonusYearBonusPutPath = '/api/ohrm/salesmen/{id}/bonus/{year}/{bonus}';

  /**
   * Add a bonus for one salesman by ID and year in OrangeHRM
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOhrmSalesmenIdBonusYearBonusPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOhrmSalesmenIdBonusYearBonusPut$Response(params: {
    id: any;
    year: any;
    bonus: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiOhrmSalesmenIdBonusYearBonusPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('year', params.year, {});
      rb.path('bonus', params.bonus, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }
}

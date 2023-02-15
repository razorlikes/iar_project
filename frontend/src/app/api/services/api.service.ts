/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {Observable} from 'rxjs';
import {salesman} from "../../interfaces/salesman-interface";
import {environment} from "../../../../environments/environment";
import {record} from "../../interfaces/evaluationrecord-interface";


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
     * List all ohrm salesmen
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenOhrmGet(): Observable<HttpResponse<salesman[]>> {
        return this.http.get<salesman[]>(environment.apiEndpoint + '/api/ohrm/salesmen', {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Add bonus in ohrm
     *
     * This method doesn't expect any request body.
     */
    apiBonusOhrmPost(id, body): Observable<HttpResponse<any>> {
        return this.http.post<salesman[]>(environment.apiEndpoint + `/api/ohrm/salesmen/${id}`, body, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * List all salesmen
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenGet(): Observable<HttpResponse<salesman[]>> {
        return this.http.get<salesman[]>(environment.apiEndpoint + '/api/salesmen', {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Add a new salesman
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenPost(): Observable<HttpResponse<any>> {
        return this.http.post(environment.apiEndpoint + '/api/salesmen', "", {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Add a new salesman with body
     */
    apiSalesmenPostBody(body): Observable<HttpResponse<any>> {
        return this.http.post(environment.apiEndpoint + '/api/salesmen', body, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Delete a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdDelete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete(environment.apiEndpoint + `/api/salesmen/${id}`, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Get a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdGet(id: string): Observable<HttpResponse<salesman>> {
        return this.http.get<salesman>(environment.apiEndpoint + `/api/salesmen/${id}`, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Update a salesman by ID
     *
     * This method doesn't expect any request body.
     */
    apiSalesmenIdPut(id: string, body: salesman): Observable<HttpResponse<any>> {
        return this.http.put(environment.apiEndpoint + `/api/salesmen/${id}`, body, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Add a new record
     *
     * This method doesn't expect any request body.
     */
    apiEvaluationRecordsPost(body): Observable<HttpResponse<any>> {
        return this.http.post(environment.apiEndpoint + '/api/evaluationRecords', body, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * List all evaluation records
     *
     * This method doesn't expect any request body.
     */

    apiEvaluationRecordsGet(): Observable<HttpResponse<record[]>> {
        return this.http.get<record[]>(environment.apiEndpoint + `/api/evaluationRecords`, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * List evaluation records by ID
     *
     * This method doesn't expect any request body.
     */

    apiEvaluationRecordsIdGet(id: string): Observable<HttpResponse<record[]>> {
        return this.http.get<record[]>(environment.apiEndpoint + `/api/evaluationRecords/${id}`, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Delete a record by ID
     *
     * This method doesn't expect any request body.
     */
    apiEvaluationRecordsIdDelete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete(environment.apiEndpoint + `/api/evaluationRecords/${id}`, {
            observe: 'response',
            withCredentials: true
        })
    }

    /**
     * Update a record by ID
     *
     * This method doesn't expect any request body.
     */
    apiEvaluationRecordsIdPut(id: string, body: record): Observable<HttpResponse<any>> {
        return this.http.put(environment.apiEndpoint + `/api/evaluationRecords/${id}`, body, {
            observe: 'response',
            withCredentials: true
        })
    }

}

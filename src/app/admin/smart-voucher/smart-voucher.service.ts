import {Injectable} from '@angular/core';
// import {ApiHttpService} from 'ngx-api-utils';
import {HttpParams} from '@angular/common/http';
import {SmartVoucherListResponse} from './models/smart-voucher-list-response.interface';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartVoucherService {
  apiPath = '/api/smartVouchers';

  // constructor(private apiHttp: ApiHttpService) {}

  getAll(pageSize: number, currentPage: number, title: string) {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('currentPage', currentPage.toString())
      .set('title', title);
    console.log(params);

    // return this.apiHttp.get<SmartVoucherListResponse>(this.apiPath, {params: params});

    const mockedData: SmartVoucherListResponse = {
      Vouchers: [
        {
          Id: '1',
          Title: 'Demo Voucher Campaign (is under development)',
          Status: 'Active',
          CreationDate: new Date(),
          Partner: 'Your company name'
        }
      ],
      PagedResponse: {
        CurrentPage: 1,
        TotalCount: 1
      }
    };

    return of(mockedData);
  }
}
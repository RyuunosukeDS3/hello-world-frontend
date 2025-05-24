import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HelloService],
    });
    service = TestBed.inject(HelloService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return message from getMessage()', () => {
    const mockResponse = { message: 'Hello Devs!' };

    service.getMessage().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/hello');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

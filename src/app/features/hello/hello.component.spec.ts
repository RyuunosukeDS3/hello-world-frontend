import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let helloServiceSpy: jasmine.SpyObj<HelloService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const helloSpy = jasmine.createSpyObj('HelloService', ['getMessage']);
    const rSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [HelloComponent],
      providers: [
        { provide: HelloService, useValue: helloSpy },
        { provide: Router, useValue: rSpy },
      ],
    }).compileComponents();

    helloServiceSpy = TestBed.inject(
      HelloService
    ) as jasmine.SpyObj<HelloService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set message from service on success', () => {
    const mockResponse = { message: 'Hello Devs!' };
    helloServiceSpy.getMessage.and.returnValue(of(mockResponse));

    fixture.detectChanges();

    expect(component.message).toBe(mockResponse.message);
  });

  it('should set error message on service failure', () => {
    helloServiceSpy.getMessage.and.returnValue(
      throwError(() => new Error('Service failed'))
    );

    fixture.detectChanges();

    expect(component.message).toBe('Failed to load message');
  });

  it('should navigate to /workshop when goToWorkshop is called', () => {
    component.goToWorkshop();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/workshop']);
  });
});

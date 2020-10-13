
import { TestBed, getTestBed , inject,async} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
 import{ HttpClientModule} from '@angular/common/http';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
var chai = require('chai');
var expect = chai.expect;
describe('HeroService', () => {
  let injector: TestBed;
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [HeroService,MessageService],
    });

    injector = getTestBed();
    service = injector.inject(HeroService);
    httpMock = injector.inject(HttpTestingController);
  });
//   it('should be created',() => {
//     expect(service).toBeTruthy();
//   });


// it('should call getHeroes method', () => {
//     expect(service.getHeroes()).to.equal("method is called");
//   });

  const dummyHeroesListResponse = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  
  it('getHeroes should return data', () => {
      service.getHeroes().subscribe((res) => {
        expect(res).toEqual(dummyHeroesListResponse);
      });
  
      // const req = httpMock.expectOne('api/heroes');
      // expect(req.request.method).toBe('GET');
      // req.flush(dummyHeroesListResponse);
    });

//   afterEach(() => {
//     httpMock.verify();
//   });  
});
import {
  async,
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  RequestMethod,
} from '@angular/http';

import { MoreHttpRequestsComponent } from './more-http-requests.component';

describe('MoreHttpRequestsComponent', () => {
  let component: MoreHttpRequestsComponent;
  let fixture: ComponentFixture<MoreHttpRequestsComponent>;
  let backend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreHttpRequestsComponent ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        { provide: Http,
          useFactory: (connectionBackend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
                         return new Http(connectionBackend, defaultOptions);
                       },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(inject([MockBackend], (mockBackend) => {
    fixture = TestBed.createComponent(MoreHttpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    backend = mockBackend;
  })));

  it('performs a POST', async(() => {
    backend.connections.subscribe(c => {
      expect(c.request.url)
      .toBe('http://jsonplaceholder.typicode.com/posts');
      expect(c.request.method).toBe(RequestMethod.Post);
      c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
    });
    component.makePost();
    expect(component.data).toEqual({'response': 'OK'});
  }));

  it('performs a DELETE', async(() => {
    backend.connections.subscribe(c => {
      expect(c.request.url)
      .toBe('http://jsonplaceholder.typicode.com/posts/1');
      expect(c.request.method).toBe(RequestMethod.Delete);
      c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
    });

    component.makeDelete();
    expect(component.data).toEqual({'response': 'OK'});
  }));

  it('sends correct headers', async(() => {
    backend.connections.subscribe(c => {
      expect(c.request.url)
      .toBe('http://jsonplaceholder.typicode.com/posts/1');
      expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
      expect(c.request.headers.get('X-API-TOKEN')).toEqual('ng-book');
      c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
    });

    component.makeHeaders();
    expect(component.data).toEqual({'response': 'OK'});
  }));

});

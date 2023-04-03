import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CharacterService } from './character.service';


interface Character {
  name: string;
}

interface ApiResponse {
  results: Character[];
}

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService]
    });

    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the list of characters from the API via GET', () => {
    const dummyData: ApiResponse = {
      results: [
        { name: 'Luke Skywalker' },
        { name: 'Leia Organa' }
      ]
    };

    service.getCharacters().subscribe((data: Character[]) => {
      expect(dummyData.results[0].name).toEqual('Luke Skywalker');
      expect(dummyData.results[1].name).toEqual('Leia Organa');
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});

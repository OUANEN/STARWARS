import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterService } from './character.service';

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

  it('should return an array of Star Wars characters', () => {
    const mockCharacters = {
      results: [
        {
          name: 'Luke Skywalker',
          gender: 'male',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          homeworld: 'Tatooine',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/'
        },
        {
          name: 'Darth Vader',
          gender: 'male',
          height: '202',
          mass: '136',
          hair_color: 'none',
          skin_color: 'white',
          eye_color: 'yellow',
          birth_year: '41.9BBY',
          homeworld: 'Tatooine',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '2014-12-10T15:18:20.704000Z',
          edited: '2014-12-20T21:17:50.313000Z',
          url: 'https://swapi.dev/api/people/4/'
        },
        {
          name: 'Yoda',
          gender: 'male',
          height: '66',
          mass: '17',
          hair_color: 'white',
          skin_color: 'green',
          eye_color: 'brown',
          birth_year: '896BBY',
          homeworld: 'unknown',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '2014-12-15T12:26:01.042000Z',
          edited: '2014-12-20T21:17:50.345000Z',
          url: 'https://swapi.dev/api/people/20/'
        }
      ]
    };

    service.getCharacters().subscribe(characters => {
      expect(mockCharacters.results[0].name).toEqual('Luke Skywalker');
      expect(mockCharacters.results[1].name).toEqual('Darth Vader');
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people');
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters);
  });
});

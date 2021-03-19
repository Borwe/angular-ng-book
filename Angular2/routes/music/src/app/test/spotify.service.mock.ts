import {SpyObject} from './test.helpers';
import {SpotifyService} from '../spotify.service';

export class MockSpotifyService extends SpyObject {
  getAlbumSpy;
  getArtistSpy;
  getTrackSpy;
  searchTrackSpy;
  mockObservable;
  fakeResponse;

  constructor() {
    super(SpotifyService);

    this.fakeResponse = null;
    this.getAlbumSpy = this.spy('getAlbum').andReturn(this);
    this.getArtistSpy = this.spy('getArtist').andReturn(this);
    this.getTrackSpy = this.spy('getTrack').andReturn(this);
    this.searchTrackSpy = this.spy('searchTrack').andReturn(this);
  }

  subscribe(callback) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }

  getProviders(): Array<any> {
    return [{ provide: SpotifyService, useValue: this }];
  }
}

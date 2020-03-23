import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WebapiService } from 'app/core/webapi.service';
import { AlbumModel } from './album.model';


@Injectable({ providedIn: 'root' })
export class AlbumsService {
	constructor(private webapi: WebapiService) {
		console.log('AlbumsService constructor')
	}

	getAlbums(): Observable<AlbumModel[]> {
		return this.webapi.get<AlbumModel[]>('albums')
	}

}
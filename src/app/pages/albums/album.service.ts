import { Injectable } from '@angular/core';
import {
	EntityCollectionServiceBase,
	EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { AlbumModel } from './album.model';

@Injectable({ providedIn: 'root' })
export class AlbumService extends EntityCollectionServiceBase<AlbumModel> {
	constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
		super('Album', serviceElementsFactory);
	}
}
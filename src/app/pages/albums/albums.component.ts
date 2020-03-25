import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from './album.model';
import { AlbumService } from './album.service';

@Component({
	selector: 'app-albums',
	templateUrl: './albums.component.html',
	styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

	loaded$: Observable<boolean>;
	albums$: Observable<AlbumModel[]>;

	constructor(private albumService: AlbumService) {
		this.loaded$ = albumService.loaded$
		this.albums$ = albumService.entities$
	}

	ngOnInit() {
		this.albumService.getAll()
	}

	deleteAlbum(album: AlbumModel): void {
		this.albumService.delete(album, {isOptimistic: false})
	}
}
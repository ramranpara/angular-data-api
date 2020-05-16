import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albums;
  constructor(
    private photoservice: PhotosService,
  ) { }

  ngOnInit() {
    this.albums = this.photoservice.getAlbums();
  }

}

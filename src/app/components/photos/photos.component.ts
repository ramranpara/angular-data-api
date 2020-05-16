import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
  photos;
  albumId;
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.photosService.getPhotos(this.albumId);
  }

}

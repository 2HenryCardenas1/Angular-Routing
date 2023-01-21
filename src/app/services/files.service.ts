import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

interface File {
  originalname: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.API_URL}/api/files`;
  getFile(name: string, url: string, type: string) {
    // files = type blob
    return this.http.get(url, { responseType: 'blob' })
      .pipe(
        tap(
          (content) => {
            const blob = new Blob([content], { type });
            saveAs(blob, name);
          }
        ),
        map(() => true)
      );
  }
  //DTO = Data Transfer Object
  uploadFiles(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(`${this.apiUrl}/upload`, dto,
      //{
      //headers: {
      //'Content-Type': 'multipart/form-data'
      //}
      //}
    );

  }
}

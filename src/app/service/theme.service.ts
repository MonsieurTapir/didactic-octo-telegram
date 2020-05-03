import { Injectable } from '@angular/core';
import {ThemeList} from '../model/theme.model';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeList: ThemeList;
  constructor(private http: HttpClient) {
    this.http.get<ThemeList>('/assets/themes.json')
      .pipe(first())
      .subscribe(list => {
        this.themeList = list;
        this.setDefaultTheme();
      });
  }
  private setDefaultTheme() {
    this.setTheme(this.themeList.default);
  }
  public setTheme(name: string) {
    const theme = this.themeList.themes.find(it => it.name === name);
    if (theme === undefined) {
      throw Error(`Theme ${name} could not be found`);
    }
    Object.entries(theme).forEach(([key, value]) => {
      document.body.style.setProperty('--' + key, value);
    });
  }
}

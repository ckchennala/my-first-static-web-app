import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} from angular !!!!!  Message form {{message}} </div>`,
})
export class AppComponent {
  value = 'World';
  message = 'default';
  constructor(private http: HttpClient) {
    this.http.get('/api/displayhttpmessageText')
      .subscribe((resp: any) => this.message = resp.text);
  }
}

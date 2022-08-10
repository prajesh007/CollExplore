import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-image', "url(\"assets/img/account/signin-bg.jpg\") ");
  }
  ngOnDestroy(): void{
    this.renderer.removeStyle(document.body, 'background-image');
  }
}

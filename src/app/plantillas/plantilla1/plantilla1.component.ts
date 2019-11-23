import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.component.html',
  styleUrls: ['./plantilla1.component.scss']
})
export class Plantilla1Component implements OnInit {

	plantilla: any={
		A: 2,
		B: 1,
		C: 2
	}

  constructor() { 
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { NumberOnlyDirective } from './app.directive';

const pi = 3.14;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NumberOnlyDirective]
})

export class AppComponent implements OnInit {
  shapeNames: any = []
  unitNames: any = []
  shape = 0;
  perimeter = 0;
  area = 0;
  type = "perimeter";
  unit = "m";
  width = 0;
  height = 0;
  radius = 0;
  lineA = 0;
  lineB = 0;
  lineC = 0;
  done = false;

  constructor(private _api: ApiService) {}
  
  ngOnInit() {
    this._api.getShapes().subscribe((res: any) => {
      if(res?.length > 0) this.shapeNames = res
      else alert("Error while getting shapes")
    }, e => {
      console.log(e)
      alert("Error while getting shapes")
    })
    this._api.getUnits().subscribe((res: any) => {
      if(res?.length > 0) this.unitNames = res
      else alert("Error while getting units")
    }, e => {
      console.log(e)
      alert("Error while getting units")
    })
  }

  setShape(event: Event, _shape: number) {
    this.shape = _shape;
  }

  setUnit(_unit: string) {
    this.unit = _unit;
  }

  setType(_type: string) {
    this.type = _type;
  }

  setWidth(_width: number) {
    this.width = _width;
  }

  setHeight(_height: number) {
    this.height = _height;
  }

  setRadius(_radius: number) {
    this.radius = _radius;
  }

  setLineA(_line: number) {
    this.lineA = _line;
  }
  setLineB(_line: number) {
    this.lineB = _line;
  }
  setLineC(_line: number) {
    this.lineC = _line;
  }

  calc(event: Event) {
    if(this.shapeNames.length > 0 && this.unitNames.length > 0) {
      if(this.shape === 0) {
        if(this.type === "perimeter")
          this.perimeter = (this.width+this.height)*2
        if(this.type === "area")
          this.area = this.width*this.height
      }
      if(this.shape === 1) {
        if(this.type === "perimeter")
          this.perimeter = this.width*4
        if(this.type === "area")
          this.area = this.width*this.width
      }
      if(this.shape === 2) {
        if(this.type === "perimeter")
          this.perimeter = this.radius * 2 * pi
        if(this.type === "area")
          this.area = this.radius*this.radius*pi
      }
      if(this.shape === 3) {
        if(this.type === "perimeter")
          this.perimeter = this.lineA+this.lineB+this.lineC
        if(this.type === "area")
          this.area = 0.5*this.lineA*this.height
      }
      if(this.type === "perimeter" || this.type === "area")
        this.done = true
    }
    else alert("Error while getting data")
  }
}

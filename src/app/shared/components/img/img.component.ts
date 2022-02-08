import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/default.png';

  constructor() {
    // before render
    // No async -- once time
    console.log("constructor", "imgValue =>", this.img);
  }

ngOnChanges() {
  // BEFORE -during  RENDER
  // CHANGE INPUTS
  console.log("ngOnchanges", "imgValue =>", this.img);
}

  ngOnInit(): void {
    //before render
    //async  - podemos hacer fetch y esas cosas -- once time

  }

ngAfterViewInit() {
  //after render
  //handler children
  console.log('ngAfterViewInit');
}

ngOnDestroy() {
  //delete

}

  imgError() {
  this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}

/*
Ciclo :

Constructor: cuando se corre una instancia

ngOnChanges : corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.

ngOnInit: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.

ngAfcterViewInit: corre cuando los hijos de ese componentes se han renderizado.

NgOnDestroy: Corre cuando se elimina el componente.

*/

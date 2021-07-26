import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { createOutput } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  internalClick(){
    console.log('Click dentro de nuestro botón')
    this.onClick.emit();
  }

}

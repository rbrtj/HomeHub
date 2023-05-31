import { Component } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html',
    standalone: true,
    imports: [PropertyCardComponent, NgFor]
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      ID: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 2,
      Name: 'Sea House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 3,
      Name: 'Beach House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 3,
      Name: 'Beach House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 3,
      Name: 'Beach House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 3,
      Name: 'Beach House',
      Type: 'House',
      Price: 12000,
    },
    {
      ID: 3,
      Name: 'Beach House',
      Type: 'House',
      Price: 12000,
    },

  ];
}

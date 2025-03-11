import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';



interface MenuOption{
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink],
  templateUrl: './side-menu-options.component.html',
  // styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {
  gifService = inject (GifService)

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populars',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Searching',
      subLabel: 'Search Gifs',
      route: '/dashboard/search'
    },
  ]
}



import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Producs } from './pages/public/producs/producs';
import { Contac } from './pages/public/contac/contac';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Register } from './pages/public/register/register';
import { Login } from './pages/public/login/login';
import { Cart } from './pages/public/cart/cart';
import { Productdetail } from './pages/public/productdetail/productdetail';
import { Createproducts } from './pages/private/createproducts/createproducts';
import { Alluser } from './pages/private/alluser/alluser';

export const routes: Routes = [

    {path:'', component : Home},
    {path:'producs', component : Producs},
    {path:'contac', component : Contac},
    {path:'register', component : Register},
    {path:'login', component : Login},
    {path:'cart', component : Cart},
    {path:'product/:id', component : Productdetail},
    {path:'crearproducto', component : Createproducts},
    {path:'allUser', component : Alluser},




    {path:'dashboard', component : Dashboard}

    
];

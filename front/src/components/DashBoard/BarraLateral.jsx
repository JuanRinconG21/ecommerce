import React, { useState } from "react";

const BarraLateral = () => {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          GameStock <sup>2</sup>
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Usuarios</div>

      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-users"></i>
          <span>Usuarios del Sistema</span>
        </a>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Categorias</div>
      <li class="nav-item">
        <a class="nav-link " href="#">
          <i class="fas fa-plus-square"></i>
          <span>Agregar Categoria</span>
        </a>
        <a class="nav-link " href="#">
          <i class="fas fa-th-list"></i>
          <span>Ver Categorias</span>
        </a>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
      <div class="sidebar-heading">Productos</div>
      <li class="nav-item">
        <a class="nav-link " href="#">
          <i class="fas fa-plus-square"></i>
          <span>Agregar Producto</span>
        </a>
        <a class="nav-link " href="#">
          <i class="fas fa-th-list"></i>
          <span>Ver Productos</span>
        </a>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <div class="sidebar-heading">Ecommerce</div>
      <li class="nav-item">
        <a class="nav-link " href="#">
          <i class="fas fa-shopping-cart"></i>
          <span>Ver Pedidos</span>
        </a>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <div class="sidebar-heading">Reportes</div>
      <li class="nav-item">
        <a class="nav-link " href="#">
          <i class="fas fa-chart-line"></i>
          <span>Reportes</span>
        </a>
      </li>
    </ul>
  );
};

export default BarraLateral;

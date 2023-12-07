import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BarraLateral = () => {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink to="/DashBoard/">
        <a class="sidebar-brand d-flex align-items-center justify-content-center">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            GameStock <sup>2</sup>
          </div>
        </a>
      </NavLink>

      <hr class="sidebar-divider my-0" />

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Usuarios</div>

      <li class="nav-item">
        <NavLink to="/DashBoard/">
          <a class="nav-link">
            <i class="fas fa-users"></i>
            <span>Usuarios del Sistema</span>
          </a>
        </NavLink>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Categorias</div>
      <li class="nav-item">
        <NavLink to="/DashBoard/AgregarCategoria">
          <a class="nav-link">
            <i class="fas fa-plus-square"></i>
            <span>Agregar Categoria</span>
          </a>
        </NavLink>
        <NavLink to="/DashBoard/VerCategorias">
          <a class="nav-link ">
            <i class="fas fa-th-list"></i>
            <span>Ver Categorias</span>
          </a>
        </NavLink>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />
      <div class="sidebar-heading">Productos</div>
      <li class="nav-item">
        <NavLink to="/DashBoard/AgregarProductos">
          <a class="nav-link">
            <i class="fas fa-plus-square"></i>
            <span>Agregar Producto</span>
          </a>
        </NavLink>
        <NavLink to="/DashBoard/VerProductos">
          <a class="nav-link">
            <i class="fas fa-th-list"></i>
            <span>Ver Productos</span>
          </a>
        </NavLink>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
      <div class="sidebar-heading">Ecommerce</div>
      <li class="nav-item">
        <NavLink to="/DashBoard/Pedidos">
          <a class="nav-link ">
            <i class="fas fa-shopping-cart"></i>
            <span>Ver Pedidos</span>
          </a>
        </NavLink>
      </li>
      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default BarraLateral;

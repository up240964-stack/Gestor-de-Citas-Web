"use client";

import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#1e293b",
        color: "#ffffff",
        padding: "24px 16px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        MediControl
      </h2>

      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <li>
            <Link
              href="/"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              href="/paciente"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Vista paciente
            </Link>
          </li>

          <li>
            <Link
              href="/pacientes"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Pacientes
            </Link>
          </li>

          <li>
            <Link
              href="/citas"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Citas
            </Link>
          </li>

          <li>
            <Link
              href="/doctores"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Doctores
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
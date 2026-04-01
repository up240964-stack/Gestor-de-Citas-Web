import Navbar from "@/app/components/NavBar";

export default function PacientePage() {
  const paciente = {
    nombre: "Eduardo Rubio",
    edad: 19,
    telefono: "449 123 4567",
    correo: "eduardo@email.com",
    doctor: "Dra. Mariana López",
    especialidad: "Medicina General",
    proximaCita: "30 de marzo de 2026",
    horaCita: "10:30 AM",
    estado: "Confirmada",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "14px",
    color: "#1f2937",
  };

  const infoRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "15px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f6fb",
        marginLeft: "220px",
      }}
    >
      <Navbar />

      <main style={{ padding: "30px" }}>
        <section style={{ marginBottom: "25px" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#111827",
              marginBottom: "8px",
            }}
          >
            Bienvenido, {paciente.nombre}
          </h1>
          <p style={{ color: "#6b7280", fontSize: "16px" }}>
            Aquí puedes consultar tu información y tus próximas citas médicas.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div style={cardStyle}>
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>Próxima cita</p>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#111827" }}>
              {paciente.proximaCita}
            </h2>
            <p style={{ marginTop: "8px", color: "#374151" }}>
              {paciente.horaCita}
            </p>
          </div>

          <div style={cardStyle}>
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>Doctor asignado</p>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#111827" }}>
              {paciente.doctor}
            </h2>
            <p style={{ marginTop: "8px", color: "#374151" }}>
              {paciente.especialidad}
            </p>
          </div>

          <div style={cardStyle}>
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>Estado</p>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#16a34a" }}>
              {paciente.estado}
            </h2>
            <p style={{ marginTop: "8px", color: "#374151" }}>
              Tu cita está registrada correctamente
            </p>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={titleStyle}>Información del paciente</h3>

            <div style={infoRowStyle}>
              <span>Nombre</span>
              <span>{paciente.nombre}</span>
            </div>

            <div style={infoRowStyle}>
              <span>Edad</span>
              <span>{paciente.edad} años</span>
            </div>

            <div style={infoRowStyle}>
              <span>Teléfono</span>
              <span>{paciente.telefono}</span>
            </div>

            <div style={infoRowStyle}>
              <span>Correo</span>
              <span>{paciente.correo}</span>
            </div>

            <div style={{ ...infoRowStyle, borderBottom: "none" }}>
              <span>Especialidad</span>
              <span>{paciente.especialidad}</span>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Acciones rápidas</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                }}
              >
                Ver citas
              </button>

              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                }}
              >
                Agendar cita
              </button>

              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#f59e0b",
                  color: "#ffffff",
                }}
              >
                Editar perfil
              </button>

              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#ef4444",
                  color: "#ffffff",
                }}
              >
                Cancelar cita
              </button>
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Historial reciente</h3>

          <div style={{ display: "grid", gap: "12px" }}>
            <div
              style={{
                padding: "14px",
                borderRadius: "12px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <strong>12 de marzo de 2026</strong>
              <p style={{ marginTop: "6px", color: "#4b5563" }}>
                Consulta general con Dra. Mariana López.
              </p>
            </div>

            <div
              style={{
                padding: "14px",
                borderRadius: "12px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            >
              <strong>20 de febrero de 2026</strong>
              <p style={{ marginTop: "6px", color: "#4b5563" }}>
                Revisión de seguimiento.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
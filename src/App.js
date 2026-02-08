import React, { useState } from 'react';

function App() {
  // Estado para controlar la navegación: 'registro', 'login' o 'tablero'
  const [pantalla, setPantalla] = useState('registro');

  // Datos basados fielmente en tu captura de Jira
  const tareasEnCurso = [
    { 
      id: "TMW-001", 
      titulo: "Registro de usuario", 
      etiqueta: "FRONT-END", 
      codigo: "TMW-8" 
    },
    { 
      id: "TMW-002", 
      titulo: "Inicio de sesión", 
      etiqueta: "FRONT-END", 
      codigo: "TMW-9" 
    }
  ];

  // --- ESTILOS INTERNOS ---
  const estilos = {
    centrado: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f5f7' },
    caja: { backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center', width: '350px' },
    input: { display: 'block', width: '90%', marginBottom: '15px', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', margin: '0 auto 15px auto' },
    boton: { width: '100%', padding: '12px', backgroundColor: '#0052cc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
    contenedor: { backgroundColor: '#f4f5f7', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' },
    columna: { backgroundColor: '#ebecf0', borderRadius: '5px', width: '300px', padding: '12px', minHeight: '500px' },
    tarjeta: { backgroundColor: 'white', borderRadius: '3px', padding: '12px', marginBottom: '10px', boxShadow: '0 1px 1px rgba(9,30,66,.25)' },
    tag: { backgroundColor: '#deebff', color: '#0052cc', fontSize: '11px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '3px', display: 'inline-block' },
    avatar: { backgroundColor: '#0052cc', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }
  };

  // --- RENDERIZADO CONDICIONAL ---

  // 1. Pantalla de Registro
  if (pantalla === 'registro') {
    return (
      <div style={estilos.centrado}>
        <div style={estilos.caja}>
          <h2 style={{ color: '#172b4d' }}>Crear Cuenta</h2>
          <p style={{ color: '#5e6c84', marginBottom: '20px' }}>Regístrate para gestionar tus tareas</p>
          <input type="text" placeholder="Nombre completo" style={estilos.input} />
          <input type="email" placeholder="Correo electrónico" style={estilos.input} />
          <input type="password" placeholder="Contraseña" style={estilos.input} />
          <button onClick={() => setPantalla('login')} style={estilos.boton}>Registrarse</button>
          <p style={{ marginTop: '20px', fontSize: '14px' }}>
            ¿Ya tienes cuenta? <span onClick={() => setPantalla('login')} style={{ color: '#0052cc', cursor: 'pointer', fontWeight: 'bold' }}>Inicia sesión</span>
          </p>
        </div>
      </div>
    );
  }

  // 2. Pantalla de Inicio de Sesión
  if (pantalla === 'login') {
    return (
      <div style={estilos.centrado}>
        <div style={estilos.caja}>
          <h2 style={{ color: '#172b4d' }}>Bienvenido</h2>
          <p style={{ color: '#5e6c84', marginBottom: '20px' }}>Ingresa a tu tablero de gestión</p>
          <input type="text" placeholder="Usuario o correo" style={estilos.input} />
          <input type="password" placeholder="Contraseña" style={estilos.input} />
          <button onClick={() => setPantalla('tablero')} style={estilos.boton}>Entrar al Gestor</button>
          <p style={{ marginTop: '20px', fontSize: '14px' }}>
            ¿No tienes cuenta? <span onClick={() => setPantalla('registro')} style={{ color: '#0052cc', cursor: 'pointer', fontWeight: 'bold' }}>Regístrate</span>
          </p>
        </div>
      </div>
    );
  }

  // 3. Pantalla del Tablero (Gestor de Tareas)
  return (
    <div style={estilos.contenedor}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #dfe1e6', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#172b4d', fontSize: '24px' }}>Plataforma web para gestión de tareas</h1>
        <button onClick={() => setPantalla('login')} style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', border: '1px solid #ccc' }}>Cerrar Sesión</button>
      </header>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Columna EN CURSO */}
        <div style={estilos.columna}>
          <h3 style={{ fontSize: '12px', color: '#5e6c84', marginBottom: '15px' }}>EN CURSO {tareasEnCurso.length}</h3>
          
          {tareasEnCurso.map(tarea => (
            <div key={tarea.id} style={estilos.tarjeta}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#172b4d' }}>
                <strong>{tarea.id}</strong> {tarea.titulo}
              </p>
              <span style={estilos.tag}>{tarea.etiqueta}</span>
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#5e6c84' }}>🔖 {tarea.codigo}</span>
                <div style={estilos.avatar}>DR</div>
              </div>
            </div>
          ))}
        </div>

        {/* Columnas Vacías para completar el diseño del tablero */}
        <div style={{ ...estilos.columna, opacity: 0.6 }}>
          <h3 style={{ fontSize: '12px', color: '#5e6c84' }}>EN REVISIÓN 0</h3>
        </div>
        <div style={{ ...estilos.columna, opacity: 0.6 }}>
          <h3 style={{ fontSize: '12px', color: '#5e6c84' }}>FINALIZADO 0</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
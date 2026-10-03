// src/App.jsx
import React, { useState } from 'react';
import { Queue } from './models/Queue';
import './App.css';

const initialQueue = new Queue();
initialQueue.enqueue({ name: 'Carlos Pérez', amount: 200, time: '10:00 AM' });
initialQueue.enqueue({ name: 'María Gómez', amount: 500, time: '10:05 AM' });

function App() {
  const [atmQueue, setAtmQueue] = useState(initialQueue);
  const [form, setForm] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) {
      alert('Por favor complete todos los campos');
      return;
    }
    const newQueue = new Queue();
    newQueue.items = [...atmQueue.items, { 
      name: form.name, 
      amount: form.amount, 
      time: newಾಯಿtoLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }];
    setAtmQueue(newQueue);
    setForm({ name: '', amount: '' });
  };

  const handleAttendClient = () => {
    if (atmQueue.items.length === 0) {
      alert('La cola está vacía, no hay clientes por atender');
      return;
    }
    const newQueue = new Queue();
    newQueue.items = [...atmQueue.items];
    const attended = newQueue.dequeue();
    setAtmQueue(newQueue);
    alert(`Cliente atendido: ${attended.name} - Retiro: $${attended.amount}`);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
      
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '26px', margin: '0 0 8px 0', color: '#222' }}>
          Desafío 05: Cola Cajero Automático
        </h1>
        <span style={{ fontSize: '15px', color: '#fff', background: '#28a745', padding: '4px 12px', borderRadius: '12px', fontWeight: 'bold' }}>
          Queue - FIFO
        </span>
      </div>

      {/* Formulario */}
      <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #dee2e6' }}>
        <h3 style={{ marginTop: '0', color: '#495057', marginBottom: '15px' }}>Nuevo Cliente en la Cola</h3>
        <form onSubmit={handleAddClient} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" name="name" placeholder="Nombre del Cliente" value={form.name} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="number" name="amount" placeholder="Monto a Retirar ($)" value={form.amount} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ background: '#007BFF', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Hacer Fila (Enqueue)
          </button>
        </form>
      </div>

      {/* Acciones y Contador */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={handleAttendClient} style={{ background: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Atender Siguiente Cliente (Dequeue)
        </button>
        <span style={{ fontSize: '16px', color: '#333' }}><strong>En espera:</strong> {atmQueue.size()}</span>
      </div>

      {/* Listado de la Cola */}
      <h3 style={{ color: '#333', borderBottom: '2px solid #dee2e6', paddingBottom: '8px' }}>Estado de la Cola (Primero en llegar, primero en la salida)</h3>
      {atmQueue.items.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No hay clientes en la cola.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {atmQueue.getItems().map((client, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '12px', borderRadius: '6px', background: index === 0 ? '#e8f5e9' : '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              {index === 0 && <span style={{ color: '#2e7d32', fontWeight: 'bold', fontSize: '12px', display: 'block', marginBottom: '6px' }}>[ EN VENTANILLA / SIGUIENTE EN SER ATENDIDO ]</span>}
              <div><strong>Posición en Fila:</strong> #{index + 1}</div>
              <div><strong>Cliente:</strong> {client.name}</div>
              <div><strong>Monto Solicitado:</strong> ${client.amount}</div>
              <div><strong>Hora de llegada:</strong> {client.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
# Challenge 05: Cola para un Cajero Automático (Queue - FIFO)

Aplicación web desarrollada en **React** con **Vite** que implementa una estructura de datos lineal tipo **Cola (Queue)** bajo el principio **FIFO** (*First In, First Out* - El primero en llegar es el primero en ser atendido), aplicada a la simulación de atención en la fila de un cajero automático.

## 🚀 Tecnologías utilizadas
* **React** (Componentes funcionales y Hooks como `useState`)
* **Vite** (Entorno de desarrollo rápido)
* **JavaScript Moderno (ES6+)** con programación orientada a objetos para la clase `Queue`.

---

## 📋 Funcionalidades
1. **Hacer Fila / Encolar (Enqueue):** Permite registrar a un nuevo cliente solicitando su nombre y el monto que desea retirar, registrando automáticamente la hora de llegada.
2. **Atender Cliente / Desencolar (Dequeue):** Remueve y atiende al primer cliente que se encuentra en la parte frontal de la fila.
3. **Visualización en tiempo real:** Muestra el listado de clientes en espera, indicando claramente la posición, quién está **[ EN VENTANILLA ]** y el contador total de personas en espera.
4. **Validaciones:** Control de campos vacíos y alertas cuando la cola se encuentra vacía.

---

## ⚙️ Instrucciones de Instalación y Ejecución local

Sigue estos pasos para clonar y correr el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU-USUARIO/desafio-cola-cajero.git](https://github.com/TU-USUARIO/desafio-cola-cajero.git)
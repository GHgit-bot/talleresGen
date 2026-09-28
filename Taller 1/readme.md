# Sistema de pedidos en Javascript

Este taller es una simulación básica de un **sistema de pedidos** desarrollado en JavaScript.
Permite gestionar la información del cliente, el contenido del pedido, el estado del envío y el calculo matematico de los costos incluyendo subtotal, domicilio, propina y total.

---

# Descripción del proyecto

El código aplica aplica conceptos fundamentales de JavaScript para gestionar el flujo de compra de un usuario:

- **Estructuras de datos:** Manejo de objetos (`usuario`, `ficha`, `valor`) y arreglos (`pedido`).
- **Manipulación de arreglos:** Uso de métodos como `.push()`, `.pop()`, `.join()` y la propiedad `.length`.
- **Referencias de objetos:** Copia e interacción entre objetos relacionados.
- **Cálculos matemáticos:** Operaciones aritméticas y cálculo de porcentajes para desglose de cobros.

---

# Tecnologías

- **Lenguaje:** JavaScript (ES6+)
- **Entorno de ejecución:** Node.js / Consola del navegador / Code runner

---

# Estructura

1. **Gestión de Datos:** Se definen los datos iniciales del cliente, productos y costo del domicilio.
2. **Actualización Dinámica:** Se simula la adición y eliminación de un producto extra en el pedido utilizando `.push()` y `.pop()`.
3. **Seguimiento del Estado:** Se actualiza el estado del pedido a `"En camino"`.
4. **Cálculo de Facturación:** Se calcula el total a pagar aplicando la fórmula:
   $$\text{Total} = \text{Subtotal} + (\text{Domicilio} \times (1 + \text{Propina}))$$

---

## Preguntas de Reflexión y Análisis

### 1. ¿Por qué la propina se guardó como `const` y no como `let`?

La propina se declara con `const` porque su porcentaje (10%) es un **valor fijo constante** que no debe reasignarse ni cambiar su tipo durante la ejecución de este script. Usar `const` previene modificaciones accidentales en el código y mejora la seguridad de las variables.

### 2. ¿Qué tipo de dato tenía el subtotal cuando dio mal el resultado y qué tipo necesitabas?

El subtotal era inicialmente de tipo `string` (cadena de texto, ej. `"50000"`). Al intentar sumarlo con un número mediante el operador `+`, JavaScript realizó una **concatenación de texto** en lugar de una adición matemática, produciendo un resultado incorrecto. Para solucionarlo, se requería un tipo de dato **`number`** (ej. `50000`), garantizando que la operación fuera aritmética.

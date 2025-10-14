# Estructura del Negocio

Este documento describe la estructura del negocio y las funcionalidades del sistema de información para el alquiler de bicicletas y eventos de ciclopaseo.

## Descripción General

El SENA ha implementado un sistema de información para gestionar el alquiler de bicicletas y la organización de eventos de ciclopaseo. Este sistema busca promover el uso de bicicletas como medio de transporte y facilitar la administración de recursos de movilidad.

### Objetivos:

- Facilitar el alquiler de bicicletas para funcionarios y aprendices.
- Promover eventos de ciclopaseo.
- Controlar la disponibilidad de bicicletas y la ubicación de eventos.

## Roles y Funciones

### Usuario (Funcionario/Aprendiz)

Los usuarios tienen las siguientes funcionalidades:

- **Alquilar bicicletas**:
  - Alquilar bicicletas por tiempo (1 hora).
  - Aplicar descuentos automáticos según el estrato socioeconómico.
  - Marcar bicicletas como no disponibles al alquilarlas.
  - Generar tarifa adicional si se excede el tiempo de alquiler.
  - Marcar bicicletas como disponibles al entregarlas.
- **Participar en eventos de ciclopaseo**:
  - Inscribirse en eventos mediante un botón de "Quiero participar".
  - Visualizar detalles del evento como lugar, descripción y ubicación.

### Administrador

El administrador tiene un rol más amplio con las siguientes funcionalidades:

- **Gestión de bicicletas**:
  - Crear, editar y eliminar bicicletas.
  - Cambiar la ubicación fija de las bicicletas desde su dashboard.
- **Gestión de eventos**:
  - Crear y publicar eventos de ciclopaseo.
  - El evento incluye la fecha y el lugar donde se va a realizar.
  - Visualizar la lista de usuarios inscritos en los eventos.
- **Visualización en mapa interactivo**:
  - Mostrar bicicletas alquiladas, disponibles y la ubicación de eventos.
  - Utilizar tecnología como Leaflet para el mapa interactivo.
- **Cálculo de ganancias**:
  - Calcular ganancias mensuales basadas en el precio por hora de alquiler y el sobrecargo adicional si se excede el tiempo de alquiler de los usuarios.

## Variables Clave

### Usuarios

- **Id**: Identificador único del usuario.
- **Nombre**: Nombre completo del usuario.
- **Correo Electrónico**: Para autenticación y comunicación.
- **Contraseña**: Para autenticación (almacenada de forma segura).
- **Estrato Socioeconómico**: Para aplicar descuentos en el alquiler.
- **Rol**: Aprendiz o Funcionario (el rol de Administrador será asignado desde el backend).

### Bicicletas

- **Id**: Identificador único.
- **Marca**: Marca de la bicicleta.
- **Color**: Color de la bicicleta.
- **Estado**: Disponible o no disponible.
- **Precio de alquiler**: Precio por hora.
- **Ubicación**: Latitud y longitud para mostrar en el mapa.

### Eventos

- **Lugar**: Ubicación del evento.
- **Titlulo**: Título del evento.
- **Descripción**: Detalles del evento.
- **Fecha**: Fecha del evento.
- **Ubicación**: Coordenadas para mostrar en el mapa.

## Flujo de Trabajo

1. **Registro de Usuarios**:

   - El usuario se registra proporcionando su nombre, correo electrónico, contraseña y estrato socioeconómico.
   - Durante el registro, el rol se asigna como "Aprendiz" o "Funcionario" según la selección del usuario.
   - El rol de Administrador no se asigna en esta etapa; será gestionado posteriormente desde el backend.

2. **Alquiler de bicicletas**:

   - El usuario se autentica en el sistema.
   - Selecciona una bicicleta disponible (el estado cambia a no disponible).
   - Alquila la bicicleta por tiempo (1 hora).
   - Se aplica el descuento según el estrato socioeconómico.
   - Si excede el tiempo, se genera una tarifa adicional.
   - Al entregar la bicicleta, se marca como disponible nuevamente.

3. **Acceso al Dashboard**:

   - Los usuarios con rol de Administrador pueden acceder al dashboard administrativo desde el mismo login.
   - El sistema verifica el rol del usuario después de la autenticación para determinar el acceso al dashboard.

4. **Participación en eventos**:

   - El usuario puede ver los eventos disponibles con su respectiva información.
   - El usuario se inscribe en el evento mediante un botón.
   - El administrador visualiza la lista de inscritos.

5. **Gestión por el administrador**:
   - Cambia la ubicación de bicicletas desde su dashboard.
   - Publica eventos y visualiza bicicletas en el mapa interactivo.
   - Calcula ganancias mensuales.

## Descuentos por Estrato Socioeconómico

| Estrato Socioeconómico | Valor del Descuento |
| ---------------------- | ------------------- |
| 1 - 2                  | 10%                 |
| 3 - 4                  | 5%                  |
| 5 - 6                  | 0%                  |

## Tecnología

- **Mapa interactivo**: Leaflet.
- **Autenticación**: Sistema de login para usuarios (supabase).
- **Dashboard**: Panel de control para el administrador.

## Puntos Clave Identificados

### Usuarios y Roles

- **Usuarios (Funcionarios/Aprendices)**:
  - Necesitan autenticación para alquilar bicicletas y participar en eventos.
  - Requieren un flujo claro para alquilar bicicletas, incluyendo la aplicación automática de descuentos según el estrato socioeconómico.
  - La inscripción en eventos debe ser sencilla, con un botón de participación y una lista visible para el administrador.
- **Administrador**:
  - Necesita un dashboard para gestionar bicicletas (CRUD) y eventos.
  - Requiere acceso a un mapa interactivo para visualizar bicicletas alquiladas, disponibles y eventos.
  - Debe poder calcular ganancias mensuales basadas en alquileres y sobrecargos.

### Propuesta de Valor

- El sistema facilita el alquiler de bicicletas y la organización de eventos de ciclopaseo, promoviendo la movilidad sostenible.
- La funcionalidad más importante es el alquiler de bicicletas, que incluye la gestión de disponibilidad y cálculo de tarifas.

### Medición del Éxito

- El éxito se mide por las ganancias generadas a través de los alquileres de bicicletas.
- No hay reportes adicionales, pero el cálculo mensual de ganancias es crítico.

### Requisitos y Restricciones

- **Mapa interactivo**: Se sugiere usar Leaflet para mostrar bicicletas y eventos.
- **Ubicación fija de bicicletas**: Las bicicletas tienen coordenadas que pueden ser actualizadas por el administrador.
- **Descuentos por estrato**: Se aplican automáticamente según el estrato seleccionado por el usuario al registrarse.
- **Eventos gratuitos**: No hay costos asociados para los participantes.

### Desafíos Potenciales

- **Gestión de tiempo**: Implementar lógica para calcular tarifas adicionales si se excede el tiempo de alquiler.
- **Autenticación**: Garantizar un sistema seguro y eficiente para el login de usuarios.
- **Mapa interactivo**: Integrar Leaflet y asegurar que las ubicaciones se actualicen dinámicamente.
- **Escalabilidad**: Diseñar el sistema para manejar múltiples bicicletas y eventos simultáneamente.

### Oportunidades

- **Promoción de eventos**: Los eventos de ciclopaseo pueden ser una herramienta para aumentar la participación y el uso de bicicletas.
- **Gamificación**: Considerar agregar métricas como kilómetros recorridos o participación en eventos para incentivar el uso.

## Roles y Permisos

- **Admin**: Tiene acceso completo al dashboard administrativo y puede gestionar usuarios, bicicletas y eventos.
- **Aprendiz**: Tiene acceso limitado a funcionalidades específicas como ver bicicletas disponibles y registrarse en eventos.
- **Funcionario**: Tiene las mismas características y acceso limitado que el rol de aprendiz, pero se diferencia únicamente en la clasificación del rol. Esto permite diferenciarlos en el sistema sin cambiar sus permisos.

## Registro de Usuarios

En el proceso de registro, se debe permitir seleccionar si el usuario es "Aprendiz" o "Funcionario". Ambos roles tendrán las mismas características y permisos, pero se clasificarán de manera distinta para fines organizativos.

# PEC 3
## jmartinho@uoc.edu

## João Rebordão Correia da Silva Martinho

## Descripción General de la PEC
Esta PEC consta de 4 ejercicios. Cada uno tiene como objetivo desarrollar y aplicar conocimientos sobre **TypeScript**, reforzando habilidades en el uso de frameworks y arquitectura **MVC**.

### Ejercicios realizados:
1. **Ejercicio 1:** Comparación entre JavaScript y TypeScript. Se han enumerado las ventajas que aporta TypeScript sobre JavaScript.
2. **Ejercicio 2:** Introducción a los primeros códigos en TypeScript, identificando cómo se infieren tipos y se manejan errores en tiempo de compilación.
3. **Ejercicio 3:** Resolución de ejercicios prácticos usando TypeScript. Implementación de operaciones específicas descritas en el enunciado.
4. **Ejercicio 4:** Transformación de una aplicación **TODO** desde JavaScript hacia TypeScript utilizando la arquitectura **MVC**.

- **Dificultades:**
    - Adaptar la aplicación TODO a TypeScript siguiendo la arquitectura MVC:

        - El proceso de convertir una aplicación previa en JavaScript a TypeScript requirió una buena comprensión de cómo estructurar las clases y archivos en el patrón MVC.
        - Fue necesario asegurar que cada componente (modelo, vista, servicio y controlador) estuviera correctamente conectado y transpile sin errores.
        - Las configuraciones iniciales de Webpack y TypeScript, incluyendo la generación de bundle.js y el manejo de dependencias, presentaron varios desafíos técnicos.
        
    - Configuración de tsconfig.json y exclusión de directorios:

        - Resolver errores relacionados con archivos fuera de rootDir fue complicado. Hubo que ajustar correctamente los parámetros include y exclude en tsconfig.json para evitar errores como TS6059.

    - Errores en la configuración de Webpack:

        - Inicialmente se encontraron problemas al configurar Webpack con awesome-typescript-loader, lo cual requería la instalación de versiones específicas de TypeScript compatibles con las dependencias.
        - Fue necesario reemplazar awesome-typescript-loader por ts-loader debido a conflictos de dependencias.
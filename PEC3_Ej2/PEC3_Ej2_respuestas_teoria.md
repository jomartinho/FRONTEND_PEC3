# PEC3 - Ejercicio 2: Primeros códigos en TypeScript

## Captura del TypeError en `code1.ts`
**Captura de pantalla:**
![Errores generados](errorCode1.png)

**Explicación del error:**
### **TS2363**:
- **Mensaje del error**:
  TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

**Explicación:** Este error ocurre porque el operador * requiere que ambos operandos sean de tipo number. En este caso, '4' es un string, lo que causa el conflicto.

### **TS2339**:
- **Mensaje del error**:
  TS2339: Property 'apple' does not exist on type '{ banana: number }'.

**Explicación:** TypeScript detecta que c no tiene una propiedad apple, ya que solo tiene la propiedad banana. Intentar acceder a una propiedad inexistente genera este error.

### **TS2322**:
- **Mensaje del error**:
  TS2322: Type 'string' is not assignable to type 'number'.

  **Explicación:** Este error ocurre porque TypeScript espera que la multiplicación dé como resultado un valor de tipo number. Sin embargo, debido al uso de '4' como string, el tipo no coincide y se genera el error.

---

## 1. Tipos inferidos en `code2.ts`

1. **`const a = 1042;`**
   - Tipo Inferido: `number`
   - Razón: Es un número entero.

2. **`const b = 'apples and oranges';`**
   - Tipo Inferido: `string`
   - Razón: Es una cadena de texto.

3. **`const c = 'pineapples';`**
   - Tipo Inferido: `'pineapples'` (string literal type)
   - Razón: TypeScript infiere el tipo literal al asignar un literal de cadena.

4. **`const d = [true, true, false];`**
   - Tipo Inferido: `boolean[]`
   - Razón: Es un array de valores booleanos.

5. **`const e = { type: 'ficus' };`**
   - Tipo Inferido: `{ type: string }`
   - Razón: Es un objeto con una propiedad `type` de tipo `string`.

6. **`const f = [1, false];`**
   - Tipo Inferido: `(number | boolean)[]`
   - Razón: Contiene valores de dos tipos diferentes, `number` y `boolean`.

7. **`const g = [3];`**
   - Tipo Inferido: `number[]`
   - Razón: Es un array con un único elemento de tipo `number`.

8. **`const h = null;`**
   - Tipo Inferido: 
     - `null` si `strictNullChecks` está habilitado.
     - `any` si `strictNullChecks` no está habilitado.
   - Razón: Depende de la configuración de TypeScript en el archivo `tsconfig.json`.

---

## 2. Errores Generados en el fichero `code3.ts`
### **Error TS2588**: 
- **Mensaje del error**:
  Cannot assign to 'i' because it is a constant.

  **Explicación:** La variable i está definida como una constante con un valor literal de 3. Esto significa que su valor no puede cambiar. Al intentar asignar 4 a i, TypeScript lanza este error porque las constantes no pueden ser reasignadas después de su declaración.

### **Error TS2345**: 
- **Mensaje del error**:
  Argument of type '"5"' is not assignable to parameter of type 'number'.
  
  **Explicación:** La variable j es un arreglo que contiene valores de tipo number. TypeScript infiere este tipo automáticamente. Al usar j.push('5'), se intenta insertar un valor de tipo string, lo que genera el error porque no coincide con el tipo esperado del arreglo.

### **Error TS2322**: 
- **Mensaje del error**:
  Type '4' is not assignable to type 'never'.
  
  **Explicación:** El tipo never en TypeScript representa un valor que no debería ocurrir nunca, por ejemplo, en una función que lanza un error o que nunca retorna. Al intentar asignar un valor (4) a una variable de tipo never, TypeScript lanza este error porque el tipo never no puede aceptar ningún valor.
  
### **Error TS2571**: 
- **Mensaje del error**:
  Object is of type 'unknown'.
  
  **Explicación:** La variable l está definida con el tipo unknown, lo que significa que su tipo es desconocido y debe ser verificado antes de realizar operaciones sobre ella. Al intentar realizar una operación matemática (l * 2) sin comprobar su tipo, TypeScript lanza este error porque no permite realizar operaciones sobre valores de tipo unknown sin una verificación previa.

---

## 3. Diferencia entre clase e interfaz en TypeScript

En TypeScript, tanto las **clases** como las **interfaces** se utilizan para definir estructuras y comportamientos en un programa, pero tienen diferentes propósitos y características:

#### **Clase**
- Una clase es una plantilla para crear objetos que encapsula datos (propiedades) y comportamientos (métodos).
- Puede tener una implementación directa de los métodos y valores predeterminados para las propiedades.
- Soporta herencia, lo que permite extender una clase para crear otra.
- Puede tener modificadores de acceso como `public`, `private`, `protected` para restringir la visibilidad de propiedades y métodos.
- Permite crear instancias de objetos con `new`.

#### **Interfaz**
- Una interfaz es un contrato que define cómo debe estructurarse un objeto o una clase.
- No tiene implementación; solo declara propiedades y métodos.
- No puede ser instanciada directamente.
- Una clase puede implementar varias interfaces.
- Se utiliza para garantizar que un objeto cumpla con una estructura específica.

En resumen, las clases definen comportamiento e implementación, mientras que las interfaces solo definen estructuras que las clases deben seguir.
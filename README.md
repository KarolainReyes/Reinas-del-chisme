# Taller POO - Reinas del Chisme

Este sistema de *chismosas profesionales* busca encontrar la reina del chisme.
Cada tipo de chismosa recolecta información y difunde chismes con su estilo
único.    
------------------------------------------------------------------------

### 📁 Estructura del proyecto (Ejemplo)

    batalla-chismes/
    ├── classes/
    │   ├── Chismosa.js
    │   ├── TiaVecina.js
    │   ├── CompaneraCuriosa.js
    │   ├── EstudianteEspia.js
    │   └── functions.js
    ├── index.js
    ├── package.json
    ├── .gitignore
    ├── utils.js
    └── README.md


------------------------------------------------------------------------

### Archivo `index.js` (Punto de entrada)

-   Genera un arreglo de diferentes tipos de chismosas
-   Cada una recolecta información y cuenta un chisme durante dos rondas
-   Se muestran estadísticas finales: reputación y nivel de chisme
- Se utilizan los siguientes colores para identificar: 
    -   🟣 Morado para chismes virales
    -   🟠 Naranja para reputación alta
    -   ⚫ Negro para reputación baja o cancelación

------------------------------------------------------------------------

## Reglas adicionales

-   El nivel de chisme va de 0 a 10.
-   La reputación va de 0 a 10.
-   El sistema simula 2 rondas por chismosa.
-   Se utiliza `Math.random()` para modificar valores según el resultado de
    cada acción.



## 👩‍💻 Desarrollado por

 * [Karol Reyes](https://github.com/KarolainReyes)

 * [Andres Leal](https://github.com/Andre07g)

---

## 🧩 Requisitos

- Instalar Node.js
- Instalar npm
- Instalar chalk@4

## 📝 License

This project is for educational use. It can be used as a reference for modeling NoSQL databases in MongoDB.

# MODELO DE CAJA HTML

El **modelo de caja** es la manera en que se representan todos los elementos html en una página. Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificación: si es de línea o de bloque.


Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento. La siguiente imagen muestra las tres cajas rectangulares que crean las tres etiquetas HTML que incluye la página:

![Cajas de una página al crear etiquetas](https://uniwebsidad.com/static/libros/imagenes/css/f0402.gif)


Las cajas se crean automáticamente al definir cada elemento HTML.

___
A todas las cajas se les puede aplicar las siguientes propiedades: _*width, height, padding, margin, border, background.*_ Lo particular de este concepto es que por defecto el _*width*_ se refiere al ancho del contenido de un elemento (no al ancho total, de borde a borde).  


**Comportamiento de las propiedades de una caja representadas en la siguiente imagen:**

![COMPORTAMIENTO DE CADA UNA DE LAS PROPIEDADES EN LA SIGUIENTE IMAGEN](https://www.laurachuburu.com.ar/img/tutoriales/css/modelo-de-caja.png)
___

**Las partes que componen cada caja y su orden de visualización desde el punto de vista del usuario son las siguientes:**

Los navegadores crean y colocan las cajas de forma automática, pero CSS permite modificar todas sus características. Cada una de las cajas está formada por seis partes, tal y como muestra la siguiente imagen:

![Imagen 3D del modelo de caja](https://uniwebsidad.com/static/libros/imagenes/css/f0403.gif)

- Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
- Relleno (padding): espacio libre opcional existente entre el contenido y el borde.
- Borde (border): línea que encierra completamente el contenido y su relleno.
- Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.
- Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.
- Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.


___
**Bibliografías**


- https://uniwebsidad.com/libros/css/capitulo-4
- https://www.laurachuburu.com.ar/tutoriales/modelo-de-caja.php
- https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model

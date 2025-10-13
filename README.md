# brigadasos.xyz

Sitio web creado con [Docusaurus](https://docusaurus.io/) y [Decap CMS](https://decapcms.org/),
desplegado automáticamente con [Cloudflare Pages](https://pages.cloudflare.com/).

## Tabla de Contenidos

- [Para Desarrolladores Técnicos](#para-desarrolladores-técnicos)
  - [Requisitos Previos](#requisitos-previos)
  - [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
  - [Comandos Disponibles](#comandos-disponibles)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
  - [Despliegue](#despliegue)
- [Para Colaboradores No Técnicos](#para-colaboradores-no-técnicos)
  - [¿Qué es Decap CMS?](#qué-es-decap-cms)
  - [Acceso al CMS](#acceso-al-cms)
  - [Cómo Editar Contenido](#cómo-editar-contenido)
  - [Flujo de Trabajo Editorial](#flujo-de-trabajo-editorial)

---

## Para Desarrolladores Técnicos

### Requisitos Previos

- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)

### Configuración del Entorno de Desarrollo

1. **Clona el repositorio:**

```bash
git clone https://github.com/BrigadaSOS/brigadasos.xyz.git
cd brigadasos.xyz
```

2. **Instala las dependencias:**

```bash
npm install
```

### Comandos Disponibles

#### Desarrollo

```bash
# Iniciar servidor de desarrollo con hot-reload
npm run start
```

El sitio estará disponible en `http://localhost:3000`. Los cambios se reflejarán automáticamente.

#### Construcción y Preview

```bash
# Construir el sitio para producción
npm run build

# Servir la versión de producción localmente
npm run serve
```

Útil para probar el sitio exactamente como se verá en producción.

#### Linting y Formateo

```bash
npm run lint             # Verificar código JavaScript/JSX
npm run fix              # Corregir automáticamente problemas
npm run format:check     # Verificar formateo sin modificar archivos
```

### Estructura del Proyecto

```bash
brigadasos.xyz/
├── docs/                    # Contenido del sitio (páginas de documentación)
│   ├── intro.mdx           # Página de inicio
│   ├── guia-principal/     # Guías principales
│   ├── configuracion/      # Documentación de configuración
│   ├── otras-guias/        # Otras guías
│   ├── utilidad/           # Páginas de utilidad
│   └── miscelaneo/         # Contenido misceláneo
├── src/                     # Código fuente de React/Docusaurus
│   ├── components/         # Componentes React personalizados
│   ├── css/                # Estilos CSS globales
│   └── pages/              # Páginas adicionales (fuera de docs/)
├── static/                  # Archivos estáticos
│   ├── img/                # Imágenes y recursos multimedia
│   └── admin/              # Configuración de Decap CMS
│       └── config.yml      # Configuración principal del CMS
├── docusaurus.config.js    # Configuración de Docusaurus
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

### Flujo de Trabajo con Git

Este proyecto utiliza un flujo de trabajo basado en Pull Requests:

1. **Crear una rama para tu trabajo:**

```bash
git checkout -b feature/mi-nueva-funcionalidad
# o
git checkout -b fix/correccion-de-bug
```

2. **Hacer cambios y commits:**

```bash
git add .
git commit -m "Descripción clara del cambio"
```

Los hooks de pre-commit ejecutarán automáticamente linters y formatters. Si hay errores, corrígelos
antes de hacer el commit.

3. **Subir tu rama:**

```bash
git push origin feature/mi-nueva-funcionalidad
```

4. **Crear un Pull Request:**

Ve a [GitHub](https://github.com/BrigadaSOS/brigadasos.xyz) y crea un Pull Request desde tu rama
hacia `main`. Describe claramente los cambios realizados.

5. **Revisión y merge:**

Espera la revisión de otros colaboradores. Una vez aprobado, el PR se fusionará a `main` y se
desplegará automáticamente.

### Despliegue

El sitio se despliega automáticamente a través de Cloudflare Pages:

- **Branch `main`**: Se despliega automáticamente a producción en `https://brigadasos.xyz`
- **Pull Requests**: Cloudflare crea previews automáticos para cada PR, permitiendo revisar los
  cambios antes de mergear

No se requiere ninguna acción manual para el despliegue.

---

## Para Colaboradores No Técnicos

### ¿Qué es Decap CMS?

Decap CMS es una interfaz visual que te permite editar el contenido del sitio web sin necesidad de
conocer código o usar Git directamente. Funciona como un editor de documentos, pero los cambios que
realices se guardarán en GitHub y pasarán por un proceso de revisión.

### Acceso al CMS

1. **Visita el panel de administración:**

   Ve a: `https://brigadasos.xyz/admin`

2. **Inicia sesión con GitHub:**

   Haz clic en "Login with GitHub" y autoriza la aplicación. Necesitas ser miembro de la
   organización BrigadaSOS en GitHub para acceder.

### Cómo Editar Contenido

Una vez dentro del CMS, verás diferentes secciones en el menú lateral:

#### Secciones Disponibles

- **Página de Inicio**: Edita el contenido de la página principal
- **Guía Principal**: Documentación principal del proyecto
- **Configuración**: Guías de configuración
- **Otras Guías**: Guías adicionales
- **Utilidad**: Páginas de utilidad
- **Misceláneo**: Contenido diverso

#### Editar una Página Existente

1. **Selecciona la sección** en el menú lateral (ej: "Guía Principal")
2. **Haz clic en la página** que deseas editar
3. **Edita el contenido** usando el editor visual:
   - El editor de texto enriquecido te permite dar formato (negritas, cursivas, listas, etc.)
   - Puedes agregar imágenes arrastrándolas directamente al editor
   - Usa el botón "Add Component" para insertar elementos especiales
4. **Guarda los cambios** haciendo clic en "Save" en la parte superior

#### Crear una Nueva Página

1. **Selecciona la sección** donde quieres crear la página
2. **Haz clic en "New [Nombre de la Sección]"**
3. **Completa los campos:**
   - **Título**: El título que aparecerá en la página
   - **Slug**: La URL de la página (ej: "mi-nueva-guia" → `/mi-nueva-guia`)
   - **Posición en Sidebar**: Número que determina el orden en el menú (opcional)
   - **Etiqueta del Sidebar**: Texto alternativo para el menú (opcional)
   - **Contenido**: El contenido principal de la página
4. **Guarda la página**

#### Trabajar con Imágenes

1. En el editor, haz clic donde quieres insertar la imagen
2. Usa el botón de imagen o arrastra el archivo directamente
3. Las imágenes se subirán automáticamente a la carpeta `/static/img`
4. Puedes agregar texto alternativo (importante para accesibilidad)

### Flujo de Trabajo Editorial

Este sitio usa un **flujo de trabajo editorial** (Editorial Workflow), lo que significa que tus
cambios no se publican inmediatamente, sino que pasan por un proceso de revisión:

#### Estados de los Cambios

En la parte superior del CMS verás tres columnas:

1. **Drafts (Borradores)**
   - Aquí aparecen tus cambios mientras trabajas en ellos
   - Los cambios NO son visibles públicamente
   - Puedes guardar y seguir editando cuando quieras

2. **In Review (En Revisión)**
   - Cuando termines tu trabajo, mueve el cambio a "In Review"
   - Esto crea un Pull Request en GitHub
   - Otros colaboradores podrán revisar tus cambios
   - Puedes seguir haciendo ajustes si recibes comentarios

3. **Ready (Listo)**
   - Un administrador moverá aquí los cambios aprobados
   - Los cambios se publicarán automáticamente al sitio web
   - Esto sucede cuando el Pull Request se fusiona a `main`

---

## Recursos Adicionales

- [Documentación de Docusaurus](https://docusaurus.io/docs)
- [Documentación de Decap CMS](https://decapcms.org/docs/intro/)
- [Guía de Markdown](https://www.markdownguide.org/basic-syntax/)
- [Repositorio en GitHub](https://github.com/BrigadaSOS/brigadasos.xyz)

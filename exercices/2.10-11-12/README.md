# 🎬 iMovies - Votre Cinémathèque Personnelle

Application web moderne pour gérer votre collection de films préférés et découvrir les cinémas de votre région.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** : Présentation élégante de l'application
- 🎥 **Gestion de films** : Ajoutez, consultez et gérez votre collection personnelle
- 🎬 **Cinémas** : Découvrez les cinémas de votre région avec leurs programmations
- 🌙 **Design Minuit Élégant** : Interface sombre et sophistiquée avec animations fluides
- 📱 **Responsive** : S'adapte parfaitement à tous les écrans

## 🎨 Design

Le site utilise le thème **"Minuit Élégant"** avec une palette de couleurs raffinée :
- Background : Gradient gris-bleu foncé (`#2b2d42` → `#3d405b`)
- Accents : Vert menthe (`#81b29a`), Or doré (`#f2cc8f`), Corail (`#e07a5f`)
- Typographie : Segoe UI, système moderne
- Effets : Glassmorphism, animations fluides, hover élégants

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes

1. **Cloner le projet**
```bash
git clone https://github.com/Mugi3d2y/web2.git
cd web2/exercices/2.10-11-12
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Scripts disponibles

```bash
# Développement avec hot-reload
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter ESLint
npm run lint
```

## 🏗️ Structure du projet

```
2.10-11-12/
├── src/
│   ├── components/
│   │   ├── App/           # Composant principal et navigation
│   │   ├── Home/          # Page d'accueil
│   │   ├── Movies/        # Gestion des films
│   │   ├── Cinemas/       # Liste des cinémas
│   │   ├── MovieItem/     # Carte de film
│   │   ├── Header/        # En-tête
│   │   └── Footer/        # Pied de page
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── types.ts               # Types TypeScript
├── index.html             # Template HTML
└── package.json           # Dépendances
```

## 🛠️ Technologies utilisées

- **React 19.1.1** : Bibliothèque UI
- **TypeScript 5.9.3** : Typage statique
- **Vite 7.1.7** : Build tool ultra-rapide
- **React Router 7.9.5** : Navigation SPA
- **ESLint** : Qualité du code

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Option 2 : Netlify

```bash
# Build
npm run build

# Déployer le dossier dist/ sur Netlify
```

### Option 3 : GitHub Pages

Ajoutez dans `vite.config.ts` :
```ts
export default defineConfig({
  base: '/web2/',
  // ...
})
```

Puis :
```bash
npm run build
# Déployer le dossier dist/
```

## 📝 Licence

Ce projet est un exercice académique dans le cadre du cours de développement web.

## 👤 Auteur

Créé avec ❤️ pour le cours de Web 2

---

**Note** : Ce projet utilise React 19.1.1 avec les dernières fonctionnalités de TypeScript pour une expérience de développement optimale.


```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

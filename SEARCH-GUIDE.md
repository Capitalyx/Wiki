# 🔍 Guide de la Recherche Dynamique

## Comment ça fonctionne ?

La barre de recherche utilise maintenant un système **100% dynamique** qui génère automatiquement les données de recherche à partir de la structure de vos pages.

## ✨ Avantages

- ✅ **Multi-langue automatique** : Détecte automatiquement la langue (FR/EN/ES)
- ✅ **Mise à jour automatique** : Change les résultats selon la langue active
- ✅ **Facile à maintenir** : Ajoutez simplement vos pages dans un seul fichier
- ✅ **Performance optimale** : Génération à la volée sans rechargement

## 📝 Comment ajouter une nouvelle page

### 1. Ouvrir le fichier de configuration

Éditez : `public/js/generate-search-data.js`

### 2. Ajouter votre page dans l'array `pages`

```javascript
{
    path: '/votre-page',
    title: {
        fr: 'Titre en Français',
        en: 'English Title',
        es: 'Título en Español'
    },
    category: 'guides', // ou 'rules', 'jobs', 'commands', 'faq', 'main'
    description: {
        fr: 'Description en français',
        en: 'English description',
        es: 'Descripción en español'
    },
    keywords: ['mot-clé1', 'keyword2', 'palabra3', 'tags']
}
```

### 3. Pour une page avec sections

Si votre page a des sections avec des ancres (#), ajoutez-les :

```javascript
{
    path: '/guides',
    title: { fr: 'Guides', en: 'Guides', es: 'Guías' },
    category: 'guides',
    description: { fr: 'Guides complets', en: 'Complete guides', es: 'Guías completas' },
    keywords: ['guides', 'tutorial'],
    sections: [
        {
            id: 'ma-section', // #ma-section
            title: { fr: 'Ma Section', en: 'My Section', es: 'Mi Sección' },
            keywords: ['section', 'spécifique']
        }
    ]
}
```

## 🌐 Gestion des langues

Le système détecte automatiquement la langue :

- `/page` → Français
- `/en/page` → Anglais
- `/es/page` → Espagnol

Les URLs sont générées automatiquement selon la langue active.

## 📚 Catégories disponibles

| Catégorie  | Icône | Utilisation                 |
| ---------- | ----- | --------------------------- |
| `main`     | 🏠    | Pages principales (Accueil) |
| `rules`    | ⚖️    | Règlement du serveur        |
| `guides`   | 📖    | Guides et tutoriels         |
| `jobs`     | 💼    | Métiers/Jobs                |
| `commands` | 💻    | Commandes du serveur        |
| `faq`      | ❓    | Questions fréquentes        |

## 🎯 Exemple complet

```javascript
// Ajouter un nouveau métier
{
    path: '/jobs/farmer',
    title: {
        fr: 'Fermier',
        en: 'Farmer',
        es: 'Granjero'
    },
    category: 'jobs',
    description: {
        fr: 'Cultivez des terres et vendez vos récoltes',
        en: 'Grow crops and sell your harvest',
        es: 'Cultiva tierras y vende tus cosechas'
    },
    keywords: ['farmer', 'fermier', 'granjero', 'agriculture', 'récolte', 'harvest']
}
```

## 🔧 Fonctions utilitaires disponibles

### `window.searchData`

Contient toutes les données de recherche générées dynamiquement

### `window.generateSearchData()`

Regénère les données de recherche (appelée automatiquement)

### `window.getCategoryName(category)`

Retourne le nom localisé d'une catégorie

### `window.getCategoryIcon(category)`

Retourne l'icône FontAwesome d'une catégorie

## 🚀 Astuce Pro

Le système se met à jour automatiquement quand vous changez de langue !
Plus besoin de recharger la page.

## 💡 Besoin d'aide ?

Si vous voulez ajouter une page mais que vous n'êtes pas sûr, suivez ce modèle simple :

```javascript
{
    path: '/ma-nouvelle-page',
    title: { fr: 'Mon Titre', en: 'My Title', es: 'Mi Título' },
    category: 'guides', // Choisissez la catégorie appropriée
    description: {
        fr: 'Description de ma page en français',
        en: 'Description of my page in English',
        es: 'Descripción de mi página en español'
    },
    keywords: ['mots', 'clés', 'pertinents']
}
```

C'est tout ! 🎉

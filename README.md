<div align="center">

# 📚 Capitalyx Wiki

**Le wiki officiel du serveur Capitalyx**

[![Astro](https://img.shields.io/badge/Astro-5.16-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[🇫🇷 Français](#) • [🇬🇧 English](#) • [🇪🇸 Español](#)

</div>

---

## ✨ Fonctionnalités

- 🌍 **Multilingue** — Disponible en Français, Anglais et Espagnol
- 🔍 **Recherche avancée** — Recherche instantanée avec filtres par catégorie
- 📱 **Responsive** — Design adapté mobile, tablette et desktop
- 🎨 **Design moderne** — Interface élégante avec thème sombre
- ⚡ **Performant** — Site statique ultra-rapide avec Astro

## 📖 Contenu

| Section | Description |
|---------|-------------|
| 📜 **Règlement** | Toutes les règles du serveur |
| 📘 **Guides** | Tutoriels pour bien débuter |
| 💼 **Métiers** | Liste des métiers disponibles |
| 💻 **Commandes** | Référence des commandes |
| ❓ **FAQ** | Questions fréquentes |

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/Capitalyx/Wiki.git
cd Wiki

# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev
```

Le site sera disponible sur `http://localhost:4321`

## 📁 Structure du projet

```
Wiki/
├── public/              # Assets statiques (images, favicon)
│   └── assets/
│       └── img/
├── src/
│   ├── layouts/         # Layout principal
│   ├── pages/           # Pages du site
│   │   ├── en/          # Pages anglaises
│   │   ├── es/          # Pages espagnoles
│   │   └── jobs/        # Pages des métiers
│   └── styles/          # Fichiers CSS
├── astro.config.mjs     # Configuration Astro
└── package.json
```

## 🛠️ Scripts disponibles

| Commande | Description |
|----------|-------------|
| `bun run dev` | Lance le serveur de développement |
| `bun run build` | Compile le site pour la production |
| `bun run preview` | Prévisualise le build de production |

## 🌐 Déploiement

Le site est automatiquement déployé via GitHub Actions à chaque push sur la branche `main`.

```bash
# Build de production
bun run build

# Les fichiers sont générés dans ./dist/
```

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. 🍴 Fork le projet
2. 🔧 Crée ta branche (`git checkout -b feature/ma-feature`)
3. 💾 Commit tes changements (`git commit -m 'Ajout d'une feature'`)
4. 📤 Push sur la branche (`git push origin feature/ma-feature`)
5. 📝 Ouvre une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**Créé avec ❤️ par Arkyan & SmashBalloon**

[Discord](https://discord.gg/capitalyx) • [Site Web](https://capitalyx.com)

</div>

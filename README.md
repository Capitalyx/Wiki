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

Le wiki est entièrement construit avec [Starlight](https://starlight.astro.build/) : tout le contenu vit dans `src/content/docs/` en Markdown/MDX, il n'y a plus de pages `.astro` custom.

```
Wiki/
├── public/                    # Assets statiques (images, favicon)
├── src/
│   ├── content/docs/          # Tout le contenu du wiki (fr à la racine, en/, es/)
│   │   ├── jobs/*.mdx         # Pages métiers (texte + données dynamiques)
│   │   ├── rules.md, guides.md, commands.md, faq.md
│   │   └── index.mdx
│   ├── components/
│   │   └── JobPricingTable.astro  # Rendu générique des données de métiers
│   ├── content.config.ts      # Collections `docs` (Starlight) et `jobsData`
│   └── styles/custom.css      # Thème Starlight personnalisé
├── astro.config.mjs
└── package.json
```

## 🛠️ Scripts disponibles

| Commande | Description |
|----------|-------------|
| `bun run dev` | Lance le serveur de développement |
| `bun run build` | Compile le site pour la production |
| `bun run preview` | Prévisualise le build de production |

## 📊 Données dynamiques des métiers

Les pages `src/content/docs/jobs/*.mdx` affichent des tarifs/récompenses **lus directement, au moment du build**, depuis les fichiers générés automatiquement par le serveur FiveM :

```
/srv/fivem/datas/reports/wiki-data/*.json
```

Ces fichiers **ne sont pas dans ce repo** (ils vivent sur le serveur FiveM, en dehors de l'arbre git) et ne doivent jamais y être copiés. Ils sont chargés via la collection Astro `jobsData` (voir `src/content.config.ts`) et rendus par `src/components/JobPricingTable.astro`, qui affiche automatiquement toute nouvelle valeur sans qu'il soit nécessaire de modifier le Markdown.

Prérequis : l'utilisateur qui build (`arkyan`) doit être dans le groupe `equipe` pour avoir accès en lecture à ce dossier.

## 🌐 Déploiement

Le site est buildé **localement, sur ce même serveur** (pas de CI externe). Un rebuild est déclenché automatiquement à chaque modification des fichiers `wiki-data` grâce à des units systemd utilisateur :

- `~/.config/systemd/user/wiki-rebuild.path` — surveille `/srv/fivem/datas/reports/wiki-data`
- `~/.config/systemd/user/wiki-rebuild.service` — relance `bun run build`

```bash
# Build manuel
bun run build

# Les fichiers sont générés dans ./dist/
```

Servir `dist/` publiquement (nginx, caddy...) est hors du périmètre de cette configuration et reste à mettre en place séparément.

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

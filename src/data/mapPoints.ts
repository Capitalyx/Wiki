// Coordonnées centralisées des points d'intérêt affichés sur les cartes
// interactives (InteractiveMap.astro), en pourcentage de l'image de fond
// (/public/assets/img/map/satellite.webp) : 0/0 en haut à gauche, 100/100 en
// bas à droite.
//
// Elles ont été estimées visuellement à partir des anciennes captures
// d'écran de mini-carte. Un seul fichier à corriger si un point est mal
// placé, quelle que soit la langue de la page qui l'affiche.

export interface MapCoord {
	x: number;
	y: number;
}

export const mapPoints = {
	mechanic: { x: 44.2, y: 78.2 },
	wastemanager: { x: 51, y: 89 },
	carrierPaleto: { x: 42.6, y: 17.9 },
	carrierTerminal: { x: 55.4, y: 93.6 },
	trainconductor: { x: 50.4, y: 83.4 },
	cab: { x: 53.2, y: 68.9 },
	busdriver: { x: 49.6, y: 72.6 },
	helicopter: { x: 40, y: 79.1 },
	emsSandyShores: { x: 60.7, y: 38 },
	emsPaletoBay: { x: 43.9, y: 16.8 },
	emsCentral: { x: 48.5, y: 79.3 },
	emsPillboxHill: { x: 48.8, y: 72.3 },
	emsMountZonah: { x: 42.4, y: 70.5 },
} satisfies Record<string, MapCoord>;

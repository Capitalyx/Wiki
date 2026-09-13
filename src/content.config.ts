import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),

	// Données de configuration des métiers générées automatiquement par le
	// serveur FiveM (hors du repo git). Une modification de ces fichiers
	// déclenche un rebuild du wiki (voir wiki-rebuild.path côté systemd).
	jobsData: defineCollection({
		loader: glob({
			pattern: '*.json',
			base: '/srv/fivem/datas/reports/wiki-data',
		}),
		schema: z.object({
			job: z.string(),
			generatedAt: z.string(),
			config: z.record(
				z.object({
					value: z.unknown(),
					source: z.string().optional(),
				}),
			),
		}),
	}),
};

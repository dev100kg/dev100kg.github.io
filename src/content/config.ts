import { defineCollection, z } from 'astro:content';

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    items: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
        note: z.string().optional(),
        enabled: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const settings = defineCollection({
  type: 'content',
  schema: z.object({
    site: z.object({
      title: z.string(),
      description: z.string(),
      og: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          card: z.string().optional(),
          site: z.string().optional(),
          creator: z.string().optional(),
        })
        .optional(),
    }),
    hero: z.object({
      headline: z.string(),
      subcopy: z.string().optional(),
      features: z.array(z.string()).optional(),
    }),
    brand: z
      .object({
        companyName: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { links, settings };

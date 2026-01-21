import type { z } from 'astro:content';
import { linkItemSchema } from '../content/config';

// Zodスキーマから型を推論して一元管理
export type LinkItem = z.infer<typeof linkItemSchema>;

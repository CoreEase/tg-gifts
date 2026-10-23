export interface GiftModel {
  name: string;
  customEmojiId: string | null;
  rarityPermille: number | null;
  originalRarityPermille: number | null;
  rarity: number | null;
  originalRarity: number | null;
  crafted?: boolean;
  rarityTier?: string | null;
  assets: {
    svg: string;
    tgs: string;
  };
}

export interface GiftPattern {
  name: string;
  customEmojiId: string | null;
  rarityPermille: number | null;
  originalRarityPermille: number | null;
  rarity: number | null;
  originalRarity: number | null;
  assets: {
    png: string;
  };
}

export interface Backdrop {
  name: string;
  backdropId: number | null;
  customEmojiId: string | null;
  centerColor: number | null;
  edgeColor: number | null;
  patternColor: number | null;
  textColor: number | null;
  rarityPermille: number | null;
  originalRarityPermille: number | null;
  rarity: number | null;
  originalRarity: number | null;
  hex: {
    centerColor: string;
    edgeColor: string;
    patternColor: string;
    textColor: string;
  };
  assets: {
    circleSvg: string;
    squareSvg: string;
  };
}

export interface GiftCollection {
  slug: string;
  models: readonly GiftModel[];
  patterns: readonly GiftPattern[];
  backdrops: readonly Backdrop[];
}

export type CollectionSummary = {
  slug: string;
  name: string;
  count: number | null;
  modelCount: number;
  patternCount: number;
  backdropCount: number;
  inFragment: boolean;
  original: string;
};

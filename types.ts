export interface GiftModel {
  name: string;
  customEmojiId: string | null;
}

export interface GiftPattern {
  name: string;
  customEmojiId: string | null;
}

export interface Backdrop {
  name: string;
  customEmojiId: string;
  hex: {
    centerColor: string;
    edgeColor: string;
    patternColor: string;
    textColor: string;
  };
}

export interface GiftCollection {
  slug: string;
  models: readonly GiftModel[];
  patterns: readonly GiftPattern[];
  backdrops: readonly Backdrop[];
}

export interface CollectionSummary = {
  slug: string;
  name: string;
  image: string;
  count: number | null;       
  modelCount: number;
  patternCount: number;
  backdropCount: number;
};

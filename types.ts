export interface GiftModel {
  name: string;
  customEmojiId: string | null;
  assets: {
    svg: string;
    tgs: string;
  };
}

export interface GiftPattern {
  name: string;
  customEmojiId: string | null;
  assets: {
    png: string;
  };
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

export type CollectionSummary = {
  slug: string;
  name: string;
  image: string;
  count: number | null;
  modelCount: number;
  patternCount: number;
  backdropCount: number;
  inFragment: boolean; 
};

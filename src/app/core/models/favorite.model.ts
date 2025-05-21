import { Character } from './character.model';
import { Episode } from './episode.model';
import { Location } from './location.model';
import { ItemType } from '../enums/item-type';

export type Favorite =
  | {
    id: number;
    item_id: number;
    item_type: ItemType.CHARACTER;
    user_id: number;
    item_data: Character;
  }
  | {
    id: number;
    item_id: number;
    item_type: ItemType.EPISODE;
    user_id: number;
    item_data: Episode;
  }
  | {
    id: number;
    item_id: number;
    item_type: ItemType.LOCATION;
    user_id: number;
    item_data: Location;
  };
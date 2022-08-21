import { People } from './people.interface';
import { Planet } from './planets.interface';
import { Species } from './species.interface';
import { Starship } from './starships.interface';
import { Vehicle } from './vehicles.interface';

export interface Data {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[] | Planet[] | Species[] | Starship[] | Vehicle[];
}

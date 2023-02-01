import Dexie, { Table } from 'dexie';

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

export class SubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Friend>;

  constructor() {
    super('fusion_tech');

    this.version(1).stores({
      friends: '++id, name, age',
    });
  }
}

export const db = new SubClassedDexie();

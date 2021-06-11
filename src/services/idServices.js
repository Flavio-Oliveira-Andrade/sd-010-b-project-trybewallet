import { v4 as uuid } from 'uuid';

export function getNewId() {
  return uuid();
}

const id = 0;

export function getId() {
  return id + 1;
}

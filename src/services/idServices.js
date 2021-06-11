import { v4 as uuid } from 'uuid';

function getNewId() {
  return uuid();
}

export default getNewId;

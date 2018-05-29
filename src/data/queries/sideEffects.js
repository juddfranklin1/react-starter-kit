import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import SideEffectType from '../types/SideEffectType';

// Faers event data
const url =
  'https://api.fda.gov/drug/event.json' +
  '?search=receivedate:[20040101+TO+20081231]&limit=1';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const sideEffects = {
  type: new List(SideEffectType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            items = data.items;
          }
          lastFetchTask = null;
          return items;
        })
        .catch(err => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default sideEffects;

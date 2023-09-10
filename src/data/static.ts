import * as edgedb from 'edgedb';
import type { Executor } from 'edgedb';


export function makeStaticPaths<T, Key extends string & keyof T>(
  query: (client: Executor) => Promise<T[]>,
  keyName: Key,
  paramName: string = keyName
) {
  return async function() {
    return (await query(edgedb.createClient())).map(
      ({[keyName]: v}) => ({ params: { [paramName]: v } })
    );
  }
}

export function makeStaticPathsFromQuery<Key extends string>(query: string, keyName: Key, paramName?: string) {
  return makeStaticPaths(
    async (client: Executor) => client.query<{ [K in Key]: string; }>(query),
    keyName,
    paramName
  );
}

export const literateWorkPaths = makeStaticPathsFromQuery(`select LiterateWork { id };`, 'id');
export const editionPaths = makeStaticPathsFromQuery(`select Edition { id };`, 'id');
export const creatorPaths = makeStaticPathsFromQuery(`select Creator { id };`, 'id');
export const tagPaths = makeStaticPathsFromQuery(`select Tag { slug };`, 'slug', 'id');
export const podcastPaths = makeStaticPathsFromQuery(`select PodcastWork { id };`, 'id');
export const podcastEpisodePaths = makeStaticPathsFromQuery(`select PodcastEpisodeWork { id };`, 'id');


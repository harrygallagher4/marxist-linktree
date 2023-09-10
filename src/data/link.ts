import type { ExternalCreatorPage as Link } from "@schema/types";

// I refuse to change the name of twitter to "X"
export const linkTypes = {
  'youtube:channel': {
    prefix: 'https://www.youtube.com/c/',
    name: 'YouTube'
  },
  'instagram':{
    prefix: 'https://www.instagram.com/',
    name: 'Instagram'
  },
  'twitter': {
    prefix: 'https://twitter.com/',
    name: 'Twitter'
  },
  'patreon': {
    prefix: 'https://www.patreon.com/',
    name: 'Patreon'
  },
  'comradery': {
    prefix: 'https://www.comradery.co/',
    name: 'Comradery'
  },
  'facebook': {
    prefix: 'https://www.facebook.com/',
    name: 'Facebook'
  },
  'wikipedia': {
    prefix: 'https://en.wikipedia.org/wiki/',
    name: 'Wikipedia'
  },
};

function typeAccessor(key: string | symbol) {
  return (link: Link) => linkTypes?.[link.link_type]?.[key]; 
}

export const getTypeName = typeAccessor('name');
export const getPrefix = typeAccessor('prefix');

export function isKnown(link: Link) {
  return linkTypes[link.link_type] !== undefined;
}

export function isGeneric(link: Link) {
  return link.link_type === 'generic';
}

export function hasName(link: Link) {
  return getTypeName(link) !== null;
}

export function hasPrefix(link: Link) {
  const prefix = getPrefix(link);
  return prefix !== null;
}

/**
 * Get the actual URL for a link. The `url` field of known link types is more of
 * a "handle" so this function resolves a handle to an actual URL.
 *
 * @hsummrs:
 * I can't think of any platforms where just using a prefix wouldn't work but
 * it's possible that in addition to `prefix` there should be some sort of
 * resolve function for certain platforms.
 **/
export function url(link: Link) {
  const prefix = getPrefix(link) ?? '';
  return `${prefix}${link.url}`;
}

/**
 * Get a short description of a link.
 * For known link types this is just the name of the platform being linked to.
 * Generic links can be manually given a description like "Website" as in, "this
 * link is to Balkan Odyssey's Website"
 *
 * @hsummrs:
 * We might want to rename this, "description" sounds sort of weird because in
 * the case that there is no description we use the "type name"
 **/
export function getDescription(link: Link) {
  const linkDescription = link?.description;
  if (linkDescription !== null) return linkDescription; 

  const name = getTypeName(link);
  if (name !== null) return name; 

  return null;
}


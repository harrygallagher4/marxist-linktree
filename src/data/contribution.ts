import { ContributionType } from '@schema/generated/types';
import { Contribution } from '@schema/types';


const TYPE = '@contribution_type';
const ORDER = '@order';
const AS = '@as';
export const linkProperties = { TYPE, ORDER, AS };

export const isAuthor = contributionTypeIs('Author');
export const isNotAuthor = contributionTypeIsNot('Author');


export function contributionType(c: Contribution) {
  return c[TYPE];
}

export function contributionTypeIs(ct: ContributionType) {
  return (c: Contribution) => c[TYPE] == ct;
}

export function contributionTypeIsNot(ct: ContributionType) {
  return (c: Contribution) => c[TYPE] != ct;
}

export function areOrdered(cs: Contribution[]) {
  return !(cs.every((c) => c[ORDER] == 0))
}

export function sortOrderedContributions(contributions: Contribution[]) {
  return contributions.sort(
    ({['@order']: a}, {['@order']: b}) => a == b ? 0 : a < b ? -1 : 1
  );
}

export function sortContributions(contributions: Contribution[]) {
  if (areOrdered(contributions)) {
    return sortOrderedContributions(contributions);
  } else {
    return [
      ...(contributions.filter(isAuthor)),
      ...(contributions.filter(isNotAuthor))
    ];
  }
}

export function name(contribution: Contribution) {
  if (contribution[AS] != null) {
    return contribution[AS];
  } else {
    return contribution.name;
  }
}

export function contributionsString(contributions: Contribution[]) {
  return sortContributions(contributions).map((c) => {
    if (isAuthor(c)) {
      return name(c);
    } else {
      return `${name(c)} (${c[TYPE]})`
    }
  }).join(', ');
}


import type { LiterateWork } from '@schema/types';


export function titleString(work: LiterateWork) {
  if (work.display_title != null) {
    return work.display_title;
  } else if (work.subtitle != null) {
    return `${work.title}: ${work.subtitle}`;
  } else {
    return work.title;
  }
}


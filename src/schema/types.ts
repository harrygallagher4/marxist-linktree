//
// This file adds link properties to the generated EdgeDB types and re-exports
// the rest of the generated types. There are several pull requests about link
// properties but they seem to be pretty inactive. Unfortunately since all of
// the types are related to one another we have to override basically any key
// that isn't a primitive.
//
// I thought about modifying the type generator but figured it would be way too
// much work.
//
// Also, there are a bunch of unused imports just so I could keep track of what
// needed to be overridden/re-exported
//
// https://github.com/edgedb/edgedb-js/issues/665
// https://github.com/edgedb/edgedb-js/issues/625
// https://github.com/edgedb/edgedb-js/issues/399
// https://github.com/edgedb/edgedb-js/issues/428
//

import type {
  // std,
  // cfg,
  // schema,
  // sys,
  // helper,
  ContributionType as IContributionType,
  Tag as ITag,
  SimpleTag as ISimpleTag,
  SubjectTag as ISubjectTag,
  Creator as ICreator,
  Person as IPerson,
  Organization as IOrganization,
  Work as IWork,
  VideoWork as IVideoWork,
  PodcastWork as IPodcastWork,
  LiterateWork as ILiterateWork,
  PodcastEpisodeWork as IPodcastEpisodeWork,
  Edition as IEdition,
  EditionFile as IEditionFile,
  ExternalIdentifier as IExternalIdentifier,
  ExternalCreatorPage as IExternalCreatorPage,
} from '@schema/generated/types';

export type {
  IExternalIdentifier as ExternalIdentifier,
  IExternalCreatorPage as ExternalCreatorPage
};


export interface Tag extends ITag {
  "works": Work[];
}
export interface SimpleTag extends Tag {}
export interface SubjectTag extends Tag {}

export interface Creator extends ICreator {
  "works": Work[];
}
export interface Organization extends Creator {
  "members": Creator[];
}
export interface Person extends Creator {}

export interface WorkToCreatorLinkProps_contributors {
  "@as"?: string | null;
  "@contribution_type"?: IContributionType | null;
  "@order"?: number | null;
}

export interface Contribution extends Creator, WorkToCreatorLinkProps_contributors { }

export interface Edition extends IEdition {
  "contributors": Contribution[];
  "parent"?: LiterateWork | null;
  "files": EditionFile[];
}

export interface EditionFile extends IEditionFile {
  "edition"?: Edition | null;
}

export interface Work extends IWork {
  "contributors": Contribution[];
  "tags": Tag[];
}

export interface LiterateWork extends Work {
  "editions": Edition[];
  "display_title"?: string | null;
  "subtitle"?: string | null;
  "type_of_literature"?: string | null;
  "year_published"?: number | null;
}

export interface VideoWork extends Work {
  "url"?: string | null;
}

export interface PodcastEpisodeWork extends Work {
  "urls": IExternalIdentifier[];
  "show"?: PodcastWork | null;
}
export interface PodcastWork extends Work {
  "urls": IExternalIdentifier[];
  "episodes": PodcastEpisodeWork[];
}


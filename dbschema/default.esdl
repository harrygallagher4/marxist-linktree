module default {

  scalar type ContributionType extending enum<Generic, Author, Editor, Translator>;

  type File {
    required oid: uuid { default := std::uuid_generate_v4(); }
    name: str;
    ext: str;
    mime: str;
    property path := <str>.oid if .ext ?= <str>{} else <str>.oid ++ '.' ++ .ext;
  }

  abstract type Creator {
    required name: str;
    description: str;
    birth_date: cal::local_date;
    death_date: cal::local_date;
    location: str;
    image: File;

    link works := .<contributors[is Work];
    home_page: ExternalCreatorPage;
    multi links: ExternalCreatorPage;
    multi tags: Tag;
  }

  abstract type Work {
    title: str;
    description: str;
    image: File;
    language: str;
    date_published: cal::local_date;

    multi contributors: Creator { extending contribution; };
    multi identifiers: ExternalIdentifier;
    multi tags: Tag;
  }

  abstract type Tag {
    required name: str;
    required slug: str { constraint exclusive; }
    link works := .<tags[is Work];
  }

  abstract link contribution {
    contribution_type: ContributionType { default := ContributionType.Generic; };
    order: int16 { default := 0; };
    as: str;
  }

  type Person extending Creator {}

  type Organization extending Creator {
    multi members: Creator;
  }

  type SimpleTag extending Tag {}

  type SubjectTag extending Tag {}

  type VideoWork extending Work {
    url: str;
  }

  type PodcastWork extending Work {
    multi urls: ExternalIdentifier;
    link episodes := .<show[is PodcastEpisodeWork];
  }

  type PodcastEpisodeWork extending Work {
    multi urls: ExternalIdentifier;
    show: PodcastWork;
  }

  type LiterateWork extending Work {
    subtitle: str;
    display_title: str;
    type_of_literature: str;
    year_published: int16;

    link editions := .<parent[is Edition];
  }

  # Initially I thought it was a good idea to *not* make this an extension of
  # `Work` so a bunch of different editions don't show up on a creator's page.
  # Now I'm reconsidering that because I've mostly used custom queries on
  # `Creator.works` to list works by their type.
  type Edition {
    title: str;
    subtitle: str;
    display_title: str;
    description: str;
    image: File;
    language: str;
    year_published: int16;
    date_published: cal::local_date;

    parent: LiterateWork;
    multi identifiers: ExternalIdentifier;
    multi contributors: Creator { extending contribution; };
    link files := .<edition[is EditionFile];
  }

  type EditionFile {
    filename: str;
    url: str;
    filetype: str;
    file_extension: str;
    thumbnail: File;

    edition: Edition;
  }

  type ExternalCreatorPage {
    required url: str;
    description: str;
    link_type: str { default := "generic"; };
    official: bool { default := false; };
  }

  type ExternalIdentifier {
    required type: str;
    required value: str;
  }

}


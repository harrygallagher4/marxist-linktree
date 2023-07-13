module default {

  scalar type ContributionType extending enum<Generic, Author, Editor, Translator>;

  abstract type Creator {
    required name: str;
    description: str;
    birth_date: cal::local_date;
    death_date: cal::local_date;
    location: str;
    photo: str;

    link works := .<contributors[is Work];
    home_page: ExternalCreatorPage;
    multi links: ExternalCreatorPage;
  }

  abstract type Work {
    title: str;
    description: str;
    image: str;
    language: str;
    date_published: cal::local_date;

    multi contributors: Creator { extending contribution; };
    multi identifiers: ExternalIdentifier;
    multi tags: Tag;
  }

  abstract type Tag {
    required name: str;
    slug: str;
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

  type Edition {
    title: str;
    subtitle: str;
    display_title: str;
    description: str;
    image: str;
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
    thumbnail: str;

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


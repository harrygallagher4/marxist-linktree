CREATE MIGRATION m1wdsruxzhfgpuga7jzylsc3b4jzpbkghworm5nrakyn432xxel6na
    ONTO initial
{
  CREATE ABSTRACT LINK default::contribution {
      CREATE PROPERTY as: std::str;
      CREATE PROPERTY contribution_type: std::str {
          SET default := 'generic';
          CREATE CONSTRAINT std::one_of('generic', 'author', 'editor', 'translator');
      };
  };
  CREATE TYPE default::ExternalCreatorPage {
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY link_type: std::str {
          SET default := 'generic';
      };
      CREATE PROPERTY official: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY url: std::str;
  };
  CREATE ABSTRACT TYPE default::Creator {
      CREATE LINK home_page: default::ExternalCreatorPage;
      CREATE MULTI LINK links: default::ExternalCreatorPage;
      CREATE PROPERTY birth_date: cal::local_date;
      CREATE PROPERTY death_date: cal::local_date;
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY location: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY photo: std::str;
  };
  CREATE TYPE default::Edition {
      CREATE MULTI LINK contributors: default::Creator {
          EXTENDING default::contribution;
      };
      CREATE PROPERTY date_published: cal::local_date;
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY display_title: std::str;
      CREATE PROPERTY image: std::str;
      CREATE PROPERTY language: std::str;
      CREATE PROPERTY subtitle: std::str;
      CREATE PROPERTY title: std::str;
      CREATE PROPERTY year_published: std::int16;
  };
  CREATE ABSTRACT TYPE default::Work {
      CREATE MULTI LINK contributors: default::Creator {
          EXTENDING default::contribution;
      };
      CREATE PROPERTY date_published: cal::local_date;
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY image: std::str;
      CREATE PROPERTY language: std::str;
      CREATE PROPERTY title: std::str;
  };
  CREATE TYPE default::LiterateWork EXTENDING default::Work {
      CREATE PROPERTY display_title: std::str;
      CREATE PROPERTY subtitle: std::str;
      CREATE PROPERTY type_of_literature: std::str;
      CREATE PROPERTY year_published: std::int16;
  };
  CREATE TYPE default::Organization EXTENDING default::Creator {
      CREATE MULTI LINK members: default::Creator;
  };
  CREATE TYPE default::Person EXTENDING default::Creator;
  ALTER TYPE default::Edition {
      CREATE LINK parent: default::LiterateWork;
  };
  ALTER TYPE default::LiterateWork {
      CREATE LINK editions := (.<parent[IS default::Edition]);
  };
};

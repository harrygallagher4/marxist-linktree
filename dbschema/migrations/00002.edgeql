CREATE MIGRATION m13rnetexxppx7fp2cgmoqsp7spfcbqenlafapmor5my5bxa55vf3q
    ONTO m1wdsruxzhfgpuga7jzylsc3b4jzpbkghworm5nrakyn432xxel6na
{
  CREATE TYPE default::EditionFile {
      CREATE LINK edition: default::Edition;
      CREATE PROPERTY file_extension: std::str;
      CREATE PROPERTY filename: std::str;
      CREATE PROPERTY filetype: std::str;
      CREATE PROPERTY thumbnail: std::str;
      CREATE PROPERTY url: std::str;
  };
  ALTER TYPE default::Edition {
      CREATE LINK files := (.<edition[IS default::EditionFile]);
  };
  CREATE ABSTRACT TYPE default::Tag {
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY slug: std::str;
  };
  ALTER TYPE default::Work {
      CREATE MULTI LINK tags: default::Tag;
  };
  CREATE TYPE default::SimpleTag EXTENDING default::Tag;
  CREATE TYPE default::SubjectTag EXTENDING default::Tag;
  CREATE TYPE default::VideoWork EXTENDING default::Work {
      CREATE PROPERTY url: std::str;
  };
};

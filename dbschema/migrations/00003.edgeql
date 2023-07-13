CREATE MIGRATION m1suw3yabjq2bmpeexoil2cozt3joobbpdhbnsehou34nc5bvvjwma
    ONTO m13rnetexxppx7fp2cgmoqsp7spfcbqenlafapmor5my5bxa55vf3q
{
  CREATE SCALAR TYPE default::ContributionType EXTENDING enum<Generic, Author, Editor, Translator>;
  ALTER ABSTRACT LINK default::contribution {
      CREATE PROPERTY contribution_type_e: default::ContributionType {
          SET default := (default::ContributionType.Generic);
      };
  };
};

CREATE MIGRATION m1nnzlt2j6kvd7pisb4hakmtlh7f5mwfdbbwydtwemvcnsfn5orcja
    ONTO m1vdh4mky33z4qtokqk6dou3a7wai7argikzrl7sndsjwga2gbyr2q
{
  ALTER TYPE default::Creator {
      DROP PROPERTY photo;
  };
};

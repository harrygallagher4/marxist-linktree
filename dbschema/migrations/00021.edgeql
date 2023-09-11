CREATE MIGRATION m12wv3zginxzl6nff6potteix5vgfm6xyelqth7eb6inb6tmgmyufq
    ONTO m1nnzlt2j6kvd7pisb4hakmtlh7f5mwfdbbwydtwemvcnsfn5orcja
{
  ALTER TYPE default::Creator {
      CREATE LINK image: default::File;
  };
};

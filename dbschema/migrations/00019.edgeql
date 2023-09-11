CREATE MIGRATION m1vdh4mky33z4qtokqk6dou3a7wai7argikzrl7sndsjwga2gbyr2q
    ONTO m13ja25glti5yu3ctwpmt5ub3chrgx7tmju2xkbwretg4t4bdcajja
{
  ALTER TYPE default::Work {
      CREATE LINK image: default::File;
  };
};

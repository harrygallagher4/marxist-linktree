CREATE MIGRATION m13ja25glti5yu3ctwpmt5ub3chrgx7tmju2xkbwretg4t4bdcajja
    ONTO m1liimedqigenn3lr5bbhg4zw77jcnubkg3rse546hjs4uhtcpgdpa
{
  ALTER TYPE default::Work {
      DROP PROPERTY image;
  };
};

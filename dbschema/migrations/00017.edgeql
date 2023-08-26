CREATE MIGRATION m1liimedqigenn3lr5bbhg4zw77jcnubkg3rse546hjs4uhtcpgdpa
    ONTO m1ol5gdq2x6k4g2xkedxqanjippmaynzphla2w3ysopgxr54s35srq
{
  ALTER TYPE default::Tag {
      ALTER PROPERTY slug {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};

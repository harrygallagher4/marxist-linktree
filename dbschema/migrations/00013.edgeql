CREATE MIGRATION m1itl26v4a5y3tg6tkezpekczp6btvozsqrcxespezntthcfxs2r4a
    ONTO m1t5k7wy7dqxodcphjactqcbsnlytodiub7lo3crun3jhr3x4z7d3q
{
  CREATE TYPE default::File {
      CREATE PROPERTY ext: std::str;
      CREATE PROPERTY path := ((<std::str>.id IF (.ext ?= <std::str>{}) ELSE (<std::str>.id ++ .ext)));
      CREATE PROPERTY mime: std::str;
  };
};

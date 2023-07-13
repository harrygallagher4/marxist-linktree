CREATE MIGRATION m1zkzztmoeqgryo33fivrqxg4m633nu2zxifq4iuhq6v2prcpaag5q
    ONTO m1gryjw6sg3w3mub7kqcjae2stu3frheudjeo7idourj3wjpv2s3da
{
  CREATE TYPE default::ExternalIdentifier {
      CREATE REQUIRED PROPERTY type: std::str;
      CREATE REQUIRED PROPERTY value: std::str;
  };
  ALTER TYPE default::Edition {
      CREATE MULTI LINK identifiers: default::ExternalIdentifier;
  };
  ALTER TYPE default::LiterateWork {
      CREATE MULTI LINK identifiers: default::ExternalIdentifier;
  };
};

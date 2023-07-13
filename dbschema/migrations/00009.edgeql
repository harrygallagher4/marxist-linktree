CREATE MIGRATION m17gprxxjvdgumogizmkcoxpk5b55g3azmw64lns2zw4puvnd5bilq
    ONTO m1zkzztmoeqgryo33fivrqxg4m633nu2zxifq4iuhq6v2prcpaag5q
{
  ALTER TYPE default::LiterateWork {
      DROP LINK identifiers;
  };
};

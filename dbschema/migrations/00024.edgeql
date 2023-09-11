CREATE MIGRATION m1h3acggaoti3jma7y3z2somfwptte4mzjc5fhzgvbpqivhk7bi2za
    ONTO m1mgimsrqthqrkil4d5yjuov4cnntpmqky36sp5jtlyoei6tcw6umq
{
  ALTER TYPE default::EditionFile {
      DROP PROPERTY thumbnail;
  };
};

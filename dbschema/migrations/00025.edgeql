CREATE MIGRATION m1dcbymvqvqxsw4lwawotz2qmmeq4xvqe4s5fi4w3lf62rtryuupma
    ONTO m1h3acggaoti3jma7y3z2somfwptte4mzjc5fhzgvbpqivhk7bi2za
{
  ALTER TYPE default::EditionFile {
      CREATE LINK thumbnail: default::File;
  };
};

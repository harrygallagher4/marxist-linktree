CREATE MIGRATION m1mgimsrqthqrkil4d5yjuov4cnntpmqky36sp5jtlyoei6tcw6umq
    ONTO m1n5xokzi6atbsehzvizv22urlmyqgf74y3dicbuu5vd6zlxrpwuuq
{
  ALTER TYPE default::Edition {
      CREATE LINK image: default::File;
  };
};

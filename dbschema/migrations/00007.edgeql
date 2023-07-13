CREATE MIGRATION m1gryjw6sg3w3mub7kqcjae2stu3frheudjeo7idourj3wjpv2s3da
    ONTO m1pzmwqd6kha5nhfvzkcxp6bobybklm3ciiic2n5gkbepk2jodzxqq
{
  ALTER ABSTRACT LINK default::contribution {
      CREATE PROPERTY order: std::int16 {
          SET default := 0;
      };
  };
};

CREATE MIGRATION m1t5k7wy7dqxodcphjactqcbsnlytodiub7lo3crun3jhr3x4z7d3q
    ONTO m1jqvgzhuq5tsxcfzmka4hbee3zshf3mhr2cai34wsxilx4n7e52tq
{
  ALTER TYPE default::Creator {
      CREATE MULTI LINK tags: default::Tag;
  };
};

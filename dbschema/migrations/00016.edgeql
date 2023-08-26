CREATE MIGRATION m1ol5gdq2x6k4g2xkedxqanjippmaynzphla2w3ysopgxr54s35srq
    ONTO m14y4bb5iheulnaekowoqg4lsmxn7tu3ezfvtbqvattv77pbucr2fq
{
  ALTER TYPE default::File {
      CREATE PROPERTY name: std::str;
  };
};

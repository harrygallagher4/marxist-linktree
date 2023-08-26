CREATE MIGRATION m14y4bb5iheulnaekowoqg4lsmxn7tu3ezfvtbqvattv77pbucr2fq
    ONTO m1h4scch46ry5uat24idevngr5fdxeor3jho4fb4flocjzuagnh3aa
{
  ALTER TYPE default::File {
      CREATE REQUIRED PROPERTY oid: std::uuid {
          SET default := (std::uuid_generate_v4());
      };
      ALTER PROPERTY path {
          USING ((<std::str>.oid IF (.ext ?= <std::str>{}) ELSE ((<std::str>.oid ++ '.') ++ .ext)));
      };
  };
};

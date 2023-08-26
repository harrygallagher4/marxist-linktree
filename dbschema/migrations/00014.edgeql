CREATE MIGRATION m1h4scch46ry5uat24idevngr5fdxeor3jho4fb4flocjzuagnh3aa
    ONTO m1itl26v4a5y3tg6tkezpekczp6btvozsqrcxespezntthcfxs2r4a
{
  ALTER TYPE default::File {
      ALTER PROPERTY path {
          USING ((<std::str>.id IF (.ext ?= <std::str>{}) ELSE ((<std::str>.id ++ '.') ++ .ext)));
      };
  };
};

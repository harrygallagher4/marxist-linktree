CREATE MIGRATION m1vm4iddmdf4phzxtlzfxy4vlwzalso4wiuhteky553ztt4vvk57ja
    ONTO m1m6gyij5fxwykpha6zza7hmhhugmyi5ygibnabmcel6ub2zrcxvbq
{
  ALTER ABSTRACT LINK default::contribution {
      ALTER PROPERTY contribution_type_e {
          RENAME TO contribution_type;
      };
  };
};

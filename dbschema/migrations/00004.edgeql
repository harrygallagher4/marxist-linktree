CREATE MIGRATION m1m6gyij5fxwykpha6zza7hmhhugmyi5ygibnabmcel6ub2zrcxvbq
    ONTO m1suw3yabjq2bmpeexoil2cozt3joobbpdhbnsehou34nc5bvvjwma
{
  ALTER ABSTRACT LINK default::contribution {
      DROP PROPERTY contribution_type;
  };
};

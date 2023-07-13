CREATE MIGRATION m1pzmwqd6kha5nhfvzkcxp6bobybklm3ciiic2n5gkbepk2jodzxqq
    ONTO m1vm4iddmdf4phzxtlzfxy4vlwzalso4wiuhteky553ztt4vvk57ja
{
  ALTER TYPE default::Creator {
      CREATE LINK works := (.<contributors[IS default::Work]);
  };
};

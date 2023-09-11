CREATE MIGRATION m1n5xokzi6atbsehzvizv22urlmyqgf74y3dicbuu5vd6zlxrpwuuq
    ONTO m12wv3zginxzl6nff6potteix5vgfm6xyelqth7eb6inb6tmgmyufq
{
  ALTER TYPE default::Edition {
      DROP PROPERTY image;
  };
};

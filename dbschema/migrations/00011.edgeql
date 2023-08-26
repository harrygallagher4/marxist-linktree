CREATE MIGRATION m1jqvgzhuq5tsxcfzmka4hbee3zshf3mhr2cai34wsxilx4n7e52tq
    ONTO m1hsaxeotz6o4knx5dbg3i6j36rb3yec4nd36yu5cfbvjbtbycp4gq
{
  CREATE TYPE default::PodcastEpisodeWork EXTENDING default::Work {
      CREATE MULTI LINK urls: default::ExternalIdentifier;
  };
  CREATE TYPE default::PodcastWork EXTENDING default::Work {
      CREATE MULTI LINK urls: default::ExternalIdentifier;
  };
  ALTER TYPE default::PodcastEpisodeWork {
      CREATE LINK show: default::PodcastWork;
  };
  ALTER TYPE default::PodcastWork {
      CREATE LINK episodes := (.<show[IS default::PodcastEpisodeWork]);
  };
  ALTER TYPE default::Tag {
      CREATE LINK works := (.<tags[IS default::Work]);
      ALTER PROPERTY slug {
          SET REQUIRED USING (<std::str>'');
      };
  };
};

CREATE MIGRATION m1hsaxeotz6o4knx5dbg3i6j36rb3yec4nd36yu5cfbvjbtbycp4gq
    ONTO m17gprxxjvdgumogizmkcoxpk5b55g3azmw64lns2zw4puvnd5bilq
{
  ALTER TYPE default::Work {
      CREATE MULTI LINK identifiers: default::ExternalIdentifier;
  };
};

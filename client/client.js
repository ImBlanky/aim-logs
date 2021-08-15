const { Delay } = require("../config");

setTick(async () => {
  let sleep = 1000;
  Delay(sleep);

  let ped = PlayerPedId();
  let pedArmed = false;

  if (DoesEntityExist(ped)) {
    if ((IsPedArmed(ped), 4)) {
      pedArmed = true;

      let pedAiming,
        target = GetEntityPlayerIsFreeAimingAt(PlayerId(-1));

      if (pedAiming) {
        if (IsEntityAPed(target) && DoesEntityExist(target)) {
          if (IsPedAPlayer(target)) {
            let index = NetworkGetPlayerIndexFromPed(target);

            if (index) {
              let id = GetPlayerServerId(target);

              if (id > 0 && id) {
                emitNet("blankyNet:aimlogs:logger", id);
              }
            }
          }
        }
      }
    }
  }

  if (!pedArmed) {
    Delay(sleep);
  }
});

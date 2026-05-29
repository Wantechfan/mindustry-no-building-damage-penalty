Events.on(ClientLoadEvent, e => { 
    //Serpulos
    Blocks.lancer.shootType.buildingDamageMultiplier = 1;
    Blocks.arc.shootType.buildingDamageMultiplier = 1;
    Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).buildingDamageMultiplier = 1;

    UnitTypes.alpha.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    UnitTypes.beta.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    UnitTypes.gamma.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    //Scathe
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.fragBullet.spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
});

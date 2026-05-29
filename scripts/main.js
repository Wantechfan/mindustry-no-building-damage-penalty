Events.on(ClientLoadEvent, e => { 
    //Scathe
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.fragBullet.spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
});

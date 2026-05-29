Events.on(ClientLoadEvent, e => { 
    //Serpulos
    Blocks.lancer.shootType.buildingDamageMultiplier = 1;
    Blocks.arc.shootType.buildingDamageMultiplier = 1;
    Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).buildingDamageMultiplier = 1;

    UnitTypes.alpha.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    UnitTypes.beta.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    UnitTypes.gamma.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    
    //Erekirs
    Blocks.breach.ammoTypes.get(Items.beryllium).buildingDamageMultiplier = 1;
    Blocks.breach.ammoTypes.get(Items.tungsten).buildingDamageMultiplier = 1;
    Blocks.breach.ammoTypes.get(Items.carbide).buildingDamageMultiplier = 1;
    Blocks.breach.ammoTypes.get(Items.carbide).fragBullet.buildingDamageMultiplier = 1;

    Blocks.diffuse.ammoTypes.get(Items.graphite).buildingDamageMultiplier = 1;
    Blocks.diffuse.ammoTypes.get(Items.oxide).buildingDamageMultiplier = 1;
    Blocks.diffuse.ammoTypes.get(Items.silicon).buildingDamageMultiplier = 1;

    Blocks.sublimate.ammoTypes.get(Liquids.ozone).buildingDamageMultiplier = 1;
    Blocks.sublimate.ammoTypes.get(Liquids.cyanogen).buildingDamageMultiplier = 1;

    Blocks.titan.ammoTypes.get(Items.thorium).buildingDamageMultiplier = 1;
    Blocks.titan.ammoTypes.get(Items.carbide).buildingDamageMultiplier = 1;
    Blocks.titan.ammoTypes.get(Items.carbide).fragBullet.buildingDamageMultiplier = 1;
    Blocks.titan.ammoTypes.get(Items.oxide).buildingDamageMultiplier = 1;
    Blocks.titan.ammoTypes.get(Items.oxide).fragBullet.intervalBullet.buildingDamageMultiplier = 1;

    Blocks.afflict.shootType.buildingDamageMultiplier = 1;
    Blocks.afflict.shootType.fragBullet.buildingDamageMultiplier = 1;

    Blocks.lustre.shootType.buildingDamageMultiplier = 1;
    
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.carbide).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.phaseFabric).spawnUnit.weapons.get(0).bullet.fragBullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;
    Blocks.scathe.ammoTypes.get(Items.surgeAlloy).spawnUnit.weapons.get(0).bullet.fragBullet.spawnUnit.weapons.get(0).bullet.buildingDamageMultiplier = 1;

    Blocks.smite.ammoTypes.get(Items.surgeAlloy).buildingDamageMultiplier = 1;
    Blocks.smite.ammoTypes.get(Items.surgeAlloy).intervalBullet.buildingDamageMultiplier = 1;
    Blocks.smite.ammoTypes.get(Items.surgeAlloy).lightningType.buildingDamageMultiplier = 1;

    Blocks.malign.shootType.buildingDamageMultiplier = 1;
    Blocks.malign.shootType.fragBullet.buildingDamageMultiplier = 1;
});

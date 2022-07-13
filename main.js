const personageMountBlade = {
    name: 'Kion',
    force: 7, //сила
    dexterity: 4,  //ловкость
    intellect: 9,   //интелект
    character: 6,  // характр 

    skill:  {
    survivability: 4,  // живучесть 
    tactics: 8,  //  тактика  
    belief: 3,  //  убеждение  
    trade : 2,  // торговля 
    leadership: 4, //  лидерство}
    },

    attainments: {
    possessionWeapon: 5, // владение оружием
    equitation: 1, //  верховая езда
    shieldWielding: 2,//  владение щитом 
    },

    train: function (){ //тренироваться  
          this.force++
          this.dexterity++
    },

    fight: function (){ //сражаться
        this.attainments.possessionWeapon++
        this.attainments.equitation++
        this.attainments.shieldWielding++
    }, 

    participateTournament: function (){ //участвовать в турнире
        this.skill.leadership++
    }, 

    beTreated: function (){ //лечиться
       this.skill.survivability++
       this.force--
       this.dexterity--
       this.attainments.possessionWeapon--
       this.attainments.equitation--
       this.attainments.shieldWielding--
    }, 
    rest: function (){ //отдыхать
        this.force--
        this.dexterity--
        this.attainments.possessionWeapon--
        this.attainments.equitation--
        this.attainments.shieldWielding--
        this.character++
    }, 
    read: function (){ //читать
        this.character++
        this.intellect++
        this.intellect++
        this.skill.tactics++
        this.skill.belief
        this.skill.trade
    }, 

}
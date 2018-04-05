import React, { PureComponent } from 'react';

import Name from '../components/Name';

export default class Pokemons extends PureComponent {
    constructor(props) {
        super(props);
        this.pokemons=[
            {
                "url": "https://pokeapi.co/api/v2/pokemon/1/",
                "name": "bulbasaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/2/",
                "name": "ivysaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/3/",
                "name": "venusaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/4/",
                "name": "charmander"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/5/",
                "name": "charmeleon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/6/",
                "name": "charizard"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/7/",
                "name": "squirtle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/8/",
                "name": "wartortle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/9/",
                "name": "blastoise"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/10/",
                "name": "caterpie"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/11/",
                "name": "metapod"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/12/",
                "name": "butterfree"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/13/",
                "name": "weedle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/14/",
                "name": "kakuna"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/15/",
                "name": "beedrill"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/16/",
                "name": "pidgey"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/17/",
                "name": "pidgeotto"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/18/",
                "name": "pidgeot"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/19/",
                "name": "rattata"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/20/",
                "name": "raticate"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/21/",
                "name": "spearow"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/22/",
                "name": "fearow"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/23/",
                "name": "ekans"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/24/",
                "name": "arbok"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/25/",
                "name": "pikachu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/26/",
                "name": "raichu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/27/",
                "name": "sandshrew"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/28/",
                "name": "sandslash"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/29/",
                "name": "nidoran-f"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/30/",
                "name": "nidorina"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/31/",
                "name": "nidoqueen"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/32/",
                "name": "nidoran-m"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/33/",
                "name": "nidorino"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/34/",
                "name": "nidoking"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/35/",
                "name": "clefairy"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/36/",
                "name": "clefable"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/37/",
                "name": "vulpix"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/38/",
                "name": "ninetales"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/39/",
                "name": "jigglypuff"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/40/",
                "name": "wigglytuff"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/41/",
                "name": "zubat"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/42/",
                "name": "golbat"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/43/",
                "name": "oddish"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/44/",
                "name": "gloom"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/45/",
                "name": "vileplume"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/46/",
                "name": "paras"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/47/",
                "name": "parasect"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/48/",
                "name": "venonat"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/49/",
                "name": "venomoth"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/50/",
                "name": "diglett"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/51/",
                "name": "dugtrio"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/52/",
                "name": "meowth"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/53/",
                "name": "persian"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/54/",
                "name": "psyduck"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/55/",
                "name": "golduck"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/56/",
                "name": "mankey"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/57/",
                "name": "primeape"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/58/",
                "name": "growlithe"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/59/",
                "name": "arcanine"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/60/",
                "name": "poliwag"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/61/",
                "name": "poliwhirl"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/62/",
                "name": "poliwrath"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/63/",
                "name": "abra"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/64/",
                "name": "kadabra"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/65/",
                "name": "alakazam"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/66/",
                "name": "machop"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/67/",
                "name": "machoke"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/68/",
                "name": "machamp"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/69/",
                "name": "bellsprout"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/70/",
                "name": "weepinbell"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/71/",
                "name": "victreebel"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/72/",
                "name": "tentacool"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/73/",
                "name": "tentacruel"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/74/",
                "name": "geodude"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/75/",
                "name": "graveler"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/76/",
                "name": "golem"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/77/",
                "name": "ponyta"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/78/",
                "name": "rapidash"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/79/",
                "name": "slowpoke"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/80/",
                "name": "slowbro"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/81/",
                "name": "magnemite"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/82/",
                "name": "magneton"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/83/",
                "name": "farfetchd"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/84/",
                "name": "doduo"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/85/",
                "name": "dodrio"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/86/",
                "name": "seel"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/87/",
                "name": "dewgong"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/88/",
                "name": "grimer"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/89/",
                "name": "muk"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/90/",
                "name": "shellder"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/91/",
                "name": "cloyster"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/92/",
                "name": "gastly"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/93/",
                "name": "haunter"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/94/",
                "name": "gengar"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/95/",
                "name": "onix"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/96/",
                "name": "drowzee"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/97/",
                "name": "hypno"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/98/",
                "name": "krabby"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/99/",
                "name": "kingler"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/100/",
                "name": "voltorb"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/101/",
                "name": "electrode"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/102/",
                "name": "exeggcute"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/103/",
                "name": "exeggutor"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/104/",
                "name": "cubone"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/105/",
                "name": "marowak"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/106/",
                "name": "hitmonlee"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/107/",
                "name": "hitmonchan"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/108/",
                "name": "lickitung"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/109/",
                "name": "koffing"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/110/",
                "name": "weezing"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/111/",
                "name": "rhyhorn"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/112/",
                "name": "rhydon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/113/",
                "name": "chansey"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/114/",
                "name": "tangela"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/115/",
                "name": "kangaskhan"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/116/",
                "name": "horsea"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/117/",
                "name": "seadra"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/118/",
                "name": "goldeen"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/119/",
                "name": "seaking"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/120/",
                "name": "staryu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/121/",
                "name": "starmie"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/122/",
                "name": "mr-mime"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/123/",
                "name": "scyther"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/124/",
                "name": "jynx"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/125/",
                "name": "electabuzz"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/126/",
                "name": "magmar"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/127/",
                "name": "pinsir"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/128/",
                "name": "tauros"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/129/",
                "name": "magikarp"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/130/",
                "name": "gyarados"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/131/",
                "name": "lapras"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/132/",
                "name": "ditto"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/133/",
                "name": "eevee"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/134/",
                "name": "vaporeon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/135/",
                "name": "jolteon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/136/",
                "name": "flareon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/137/",
                "name": "porygon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/138/",
                "name": "omanyte"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/139/",
                "name": "omastar"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/140/",
                "name": "kabuto"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/141/",
                "name": "kabutops"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/142/",
                "name": "aerodactyl"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/143/",
                "name": "snorlax"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/144/",
                "name": "articuno"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/145/",
                "name": "zapdos"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/146/",
                "name": "moltres"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/147/",
                "name": "dratini"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/148/",
                "name": "dragonair"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/149/",
                "name": "dragonite"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/150/",
                "name": "mewtwo"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/151/",
                "name": "mew"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/152/",
                "name": "chikorita"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/153/",
                "name": "bayleef"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/154/",
                "name": "meganium"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/155/",
                "name": "cyndaquil"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/156/",
                "name": "quilava"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/157/",
                "name": "typhlosion"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/158/",
                "name": "totodile"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/159/",
                "name": "croconaw"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/160/",
                "name": "feraligatr"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/161/",
                "name": "sentret"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/162/",
                "name": "furret"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/163/",
                "name": "hoothoot"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/164/",
                "name": "noctowl"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/165/",
                "name": "ledyba"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/166/",
                "name": "ledian"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/167/",
                "name": "spinarak"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/168/",
                "name": "ariados"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/169/",
                "name": "crobat"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/170/",
                "name": "chinchou"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/171/",
                "name": "lanturn"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/172/",
                "name": "pichu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/173/",
                "name": "cleffa"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/174/",
                "name": "igglybuff"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/175/",
                "name": "togepi"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/176/",
                "name": "togetic"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/177/",
                "name": "natu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/178/",
                "name": "xatu"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/179/",
                "name": "mareep"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/180/",
                "name": "flaaffy"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/181/",
                "name": "ampharos"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/182/",
                "name": "bellossom"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/183/",
                "name": "marill"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/184/",
                "name": "azumarill"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/185/",
                "name": "sudowoodo"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/186/",
                "name": "politoed"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/187/",
                "name": "hoppip"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/188/",
                "name": "skiploom"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/189/",
                "name": "jumpluff"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/190/",
                "name": "aipom"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/191/",
                "name": "sunkern"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/192/",
                "name": "sunflora"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/193/",
                "name": "yanma"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/194/",
                "name": "wooper"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/195/",
                "name": "quagsire"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/196/",
                "name": "espeon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/197/",
                "name": "umbreon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/198/",
                "name": "murkrow"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/199/",
                "name": "slowking"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/200/",
                "name": "misdreavus"
            }
        ];
        this.result=[];
        this.resultGet = function () {
            /*fetch('https://pokeapi.co/api/v2/pokemon/?limit=200').then(response => response.json())
                .then(res => res.results).then(poki => {
                    for(let i=0, b=1; i<poki.length; i++, b++){
                        this.result.push(<Name pokiName={poki[i].name} imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${b}.png`}/>);
                }
            }); Так при изначально пустом массиве results не пашет,
            хотя в консоль выводится наполненый ожидаемыми объектами массив*/
            /*-----------------------------Вводим массив pokemons--------------------------------------------*/
            for(let i=0, b=1; i<this.pokemons.length; i++, b++){
                this.result.push(<Name pokiName={this.pokemons[i].name} imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${b}.png`}/>);
            }
            /*-------------------------------И ВСЕ РАБОТАЕТ. ПОЧЕМУ ТАК?-----------------------------------------*/
        }
    }
    componentWillMount(){
       this.resultGet();
        console.log(this.result);
    }
    render() {
        return <div className="pokemons">
            {this.result}
        </div>;
    }
}
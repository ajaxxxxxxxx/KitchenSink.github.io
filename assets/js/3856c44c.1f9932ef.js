"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1335],{1392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(5893),o=n(1151);const i={layout:"default",title:"Combat Extender and Game Mechanics and Balance Changes",nav_order:4,description:"Listonomicon"},s=void 0,r={id:"7listo/GameBalance",title:"Combat Extender and Game Mechanics and Balance Changes",description:"Listonomicon",source:"@site/docs/7listo/4-GameBalance.md",sourceDirName:"7listo",slug:"/7listo/GameBalance",permalink:"/docs/7listo/GameBalance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"default",title:"Combat Extender and Game Mechanics and Balance Changes",nav_order:4,description:"Listonomicon"},sidebar:"tutorialSidebar",previous:{title:"Class, Feats, Features, Leveling, Character Creation and Customization, and other Gameplay Notes",permalink:"/docs/7listo/CharacterCreate"},next:{title:"Changes to Gameplay, Gear, QoL, Magic Items, Clothes, Armor, and Everything Else",permalink:"/docs/7listo/GameplayAndGear"}},l={},d=[{value:"Game Balance and Combat Extender vs Extended Level Scale",id:"game-balance-and-combat-extender-vs-extended-level-scale",level:2},{value:"Party Size, Game Balance, and Performance",id:"party-size-game-balance-and-performance",level:2},{value:"Customized Custom Difficulty",id:"customized-custom-difficulty",level:2},{value:"Mod Configuration Menu",id:"mod-configuration-menu",level:2},{value:"Initiative",id:"initiative",level:2},{value:"Optional Difficulty Mods",id:"optional-difficulty-mods",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"game-balance-and-combat-extender-vs-extended-level-scale",children:"Game Balance and Combat Extender vs Extended Level Scale"}),"\n",(0,a.jsxs)(t.p,{children:["With ",(0,a.jsx)(t.a,{href:"https://www.nexusmods.com/baldursgate3/mods/5207/?tab=description&topic_id=13712501",children:"Combat Extender"}),", enemies will have access to 5e and Homebrew spells, will fight smarter, and receive additional buffs to catch up/try to keep pace with exponential player power."]}),"\n",(0,a.jsx)(t.p,{children:"Enemies receive proportional increases to HP according to the player\u2019s level. Their stats, AC, rolls, etc are improved proportional to their own level. This means all enemies are more dangerous (with higher level enemies being even more dangerous, and the few bosses over level 12 being especially dangerous) - but the player can, and will, still experience some amount of power fantasy as they eventually outpace the power of mook enemies. The goal of this enemy tuning is to keep combat challenging for longer, challenging players to consider their equipment, spells, and class features with more critical thinking than vanilla BG3. Bosses are especially enhanced, with many assigned direct manual tweaks to provide them with new abilities and sources of danger. CX decisions are made on the assumption that players will honor Listonomicon\u2019s recommendation to keep their party size between 4 and 6 characters, and play on the custom difficulty settings described at the bottom of the List install instructions (mostly tactician, with harder shopping and more food required for Long Rest), as well as explore all of the options they now have such as enhanced access to feats, new magic items for sale or found in the world, etc. Some of the new spells given to enemies can be quite nasty, but the most debilitating ones (like turn to stone, or AoE banish effects) should be limited to boss encounters like Nere and Balthazar. As a baseline, boss fights are tuned to be difficult, regular encounters should be less easy, and Larian has allowed us to enable honour mode rules (including anti damage rider cheese and enhanced enemy abilities) without the single save limit."}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"You are expected to run away from some fights. Or assess your enemies, and choose to come back when you are prepared. Do not blindly run into every encounter! You will be challenged to pick your fights during Act 1 and will need to gather characters, gear, and levels to prepare for some enemies."})}),"\n",(0,a.jsx)(t.p,{children:"Combat should be surprising and challenging, not slow and tedious; please report enemies appearing with excess HP and AC. The one known flaw in how mods implement balance tweaks to Listonomicon is the manner in which NPCs are given extra damage: Split attacks, such as magic missile and ray of fire, will add this extra damage to each attack, much like the Agonizing Blast +cha damage bonus is added to each beam of Eldritch Blast. This can lead to unexpected, huge spikes of damage from enemy casters, especially in the early game. Focus fire on enemy mages! In addition, there are a small number of transforming enemies that interact in unpredictable ways with Combat Extender. Some gain too much HP, some don\u2019t get any bonus HP at all."}),"\n",(0,a.jsx)(t.p,{children:"Currently, Combat Extender does not apply equally to new encounters added by mods. Enemies seem to be affected by some aspects of gross stat enhancement, however they will not always receive extra spells, spell slots, class features, or other changes that depend on CX operating off of vanilla tags that define enemies as fighters, mages, etc. Do not expect all of AEE\u2019s encounters to be scaled the same way vanilla encounters are, or for casters in modded encounters to be given the same 5e and Homebrew spell lists. This is the present focus of CX edits in Listo updates, as recently the means of editing mod encounters have been discovered. Most likely, optional mods (like Many More Enemies) will never receive specific CX edits, but Valkrana's Undead Encounters (VUE) and Encounters Overhaul (EO, sometimes referred to as AEE from its previous name) are receiving thoughtful CX passes to make their experience consistent with the rest of Listonomicon. Check #combat-extender-tests-and-ideas on our Discord for the latest test config files and to discuss how to make CX better!"}),"\n",(0,a.jsx)(t.p,{children:"Many vanilla encounters have been significantly altered through the use of Combat Extender. Specific encounters in need of a punchup to stay relevant versus player power in Listonomicon have been tweaked, with some normal and many boss encounters being given feats, new spells, or the unique abilities of other creatures. Many enemies now rely on wild magic, and enemies you didn't even know could cast spells will surprise you."}),"\n",(0,a.jsx)(t.h2,{id:"party-size-game-balance-and-performance",children:"Party Size, Game Balance, and Performance"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Recommended party size is between 4 and 6. Use more companions at your peril. You set your party size with the ",(0,a.jsx)(t.a,{href:"https://www.nexusmods.com/baldursgate3/mods/11172?tab=description",children:"Mod Config Menu"})," (defaults to 6). It is better to use a bigger party in the early game (5-6 members) to help survive the initial struggle to get extra attack, magic items, a potion stockpile, etc. It is better to use a smaller party on the way to/in Act 3 (3-4 members) to help keep the game challenging, as well as to reduce the late game performance/FPS struggle."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Nothing stops you from filling your party with 12 characters. But this is detrimental to game performance and completely trivializes encounter difficulty.\nThe option for an unlimited party is convenient for ensuring story-relevant characters are available for the scenes and situations where you need them. It\u2019s also easier to juggle inventories around, compare stats, and other activities when you can add and remove a larger number of party members. However, even one extra party member is another action, bonus action, multiple gear slots, another opportunity to roll high on initiative, more healing or offensive spells, etc, added to your party\u2019s power in encounters. The game gets exponentially easier as the party size increases, and Combat Extender, Honour Mode, and other mods and game features can only do so much to counteract this phenomenon.\nTo this end, Listonomicon is recommended to play with 5 characters in the party. 3 or 4 for a challenge, 6 to make it easier. But it is up to you (and changing the party size in the mod configuration menu) to figure out how many (or how few) heroes is fun \u2013 and what your PC can handle. For example, my PC can survive most of the game with 6 heroes, but two necromancers who also summon four familiars and a beholderkin each leads to many CTDs. YMMV. If the game is feeling too easy, drop your party size and/or try enabling some of Listo\u2019s optional mods.\nYou can enable Sit This One Out 2 in Optional Mods if you want to maintain a large party, but make some companions unable to join combat."})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.nexusmods.com/baldursgate3/mods/327",children:"Do not ride boats with more than 4 party members"}),". At this time, the only known game breaking bug caused by party size is riding the boats to Grymforge. If any characters get stuck, dismiss as many working characters as possible; ride the boat back to the UD; and then ride the boat back to Grymforge, and the missing characters should arrive safely in Grymforge. Sometimes characters will fall off elevators and other moving platforms in the game when you have too many members. The creche elevator has a hard time fitting everyone. Excess party members may fall off the moving platform in Shar's temple. All other level transitions I have tested work, so far."]})}),"\n",(0,a.jsx)(t.h2,{id:"customized-custom-difficulty",children:"Customized Custom Difficulty"}),"\n",(0,a.jsx)(t.p,{children:"Listonomicon\u2019s recommended custom difficulty settings have enemy aggression, power, and equipment set to \u201cTactician.\u201d The player gets no special bonuses to rolls and neither do enemies. Camp costs are tripled, meaning it requires 120 Food Units to long rest. Merchant prices are x4, and selling prices are 1/4. Nothing in the UI is hidden from the player such as NPC health or roll DC previews. The customized difficulty is just like you started a game on Tactician, with food and shopping made more difficult. If you plan to use Randomized Equipment Loot (optional mod), it may be a good idea to reduce the merchant price setting (decreases price to buy, increases profit to sell) to help balance out the unpredictable access to magic items and equipment."}),"\n",(0,a.jsx)(t.h2,{id:"mod-configuration-menu",children:"Mod Configuration Menu"}),"\n",(0,a.jsx)(t.p,{children:"When you pause the game, you should see a new option for the Mod Configuration Menu. If this button does not work, you can also hit \u201c;\u201d to open the MCM. The various (official) mods in Listo have already been configured to work together with each other and the rest of the list, and match the intended game experience. Some of the optional mods have preconfigured settings. Use this menu to edit settings further to your taste. If you decide that your character is walking too fast, or too slow; you don\u2019t like the config for auto loot seller; you want to disable all of the liquor being sent straight to your camp chest; or otherwise want to change settings, you can modify many mods in the MCM or find their config files in [listo install location]/mods/zzz_ListonomiconMOdSettings/SE_CONFIG. Make changes at your own peril!"}),"\n",(0,a.jsx)(t.h2,{id:"initiative",children:"Initiative"}),"\n",(0,a.jsxs)(t.p,{children:["Initiative in Listonomicon is calculated using a roll of d8+dex+bonuses. The vanilla calculation uses a d4 while the tabletop uses a d20. There are pros and cons to all three approaches. d8 was chosen to provide ",(0,a.jsx)(t.em,{children:"enough"})," randomness to prevent most characters from consistently \u201cbeating\u201d the initiative mechanic, while still enabling rogue (assassin)s, and other characters who heavily rely on going first to reasonably guarantee success with the Alert feat, high dex, and +init gear."]}),"\n",(0,a.jsx)(t.h2,{id:"optional-difficulty-mods",children:"Optional Difficulty Mods"}),"\n",(0,a.jsxs)(t.p,{children:["Absolute Wrath is the patrician's choice for a more challenging Listo experience, and will enable ",(0,a.jsx)(t.em,{children:"random"})," buffs to be applied to enemies. These buffs range from mild (resistance to common damage types) to wild (explodes on death in a cloud that disarms and confuses anyone nearby while triggering a wild magic surge). Listo's CX config intentionally applies a number of curated choices from AW to various enemies; enabling Absolute Wrath will enable ",(0,a.jsx)(t.em,{children:"both"}),' the original purpose of the mod (random distribution of modifiers), and the part of Listo\'s CX config that hands out AW modifiers. tl;dr even if no random effects are assigned in a particular fight, Listo will probably be harder - consider this the "Wild Wasteland" experience.']}),"\n",(0,a.jsx)(t.p,{children:'You can enable the randomization of most loot in the game using Randomized Equipment Loot v3 under "New Weapons, Armor, Clothes." You can find these and other optional Listo mods by searching MO2 for "OPTIONAL_" Most vanilla items (not counting quest rewards and plot relevant items) and any modded items above REL in the list will be randomly moved around the game. Make sure to disable Unarmed and Upgraded, Grove and Growl, Faith and Fortitude, and Beast and Bow -- and enable the version of those mods that says "REL." If using REL, you can also enable Random Starting Loot to get some extra (random) gear to start your adventure with, found on the dead illithid at the start of the prologue.'}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.nexusmods.com/baldursgate3/mods/11183",children:"Smarter AI MCM"})," gives enemies more nuanced personalities and decision making based on their intelligence and archetype. If you would prefer that every enemy fight like they are desperate to win, use ",(0,a.jsx)(t.a,{href:"https://www.nexusmods.com/baldursgate3/mods/5207",children:"CXAI"})," instead."]}),"\n",(0,a.jsx)(t.p,{children:'Other difficulty enhancing mods can be found under "I Wish The Game Was Harder" in MO2, such as Enemy Cloning. Note Enemy Cloning will require you to fine tune the frequency and number of duplicates to your liking via the MCM menu.'})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
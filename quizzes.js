
const LSN_QUIZZES = [
  {
    id:"frequency",
    number:"001",
    title:"FREQUENCY CHECK",
    question:"What frequency are you broadcasting on?",
    description:"Your baseline signal. How you move through people, attention, emotion and chaos.",
    time:"2 min",
    categories:["open","midnight","pirate","static","emergency","dead","echo"],
    results:{
      open:{title:"OPEN CHANNEL", code:"OPEN", freq:"92.8", color:"#5FC9D6", desc:"Clear, direct and almost suspiciously reachable. You say what you mean, show up when it matters and leave very little room for guessing.", badge:"quiz-open"},
      midnight:{title:"AFTER MIDNIGHT", code:"NITE", freq:"101.3", color:"#7A6FC4", desc:"You are not unavailable. You are selectively broadcast. The real version of you tends to appear when the room gets quiet.", badge:"quiz-midnight"},
      pirate:{title:"PIRATE FREQUENCY", code:"PRT", freq:"107.7", color:"#E85E7A", desc:"Unauthorized, magnetic and allergic to staying in the assigned lane. You make your own rules and somehow convince other people to tune in.", badge:"quiz-pirate"},
      static:{title:"SOFT STATIC", code:"STC", freq:"88.6", color:"#D6E85C", desc:"Warm but hard to read. You care deeply, communicate sideways and leave people trying to separate the message from the noise.", badge:"quiz-static"},
      emergency:{title:"EMERGENCY BAND", code:"SOS", freq:"95.5", color:"#D98E3B", desc:"Built for crisis. When everything goes sideways, you get clearer. Unfortunately, peace may leave you wondering what to do with your hands.", badge:"quiz-emergency"},
      dead:{title:"DEAD AIR", code:"OFF", freq:"89.1", color:"#9498A0", desc:"Private, guarded and difficult to reach once you shut the door. Your silence communicates plenty even when you swear it does not.", badge:"quiz-dead"},
      echo:{title:"ECHO SIGNAL", code:"ECH", freq:"103.9", color:"#FB8B24", desc:"People linger in you. Memories, grudges, love and old conversations have excellent acoustics in your head.", badge:"quiz-echo"}
    },
    questions:[
      {q:"Someone asks what is wrong. What do you do?", a:[["Tell them plainly.","open"],["Say nothing until much later.","midnight"],["Make a joke and redirect.","static"],["Leave them on read.","dead"]]},
      {q:"Your plans fall apart at the last second.", a:[["Fix it. Somebody has to.","emergency"],["Make a better plan on the fly.","pirate"],["Pretend you do not care.","dead"],["Text the one person you actually trust.","midnight"]]},
      {q:"Which kind of attention feels best?", a:[["Consistent and obvious.","open"],["Private and intense.","midnight"],["The kind I was not supposed to get.","pirate"],["I do not know until it is gone.","echo"]]},
      {q:"When conflict gets ugly, you usually...", a:[["Say the hard thing.","open"],["Get colder.","dead"],["Get sharper.","emergency"],["Say something funny that is not actually funny.","static"]]},
      {q:"Pick the sentence that sounds most like you.", a:[["If I want you, you will know.","open"],["You only know what I let you know.","midnight"],["Rules are suggestions with branding.","pirate"],["I still think about it sometimes.","echo"]]},
      {q:"Your worst habit in relationships?", a:[["Trying to fix everything.","emergency"],["Disappearing to process.","dead"],["Sending mixed signals by accident.","static"],["Returning to things I should leave buried.","echo"]]},
      {q:"Where are you most yourself?", a:[["In a room full of people I chose.","open"],["Late at night with one person.","midnight"],["Anywhere I was told not to be.","pirate"],["When everything is falling apart.","emergency"]]},
      {q:"What follows you around?", a:[["Old feelings.","echo"],["Unfinished conversations.","static"],["People trying to figure me out.","dead"],["Consequences.","pirate"]]}
    ]
  },
  {
    id:"redflag",
    number:"002",
    title:"RED FLAG DETECTOR",
    question:"What warning label should come with you?",
    description:"A lovingly disrespectful assessment of your character's worst interpersonal feature.",
    time:"2 min",
    categories:["runner","fixer","control","avoid","chaos"],
    results:{
      runner:{title:"EMOTIONAL HIT + RUN",code:"RUN",freq:"99.4",color:"#E85E7A",desc:"You create a moment, make it meaningful, then leave everybody standing there holding the emotional paperwork.",badge:"quiz-runner"},
      fixer:{title:"UNLICENSED REPAIR TECH",code:"FIX",freq:"93.6",color:"#5FC9D6",desc:"You keep trying to solve people who did not submit a maintenance request.",badge:"quiz-fixer"},
      control:{title:"CONTROL ROOM ACCESS",code:"CTL",freq:"104.1",color:"#D98E3B",desc:"You call it having standards. Other people occasionally call it managing a hostage negotiation.",badge:"quiz-control"},
      avoid:{title:"SIGNAL UNAVAILABLE",code:"404",freq:"88.9",color:"#9498A0",desc:"The conversation cannot hurt you if you mysteriously become impossible to contact.",badge:"quiz-avoid"},
      chaos:{title:"KNOWN INTERFERENCE",code:"INT",freq:"106.2",color:"#D6E85C",desc:"You are not always the problem. You are simply standing unusually close to the problem every single time.",badge:"quiz-chaos"}
    },
    questions:[
      {q:"Somebody wants to define the relationship.",a:[["I suddenly remember an appointment.","runner"],["We need rules first.","control"],["I ask what they need from me.","fixer"],["I make a joke that derails everything.","chaos"]]},
      {q:"You hurt somebody's feelings.",a:[["Fix it immediately.","fixer"],["Need space. A lot of it.","avoid"],["Explain why my reaction made sense.","control"],["Make it worse before making it better.","chaos"]]},
      {q:"Pick your recurring problem.",a:[["Leaving before I can be left.","runner"],["Trying to manage outcomes.","control"],["Carrying everybody.","fixer"],["Avoiding uncomfortable conversations.","avoid"]]},
      {q:"A text says 'we need to talk.'",a:[["No we do not.","avoid"],["What happened and how do I fix it?","fixer"],["I call immediately.","control"],["I send 'lol' and ruin the atmosphere.","chaos"]]},
      {q:"Which apology is most likely?",a:[["I should have stayed.","runner"],["I was trying to help.","fixer"],["I thought I knew what was best.","control"],["Sorry I vanished.","avoid"]]},
      {q:"Your friends describe you as...",a:[["Hard to pin down.","runner"],["Dependable to a fault.","fixer"],["Particular.","control"],["A disappearing act.","avoid"]]},
      {q:"The situation is calm. You...",a:[["Get suspicious.","chaos"],["Finally breathe.","fixer"],["Start planning three steps ahead.","control"],["Keep one foot near the exit.","runner"]]}
    ]
  },
  {
    id:"midnight",
    number:"003",
    title:"AFTER MIDNIGHT",
    question:"Who are you when nobody is watching?",
    description:"A quieter quiz about the version of your character that does not make it into public broadcast.",
    time:"3 min",
    categories:["soft","restless","lonely","dreamer","guarded"],
    results:{
      soft:{title:"SOFT FREQUENCY",code:"SFT",freq:"90.2",color:"#D4A6BD",desc:"Under the armor is somebody embarrassingly tender. Please act surprised.",badge:"quiz-soft"},
      restless:{title:"INSOMNIA BAND",code:"INS",freq:"102.7",color:"#7A6FC4",desc:"Your mind gets louder when the world gets quiet. You revisit, rehearse and rewrite.",badge:"quiz-restless"},
      lonely:{title:"ONE LISTENER",code:"ONE",freq:"87.9",color:"#5FC9D6",desc:"You do not need everybody. You do, however, deeply feel the absence of the right somebody.",badge:"quiz-lonely"},
      dreamer:{title:"DREAM SIGNAL",code:"DRM",freq:"96.8",color:"#D6E85C",desc:"You keep an entire private future alive in your head, even when you pretend not to hope for much.",badge:"quiz-dreamer"},
      guarded:{title:"ENCRYPTED LINE",code:"ENC",freq:"105.5",color:"#9498A0",desc:"Even alone, you keep certain doors locked. Privacy is not a habit. It is architecture.",badge:"quiz-guarded"}
    },
    questions:[
      {q:"At 2:14 AM you are most likely...",a:[["Thinking about one person.","lonely"],["Replaying an argument.","restless"],["Imagining a different life.","dreamer"],["Finally letting myself feel things.","soft"]]},
      {q:"What stays private?",a:[["Most of it.","guarded"],["How much I care.","soft"],["How much I miss people.","lonely"],["What I actually want.","dreamer"]]},
      {q:"An old photo appears.",a:[["I stare too long.","lonely"],["I smile despite myself.","soft"],["I close it immediately.","guarded"],["I spiral into the entire timeline.","restless"]]},
      {q:"Your private wish is mostly about...",a:[["Safety.","soft"],["A person.","lonely"],["Freedom.","dreamer"],["Peace and quiet in my own head.","restless"]]},
      {q:"When nobody needs anything from you...",a:[["I soften.","soft"],["I get restless.","restless"],["I disappear into my own world.","dreamer"],["I enjoy being unreachable.","guarded"]]},
      {q:"Which feels most dangerous?",a:[["Being truly known.","guarded"],["Hoping.","dreamer"],["Needing somebody.","lonely"],["Admitting I am tired.","soft"]]}
    ]
  },
  {
    id:"crisis",
    number:"004",
    title:"EMERGENCY CONTACT",
    question:"Who are you in a crisis?",
    description:"When the signal goes red, what role do you actually become?",
    time:"2 min",
    categories:["captain","medic","wildcard","anchor","runner"],
    results:{
      captain:{title:"CONTROL TOWER",code:"CTR",freq:"97.1",color:"#D98E3B",desc:"You start assigning jobs before anybody has finished panicking.",badge:"quiz-captain"},
      medic:{title:"FIRST RESPONSE",code:"MED",freq:"91.8",color:"#5AC88C",desc:"You check people before problems. Useful, compassionate and probably ignoring your own injuries.",badge:"quiz-medic"},
      wildcard:{title:"UNAUTHORIZED SOLUTION",code:"WLD",freq:"107.2",color:"#E85E7A",desc:"Nobody approved the plan because nobody had time to stop you.",badge:"quiz-wildcard"},
      anchor:{title:"STEADY SIGNAL",code:"ANC",freq:"94.7",color:"#5FC9D6",desc:"You make panic feel smaller simply by refusing to join it.",badge:"quiz-anchor"},
      runner:{title:"EXIT ROUTE",code:"EXT",freq:"89.5",color:"#9498A0",desc:"You know every door, shortcut and reason this situation is not worth dying over.",badge:"quiz-crisisrunner"}
    },
    questions:[
      {q:"Everything goes wrong at once.",a:[["Start delegating.","captain"],["Check if everybody is okay.","medic"],["Do something nobody suggested.","wildcard"],["Tell everybody to slow down.","anchor"]]},
      {q:"You hear sirens.",a:[["Locate the exits.","runner"],["Figure out whose problem this is.","captain"],["Stay with the most scared person.","anchor"],["Go see what happened.","wildcard"]]},
      {q:"Somebody is injured.",a:[["I am already helping.","medic"],["I call the shots.","captain"],["I get them out.","runner"],["I keep them calm.","anchor"]]},
      {q:"Your crisis flaw?",a:[["Bossy.","captain"],["Reckless.","wildcard"],["Forget myself.","medic"],["Leave too early.","runner"]]},
      {q:"The threat is over.",a:[["Now I fall apart.","anchor"],["Now I realize I am bleeding.","medic"],["Now I ask whether that was illegal.","wildcard"],["Now I count everybody.","captain"]]}
    ]
  },
  {
    id:"love",
    number:"005",
    title:"LOVE LANGUAGE // DISTORTED",
    question:"How does your character say 'I love you' without saying it?",
    description:"Not the five official love languages. The Low Signal bootleg edition.",
    time:"2 min",
    categories:["quiet","possession","tease","repair","presence"],
    results:{
      quiet:{title:"QUIET DEVOTION",code:"QDV",freq:"90.8",color:"#D4A6BD",desc:"You remember, notice and handle tiny things without announcing that you did.",badge:"quiz-quiet"},
      possession:{title:"ACTS OF POSSESSION",code:"POS",freq:"103.4",color:"#E85E7A",desc:"Your affection comes with a slight territorial hum. Charming until somebody checks the fine print.",badge:"quiz-possession"},
      tease:{title:"WEAPONIZED TEASING",code:"TEA",freq:"98.3",color:"#D6E85C",desc:"If you stop bothering somebody, that is when they should worry.",badge:"quiz-tease"},
      repair:{title:"REPAIR WORK",code:"REP",freq:"93.1",color:"#5FC9D6",desc:"You love by making life easier, fixing what broke and showing up with the thing nobody asked for out loud.",badge:"quiz-repair"},
      presence:{title:"STAYING ON THE LINE",code:"STY",freq:"95.9",color:"#7A6FC4",desc:"Your biggest declaration is remaining. Especially when leaving would be easier.",badge:"quiz-presence"}
    },
    questions:[
      {q:"They had a terrible day.",a:[["I fix dinner / the problem / both.","repair"],["I sit with them until it passes.","presence"],["I make them laugh.","tease"],["I quietly handle something they forgot.","quiet"]]},
      {q:"You miss somebody.",a:[["I find an excuse to be nearby.","presence"],["I send them something annoying.","tease"],["I check if they need anything.","repair"],["I get weirdly territorial about their time.","possession"]]},
      {q:"Your affection is easiest to spot in...",a:[["Details I remember.","quiet"],["Things I do.","repair"],["How often I stay.","presence"],["How much I bother you.","tease"]]},
      {q:"Jealousy appears. You...",a:[["Pretend I did not notice.","quiet"],["Make a joke with teeth.","tease"],["Get closer on purpose.","possession"],["Ask directly.","presence"]]},
      {q:"Best gift?",a:[["Something useful.","repair"],["Something only I would know they wanted.","quiet"],["My uninterrupted time.","presence"],["Something that says 'mine' a little too loudly.","possession"]]}
    ]
  },
  {
    id:"chaos",
    number:"006",
    title:"MAIN CHARACTER INTERFERENCE",
    question:"What kind of chaos follows you?",
    description:"Every character has a genre of disaster. Find yours.",
    time:"2 min",
    categories:["romance","family","crime","career","social"],
    results:{
      romance:{title:"ROMANTIC INTERFERENCE",code:"ROM",freq:"100.6",color:"#E85E7A",desc:"Your life would be simpler if attraction had an off switch. Tragic.",badge:"quiz-chaosromance"},
      family:{title:"FAMILY STATIC",code:"FAM",freq:"89.9",color:"#D98E3B",desc:"Somebody related to you is always calling, arriving, disappointing, needing or remembering.",badge:"quiz-chaosfamily"},
      crime:{title:"OFF-BOOK SIGNAL",code:"CRM",freq:"107.9",color:"#7A6FC4",desc:"Your problems have an alarming tendency to involve secrets, leverage, police, money or all four.",badge:"quiz-chaoscrime"},
      career:{title:"WORKPLACE FEEDBACK",code:"WRK",freq:"94.0",color:"#5FC9D6",desc:"Your job is not merely where you work. It has unfortunately become a plot device.",badge:"quiz-chaoscareer"},
      social:{title:"PUBLIC BROADCAST",code:"SOC",freq:"97.7",color:"#D6E85C",desc:"Your mess keeps acquiring witnesses.",badge:"quiz-chaossocial"}
    },
    questions:[
      {q:"Your phone rings with bad news. Who is it?",a:[["An ex.","romance"],["A relative.","family"],["Someone who should not have my number.","crime"],["My boss.","career"]]},
      {q:"What secret is hardest to contain?",a:[["Who I want.","romance"],["What happened at home.","family"],["What I did.","crime"],["What happened at work.","career"]]},
      {q:"Where does drama find you?",a:[["Dating.","romance"],["Family gatherings.","family"],["Behind closed doors.","crime"],["In front of everybody.","social"]]},
      {q:"Worst notification?",a:[["'Can we talk?'","romance"],["'Call your mother.'","family"],["Unknown number.","crime"],["'Meeting added to your calendar.'","career"]]},
      {q:"Your chaos becomes everybody else's because...",a:[["People take sides.","social"],["Family tells everybody.","family"],["There are witnesses.","crime"],["I work with half the people involved.","career"]]}
    ]
  },
  {id:"socialbattery",number:"007",title:"SOCIAL BATTERY",question:"How long before your character needs everybody to go home?",description:"A diagnosis of your character's people tolerance, recharge habits and social survival strategy.",time:"2 min",categories:["solar","selective","night","ghost"],results:{
    solar:{title:"ALWAYS ON AIR",code:"ON",freq:"91.4",color:"#D6E85C",desc:"People charge you. Somehow. Scientists remain concerned.",badge:"quiz-social-solar"},
    selective:{title:"PRIVATE FREQUENCY",code:"PVT",freq:"96.2",color:"#5FC9D6",desc:"You like people. Specifically your people. Everybody else may leave a message.",badge:"quiz-social-selective"},
    night:{title:"AFTER-HOURS ONLY",code:"AFT",freq:"102.4",color:"#7A6FC4",desc:"Your social life activates when the rest of the world starts shutting down.",badge:"quiz-social-night"},
    ghost:{title:"DO NOT DISTURB",code:"DND",freq:"88.1",color:"#9498A0",desc:"You disappear to recharge and may forget the rest of civilization exists.",badge:"quiz-social-ghost"}},
    questions:[{q:"A free Saturday appears.",a:[["Call everybody.","solar"],["See one or two favorite people.","selective"],["Make late-night plans.","night"],["Tell nobody I am available.","ghost"]]},{q:"After a crowded party...",a:[["I want food with everybody.","solar"],["I need one calm person.","selective"],["I am just getting started.","night"],["I vanish.","ghost"]]},{q:"Unexpected visitor at your door.",a:[["Come in!","solar"],["Depends who it is.","selective"],["Why are you here before 10 PM?","night"],["Pretend I am not home.","ghost"]]},{q:"Group chat energy?",a:[["Active participant.","solar"],["Selective replies.","selective"],["Most active at 1 AM.","night"],["87 unread messages.","ghost"]]}]},
  {id:"moral",number:"008",title:"MORAL COMPASS MALFUNCTION",question:"How far would your character actually go?",description:"A fictional-character morality quiz for bad decisions, loyalty and convenient ethics.",time:"3 min",categories:["lawful","loyal","gray","wild"],results:{
    lawful:{title:"CLEAR CONSCIENCE",code:"LAW",freq:"90.5",color:"#5FC9D6",desc:"You prefer rules that make sense and consequences you can sleep with.",badge:"quiz-moral-law"},
    loyal:{title:"LOYALTY OVERRIDE",code:"LOY",freq:"95.2",color:"#D98E3B",desc:"Your ethics are stable right up until somebody you love is involved.",badge:"quiz-moral-loyal"},
    gray:{title:"SELECTIVE ETHICS",code:"GRY",freq:"100.1",color:"#9498A0",desc:"Context matters. So does whether anybody can prove it.",badge:"quiz-moral-gray"},
    wild:{title:"OFF-BOOK MORALITY",code:"OBK",freq:"107.5",color:"#E85E7A",desc:"You have principles. They simply do not appear in most legal codes.",badge:"quiz-moral-wild"}},
    questions:[{q:"Your best friend committed a serious mistake.",a:[["Make them face it.","lawful"],["Protect them first.","loyal"],["Depends what happened.","gray"],["Help hide it.","wild"]]},{q:"You can get away with cheating the system.",a:[["Still no.","lawful"],["Only if somebody needs me to.","loyal"],["Probably.","gray"],["Already did.","wild"]]},{q:"A stranger needs help that puts you at risk.",a:[["Help within reason.","lawful"],["I help if I care.","loyal"],["I calculate the risk.","gray"],["Risk makes it interesting.","wild"]]},{q:"What matters most?",a:[["Doing right.","lawful"],["My people.","loyal"],["The outcome.","gray"],["My own code.","wild"]]}]},
  {id:"texting",number:"009",title:"TEXTING STYLE",question:"What kind of texter is your character?",description:"Because entire relationships have been ruined by punctuation and read receipts.",time:"2 min",categories:["fast","dry","essay","ghost"],results:{
    fast:{title:"LIVE TYPING INDICATOR",code:"TYP",freq:"93.9",color:"#D6E85C",desc:"Replies fast, sends updates, and absolutely notices when somebody suddenly takes six hours.",badge:"quiz-text-fast"},
    dry:{title:"K.",code:"DRY",freq:"89.2",color:"#9498A0",desc:"Three words max. Punctuation optional. Somehow still communicates judgment.",badge:"quiz-text-dry"},
    essay:{title:"MULTIPART TRANSMISSION",code:"TXT",freq:"98.8",color:"#5FC9D6",desc:"You have paragraphs, context, screenshots and a numbered argument.",badge:"quiz-text-essay"},
    ghost:{title:"MESSAGE RECEIVED",code:"RCV",freq:"105.2",color:"#7A6FC4",desc:"You saw it. You meant to reply. Three days have now passed.",badge:"quiz-text-ghost"}},
    questions:[{q:"Somebody says 'wyd'.",a:[["Answer immediately.","fast"],["'nm'","dry"],["Give the whole itinerary.","essay"],["See it and forget.","ghost"]]},{q:"Argument by text?",a:[["Real-time battle.","fast"],["One terrifying sentence.","dry"],["Paragraphs.","essay"],["Mute notifications.","ghost"]]},{q:"Read receipts?",a:[["On.","fast"],["Does not matter.","dry"],["Useful for evidence.","essay"],["Absolutely off.","ghost"]]},{q:"Voice notes?",a:[["Yes.","fast"],["No.","dry"],["Only if the story is long.","essay"],["Listen, forget to answer.","ghost"]]}]},
  {id:"rumor",number:"010",title:"RUMOR SURVIVAL TEST",question:"How does your character handle being talked about?",description:"A stress test for gossip, reputation and being perceived against your will.",time:"2 min",categories:["ignore","fight","spin","spiral"],results:{
    ignore:{title:"NO COMMENT",code:"NOC",freq:"90.9",color:"#9498A0",desc:"You deny gossip oxygen. Whether that is maturity or intimidation depends on the rumor.",badge:"quiz-rumor-ignore"},
    fight:{title:"OPEN RESPONSE",code:"RSP",freq:"96.5",color:"#E85E7A",desc:"You would like the speaker to repeat it with their full chest.",badge:"quiz-rumor-fight"},
    spin:{title:"CONTROL THE NARRATIVE",code:"PR",freq:"99.9",color:"#D98E3B",desc:"If people are going to talk, you prefer to give them the correct version.",badge:"quiz-rumor-spin"},
    spiral:{title:"SIGNAL FEEDBACK",code:"FDB",freq:"103.3",color:"#7A6FC4",desc:"You tell yourself you do not care, then investigate every person who liked the post.",badge:"quiz-rumor-spiral"}},
    questions:[{q:"You hear a rumor about yourself.",a:[["Ignore it.","ignore"],["Find the source.","fight"],["Correct it strategically.","spin"],["Ask five people what they heard.","spiral"]]},{q:"The rumor is partly true.",a:[["Still nobody's business.","ignore"],["Then say it to me.","fight"],["Release the cleaner version.","spin"],["This is now a crisis.","spiral"]]},{q:"Someone asks directly.",a:[["'No comment.'","ignore"],["'Who told you?'","fight"],["Give the version I want repeated.","spin"],["Over-explain.","spiral"]]},{q:"Your reputation matters...",a:[["Less than peace.","ignore"],["Enough to defend.","fight"],["A lot.","spin"],["More than I admit.","spiral"]]}]},

  {id:"villainera",number:"011",title:"VILLAIN ERA",question:"What kind of villain are you becoming?",description:"Every character has a villain arc waiting in the wings. Here's yours.",time:"2 min",categories:["mastermind","revenge","tragic","chaotic"],results:{
    mastermind:{title:"THE MASTERMIND",code:"MND",freq:"96.4",color:"#7A6FC4",desc:"You don't lash out, you plan. Three moves ahead, wearing a smile the whole time.",badge:"quiz-villain-mastermind"},
    revenge:{title:"THE RECKONING",code:"RCK",freq:"101.7",color:"#E85E7A",desc:"Somebody wronged you and forgot. You didn't.",badge:"quiz-villain-revenge"},
    tragic:{title:"THE TRAGIC TURN",code:"TRG",freq:"91.9",color:"#9498A0",desc:"You didn't want this. Circumstances built the villain, you just moved in.",badge:"quiz-villain-tragic"},
    chaotic:{title:"AGENT OF CHAOS",code:"CHS",freq:"107.3",color:"#D6E85C",desc:"No grand plan. Just vibes, a grudge, and a total disregard for consequences.",badge:"quiz-villain-chaotic"}},
    questions:[{q:"Someone crosses you publicly.",a:[["I smile and start planning.","mastermind"],["I remember. Forever.","revenge"],["I let it eat at me quietly.","tragic"],["I flip a table, metaphorically or otherwise.","chaotic"]]},{q:"Your ideal method of getting even?",a:[["A slow, elegant unraveling.","mastermind"],["Direct confrontation, immediately.","revenge"],["I don't. It gets me eventually.","tragic"],["Whatever's funniest in the moment.","chaotic"]]},{q:"What pushed you toward the dark side?",a:[["Nothing. I chose this.","mastermind"],["Betrayal by the wrong person.","revenge"],["A loss I never recovered from.","tragic"],["Boredom, mostly.","chaotic"]]},{q:"Your weapon of choice?",a:[["Information.","mastermind"],["Whatever's closest.","revenge"],["My own unresolved grief.","tragic"],["Pure chaos.","chaotic"]]},{q:"How do people find out you're the villain?",a:[["They don't, until it's over.","mastermind"],["I tell them myself.","revenge"],["They watch it happen and can't stop it.","tragic"],["A trail of increasingly unhinged decisions.","chaotic"]]},{q:"Your endgame?",a:[["Total, quiet control.","mastermind"],["Watching them lose what I lost.","revenge"],["I don't have one.","tragic"],["There isn't one. That's the fun part.","chaotic"]]}]},

  {id:"foundfamily",number:"012",title:"FOUND FAMILY ROLE",question:"What role do you play in your found family?",description:"The people who chose you, and the role you never technically applied for.",time:"2 min",categories:["protector","jokester","mediator","glue","wildcard"],results:{
    protector:{title:"THE PROTECTOR",code:"PRO",freq:"93.2",color:"#5FC9D6",desc:"You'd start a fight in a room you weren't even in if it kept them safe.",badge:"quiz-foundfamily-protector"},
    jokester:{title:"THE JOKESTER",code:"JOK",freq:"99.1",color:"#D6E85C",desc:"You handle love through bits, roasts, and never once saying the sincere version out loud.",badge:"quiz-foundfamily-jokester"},
    mediator:{title:"THE MEDIATOR",code:"MDR",freq:"95.6",color:"#7A6FC4",desc:"You keep the peace between people who would otherwise combust.",badge:"quiz-foundfamily-mediator"},
    glue:{title:"THE GLUE",code:"GLU",freq:"90.3",color:"#D98E3B",desc:"Nobody notices how much you hold together until you stop doing it for a week.",badge:"quiz-foundfamily-glue"},
    wildcard:{title:"THE CHAOTIC COUSIN",code:"CHC",freq:"104.8",color:"#E85E7A",desc:"Beloved. Slightly feared. Never quite predictable.",badge:"quiz-foundfamily-wildcard"}},
    questions:[{q:"Someone in the group is struggling.",a:[["I handle the problem directly.","protector"],["I make them laugh until it's bearable.","jokester"],["I check in and ask what they need.","mediator"],["I quietly reorganize everyone's plans around them.","glue"]]},{q:"A fight breaks out between two members.",a:[["I pick a side, loudly.","protector"],["I make a joke that de-escalates or ruins everything.","jokester"],["I get everyone in a room to talk it out.","mediator"],["I make it worse, accidentally.","wildcard"]]},{q:"Your role at every gathering?",a:[["Making sure it actually happens.","glue"],["Comic relief, mandatory.","jokester"],["Watching the door, basically.","protector"],["Unpredictable but essential.","wildcard"]]},{q:"What do they come to you for?",a:[["Backup.","protector"],["Advice nobody else will give straight.","mediator"],["Logistics and emotional infrastructure.","glue"],["A distraction.","jokester"]]},{q:"If the family fell apart, it'd be because...",a:[["I finally stopped holding it together.","glue"],["Nobody would talk to each other anymore.","mediator"],["I couldn't protect everyone at once.","protector"],["Someone finally snapped from all the chaos I caused.","wildcard"]]}]},

  {id:"firstimpression",number:"013",title:"FIRST IMPRESSION VS. REALITY",question:"How wrong is everyone's first impression of you?",description:"The gap between the version people meet and the version they actually get.",time:"2 min",categories:["exact","opposite","surface","slowburn"],results:{
    exact:{title:"TRUE TO SPEC",code:"TTS",freq:"92.0",color:"#5FC9D6",desc:"What you see is genuinely what you get. Refreshing, slightly suspicious.",badge:"quiz-firstimpression-exact"},
    opposite:{title:"COMPLETE MISDIRECTION",code:"MIS",freq:"106.5",color:"#E85E7A",desc:"The first impression and the truth have almost nothing in common. That's not an accident.",badge:"quiz-firstimpression-opposite"},
    surface:{title:"SURFACE READING ONLY",code:"SRF",freq:"89.7",color:"#9498A0",desc:"People get the trailer, never the movie. Most stop looking after the trailer.",badge:"quiz-firstimpression-surface"},
    slowburn:{title:"SLOW REVEAL",code:"SLW",freq:"97.4",color:"#D98E3B",desc:"It takes time, but eventually the real version leaks through whether you meant it to or not.",badge:"quiz-firstimpression-slowburn"}},
    questions:[{q:"Someone meets you for the first time. Their read?",a:[["Pretty much accurate, actually.","exact"],["Wildly, hilariously wrong.","opposite"],["They get maybe 10% of the picture.","surface"],["Not wrong, just incomplete.","slowburn"]]},{q:"How long before someone knows the 'real' you?",a:[["Immediately, I don't perform.","exact"],["They never fully catch up.","opposite"],["Most people never bother.","surface"],["Months. Sometimes longer.","slowburn"]]},{q:"What do people assume about you that's false?",a:[["Nothing much, I don't hide well.","exact"],["Almost everything.","opposite"],["That the surface is all there is.","surface"],["That I'm simpler than I am.","slowburn"]]},{q:"Do you correct people's wrong assumptions?",a:[["There's rarely anything to correct.","exact"],["Sometimes it's funnier not to.","opposite"],["I don't think they'd believe me anyway.","surface"],["Eventually, if they stick around.","slowburn"]]},{q:"Your first impression is best described as...",a:[["An honest preview.","exact"],["A decoy.","opposite"],["A locked door.","surface"],["A slow unlock.","slowburn"]]}]},

  {id:"breakupstyle",number:"014",title:"BREAKUP STYLE",question:"How does your character actually end things?",description:"Not how they want to handle it. How they actually do.",time:"2 min",categories:["ghost","blowup","closure","mourner"],results:{
    ghost:{title:"SIGNAL LOST",code:"LST",freq:"88.2",color:"#9498A0",desc:"One day the frequency just goes quiet. No explanation. No warning.",badge:"quiz-breakup-ghost"},
    blowup:{title:"SCORCHED EARTH",code:"SCE",freq:"105.1",color:"#E85E7A",desc:"If it's ending, everyone in a five mile radius is going to know exactly why.",badge:"quiz-breakup-blowup"},
    closure:{title:"FULL DEBRIEF",code:"DBF",freq:"94.6",color:"#5FC9D6",desc:"You need the conversation. All of it. Preferably with bullet points.",badge:"quiz-breakup-closure"},
    mourner:{title:"STILL BROADCASTING",code:"SBC",freq:"90.9",color:"#7A6FC4",desc:"It ended months ago. You're still tuned to the frequency anyway.",badge:"quiz-breakup-mourner"}},
    questions:[{q:"It's over. What's your first move?",a:[["Disappear, no announcement.","ghost"],["Say everything I've been holding back.","blowup"],["Ask for one honest conversation.","closure"],["Pretend it isn't, for a while.","mourner"]]},{q:"A few weeks later, you're...",a:[["Already gone, mentally and otherwise.","ghost"],["Still slightly furious.","blowup"],["Processing it out loud with everyone.","closure"],["Rereading old messages.","mourner"]]},{q:"What do you need to actually move on?",a:[["Distance. Total distance.","ghost"],["To say my piece.","blowup"],["Answers.","closure"],["Time. A lot of it.","mourner"]]},{q:"How do mutual friends find out?",a:[["They notice the silence eventually.","ghost"],["Everyone knows within the hour.","blowup"],["I tell people directly, calmly.","closure"],["I avoid the topic entirely.","mourner"]]},{q:"Your last message to them was...",a:[["There wasn't one.","ghost"],["Long, and I don't regret it.","blowup"],["A clear, fair explanation.","closure"],["Something I probably shouldn't have sent.","mourner"]]}]},

  {id:"secretkeeping",number:"015",title:"SECRET-KEEPING APTITUDE",question:"How well does your character actually keep a secret?",description:"Everyone says they're good at this. Statistically, they are not.",time:"2 min",categories:["vault","leaky","selective","burden"],results:{
    vault:{title:"THE VAULT",code:"VLT",freq:"91.1",color:"#5FC9D6",desc:"Nothing gets out. Ever. People have stopped even testing you.",badge:"quiz-secret-vault"},
    leaky:{title:"STRUCTURAL LEAK",code:"LEK",freq:"103.7",color:"#D6E85C",desc:"You mean well. It comes out anyway, usually to exactly the wrong person.",badge:"quiz-secret-leaky"},
    selective:{title:"NEED TO KNOW BASIS",code:"NTK",freq:"96.9",color:"#D98E3B",desc:"You keep secrets selectively, strategically, and occasionally as leverage.",badge:"quiz-secret-selective"},
    burden:{title:"OVERLOADED CIRCUIT",code:"OVL",freq:"89.3",color:"#7A6FC4",desc:"You can keep it. It costs you visibly, constantly, and everyone can tell something's wrong.",badge:"quiz-secret-burden"}},
    questions:[{q:"Someone tells you something huge in confidence.",a:[["It's already gone from my active memory.","vault"],["I mean to keep it quiet.","leaky"],["I file it away for later use.","selective"],["I carry it like a physical weight.","burden"]]},{q:"Your friend asks if you know anything about a rumor.",a:[["I say nothing, convincingly.","vault"],["I panic and confirm too much.","leaky"],["I give them exactly what I want them to have.","selective"],["I visibly struggle not to say something.","burden"]]},{q:"How many people actually know your real secrets?",a:[["Zero. Maybe one.","vault"],["More than I meant to tell.","leaky"],["Exactly the people I chose.","selective"],["Nobody, and it's exhausting.","burden"]]},{q:"You're offered information in exchange for a secret.",a:[["Not interested. I don't trade in that.","vault"],["I'd probably slip either way.","leaky"],["Depends what's on the table.","selective"],["I'd rather not know either thing.","burden"]]},{q:"What happens when you're keeping too many secrets at once?",a:[["Nothing. I compartmentalize fine.","vault"],["One of them eventually surfaces.","leaky"],["I decide which ones still matter.","selective"],["I start to unravel a little.","burden"]]}]},

  {id:"downfalltype",number:"016",title:"DOWNFALL TYPE",question:"What will actually be your character's undoing?",description:"Every character has a fatal flaw. This is a diagnosis, not a warning.",time:"2 min",categories:["pride","love","loyalty","ambition"],results:{
    pride:{title:"PRIDE",code:"PRD",freq:"100.4",color:"#D98E3B",desc:"You'd rather lose everything than admit you were wrong in front of somebody.",badge:"quiz-downfall-pride"},
    love:{title:"LOVE",code:"LOV",freq:"92.6",color:"#E85E7A",desc:"You will absolutely make the irrational choice if the right person is standing there.",badge:"quiz-downfall-love"},
    loyalty:{title:"LOYALTY",code:"LOY",freq:"97.8",color:"#5FC9D6",desc:"You will burn down something important to protect somebody who may not deserve it.",badge:"quiz-downfall-loyalty"},
    ambition:{title:"AMBITION",code:"AMB",freq:"105.9",color:"#7A6FC4",desc:"You wanted it badly enough to stop asking what it would cost.",badge:"quiz-downfall-ambition"}},
    questions:[{q:"You're offered an easy way out, but it requires admitting fault.",a:[["I'll find a harder way instead.","pride"],["I take it if it protects someone I love.","love"],["I take it only if it doesn't betray my people.","loyalty"],["I take it if it keeps me on track.","ambition"]]},{q:"Someone you love asks you to stop pursuing something dangerous.",a:[["I resent being asked at all.","pride"],["I stop, immediately.","love"],["I ask what they need from me instead.","loyalty"],["I say I will and don't.","ambition"]]},{q:"What's the one thing you can't walk away from?",a:[["Being proven right.","pride"],["A person.","love"],["My people, no matter what they've done.","loyalty"],["The goal. Whatever it costs.","ambition"]]},{q:"Your allies warn you that you're going too far.",a:[["I don't hear warnings well.","pride"],["I stop the second it threatens someone I love.","love"],["I only stop if it's for them.","loyalty"],["I go further anyway.","ambition"]]},{q:"At the end, what do people say caused your fall?",a:[["He simply could not admit it.","pride"],["She would have done anything for that person.","love"],["They protected the wrong people, too well.","loyalty"],["They wanted it more than they wanted to survive it.","ambition"]]}]},

  {id:"stormtype",number:"017",title:"STORM TYPE",question:"What kind of storm is your character when they finally break?",description:"Everybody has a breaking point. This is what it looks like from the outside.",time:"2 min",categories:["hurricane","quietfront","lightning","aftermath"],results:{
    hurricane:{title:"HURRICANE",code:"HUR",freq:"108.0",color:"#E85E7A",desc:"Slow to form, impossible to ignore once it arrives, and it takes out everything in a wide radius.",badge:"quiz-storm-hurricane"},
    quietfront:{title:"QUIET FRONT",code:"QFT",freq:"89.6",color:"#9498A0",desc:"No warning. No noise. Just a sudden, total drop in temperature.",badge:"quiz-storm-quietfront"},
    lightning:{title:"LIGHTNING STRIKE",code:"LGT",freq:"101.9",color:"#D6E85C",desc:"Fast, bright, over in seconds, and it leaves a mark exactly where it hit.",badge:"quiz-storm-lightning"},
    aftermath:{title:"THE AFTERMATH",code:"AFM",freq:"94.3",color:"#7A6FC4",desc:"The storm itself is almost calm. It's the damage assessment after that really gets you.",badge:"quiz-storm-aftermath"}},
    questions:[{q:"You finally reach your breaking point. It looks like...",a:[["Everything, all at once, for a while.","hurricane"],["Sudden and total silence.","quietfront"],["One sharp, unmistakable moment.","lightning"],["A calm exterior hiding real damage.","aftermath"]]},{q:"How much warning do people get?",a:[["Plenty, if they were paying attention.","hurricane"],["None.","quietfront"],["None. It's instant.","lightning"],["They see the calm before, not the storm.","aftermath"]]},{q:"What's left after you break?",a:[["A lot to clean up.","hurricane"],["A noticeable chill that doesn't fully lift.","quietfront"],["One clean, specific mark.","lightning"],["Damage nobody notices until later.","aftermath"]]},{q:"How do you feel right after?",a:[["Wrung out completely.","hurricane"],["Nothing. Still nothing.","quietfront"],["Strangely lighter.","lightning"],["Fine, until I'm not.","aftermath"]]},{q:"People who've seen it happen describe you as...",a:[["Terrifying, honestly.","hurricane"],["Colder than they expected.","quietfront"],["Sharp. Precise.","lightning"],["Fine, until suddenly not.","aftermath"]]}]},

  {id:"origingenre",number:"018",title:"ORIGIN STORY GENRE",question:"What genre is your character's origin story?",description:"If someone adapted your backstory into a film, what would the poster look like?",time:"2 min",categories:["tragedy","comedy","mystery","epic"],results:{
    tragedy:{title:"TRAGEDY",code:"TRG",freq:"90.1",color:"#7A6FC4",desc:"Beautifully shot, deeply sad, and everyone cries at the ending you saw coming.",badge:"quiz-origin-tragedy"},
    comedy:{title:"DARK COMEDY",code:"DKC",freq:"99.7",color:"#D6E85C",desc:"Objectively kind of horrifying. Somehow still very funny.",badge:"quiz-origin-comedy"},
    mystery:{title:"MYSTERY",code:"MYS",freq:"104.3",color:"#9498A0",desc:"Nobody, including possibly you, has the full picture yet.",badge:"quiz-origin-mystery"},
    epic:{title:"EPIC",code:"EPC",freq:"96.0",color:"#D98E3B",desc:"Sweeping scope, a clear villain, and a soundtrack that swells at exactly the right moment.",badge:"quiz-origin-epic"}},
    questions:[{q:"How did your character's story actually start?",a:[["With a loss.","tragedy"],["With a mistake nobody could take back.","comedy"],["Nobody fully knows, including them.","mystery"],["With something bigger than them.","epic"]]},{q:"What's the tone of the flashback episode?",a:[["Quiet devastation.","tragedy"],["Chaotic, then devastating, then somehow funny again.","comedy"],["Fragmented. Unreliable.","mystery"],["Sweeping and dramatic.","epic"]]},{q:"What genre convention fits your backstory best?",a:[["The inevitable ending.","tragedy"],["The ridiculous misunderstanding.","comedy"],["The missing piece.","mystery"],["The chosen-by-circumstance arc.","epic"]]},{q:"How much of the full story is public?",a:[["Enough that people feel bad for me.","tragedy"],["All of it, and it's mortifying.","comedy"],["Almost none.","mystery"],["The highlight reel version.","epic"]]},{q:"The movie poster tagline would be...",a:[["Some things cannot be undone.","tragedy"],["It got so much worse before it got funny.","comedy"],["Nobody tells the whole story.","mystery"],["Everything led to this.","epic"]]}]},

  {id:"membergroup",number:"019",title:"WHICH FREQUENCY IS YOURS",question:"Which Low Signal membergroup should you actually be in?",description:"Based on how you move, not what you meant to sign up for. Ten frequencies, one true signal.",time:"3 min",categories:["static","wavelength","deadair","onair","echo","signalboost","whitenoise","piratesignal","backchannel","longwave"],results:{
    static:{title:"STATIC",code:"STC",freq:"88.6",color:"#D6E85C",desc:"Bright, a little chaotic, impossible to look away from. You're the one everyone notices first.",badge:"quiz-group-static"},
    wavelength:{title:"WAVELENGTH",code:"WLN",freq:"91.2",color:"#9055A2",desc:"Soft-spoken and specific. People have to actually tune in to catch you, and it's worth it.",badge:"quiz-group-wavelength"},
    deadair:{title:"DEAD AIR",code:"DAR",freq:"89.1",color:"#EDFF86",desc:"Quiet by design. What looks like silence is usually just restraint.",badge:"quiz-group-deadair"},
    onair:{title:"ON AIR",code:"ONA",freq:"97.5",color:"#E8C25C",desc:"Always broadcasting, always visible. If there's a spotlight, you're standing in it, on purpose or not.",badge:"quiz-group-onair"},
    echo:{title:"ECHO",code:"ECH",freq:"103.9",color:"#FB8B24",desc:"You linger. People remember you long after the transmission technically ends.",badge:"quiz-group-echo"},
    signalboost:{title:"SIGNAL BOOST",code:"SGB",freq:"100.0",color:"#FFEA3D",desc:"Loud, generous, impossible to miss. You amplify whatever room you're in.",badge:"quiz-group-signalboost"},
    whitenoise:{title:"WHITE NOISE",code:"WHN",freq:"90.5",color:"#D8CBB0",desc:"Steady, background, essential. Nobody notices you until you stop, and then everyone does.",badge:"quiz-group-whitenoise"},
    piratesignal:{title:"PIRATE SIGNAL",code:"PIR",freq:"107.7",color:"#FF4788",desc:"Unauthorized and thriving. You broadcast on whatever frequency you want, rules be damned.",badge:"quiz-group-piratesignal"},
    backchannel:{title:"BACKCHANNEL",code:"BKC",freq:"94.8",color:"#B39C4D",desc:"Operating just under the surface. Most of the real information moves through you first.",badge:"quiz-group-backchannel"},
    longwave:{title:"LONGWAVE",code:"LNG",freq:"87.3",color:"#D0ADA7",desc:"Slow, deep, far-reaching. You're built for the long stretch, not the quick burst.",badge:"quiz-group-longwave"}},
    questions:[
      {q:"How do people usually first notice you?",a:[["I'm already the center of attention, whether I meant to be or not.","onair"],["I make an entrance, usually a messy one.","static"],["They don't, at first. Then they really do.","whitenoise"],["They don't notice me. They notice what moved because of me.","backchannel"]]},
      {q:"Where do you actually do your best work?",a:[["Behind the scenes, where the real decisions get made.","backchannel"],["On something that takes months, not minutes.","longwave"],["In front of a crowd I can hype up.","signalboost"],["Alone, with the door shut.","deadair"]]},
      {q:"What's your relationship with rules?",a:[["Suggestions, mostly.","piratesignal"],["I follow them loudly enough that everyone notices I'm following them.","onair"],["I keep things running whether or not anyone's watching.","whitenoise"],["I follow my own, specific version of them.","wavelength"]]},
      {q:"How do people describe your presence in a room?",a:[["Loud, bright, a little unpredictable.","static"],["They still think about it after I leave.","echo"],["Steady. Reliable. Always there.","longwave"],["Quiet, unless you know how to read it.","deadair"]]},
      {q:"What happens when you go quiet for a while?",a:[["That is simply my default state.","deadair"],["People start missing the noise.","echo"],["Everyone suddenly notices something's off.","whitenoise"],["The information stops moving and everyone feels it.","backchannel"]]},
      {q:"Pick the compliment that fits best.",a:[["You make everything around you louder, in a good way.","signalboost"],["You're impossible to fake a connection with.","wavelength"],["You do exactly what you want and somehow it works.","piratesignal"],["You're the most consistent person I know.","longwave"]]},
      {q:"How do you handle being the center of attention?",a:[["I was born for this, frankly.","onair"],["I thrive in it and slightly overheat.","static"],["I redirect it to somebody else immediately.","backchannel"],["I would rather not, thank you.","deadair"]]},
      {q:"What's your actual function in the group?",a:[["Hype and momentum.","signalboost"],["Keeping the whole thing stable.","whitenoise"],["Making sure nobody forgets what happened.","echo"],["Doing the thing nobody else is willing to do.","piratesignal"]]}
    ]}

];

function lsnGetQuiz(id){ return LSN_QUIZZES.find(q => q.id === id) || LSN_QUIZZES[0]; }

function lsnQuizBoard(){
  const root = document.querySelector("[data-quiz-board]");
  if(!root) return;
  root.innerHTML = LSN_QUIZZES.map(q => `
    <a class="quiz-list-card" href="quiz.html?id=${q.id}">
      <div class="quiz-list-top"><span>QUIZ ${q.number}</span><span>${q.time.toUpperCase()}</span></div>
      <div class="quiz-list-screen">${q.number}</div>
      <small>RESULT CARD // BADGE ELIGIBLE</small>
      <h2>${q.title}</h2>
      <p>${q.description}</p>
      <span class="quiz-start">BEGIN TRANSMISSION ↗</span>
    </a>
  `).join("");
}

function lsnQuizApp(){
  const root = document.querySelector("[data-quiz-app]");
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const quiz = lsnGetQuiz(params.get("id"));
  document.title = `${quiz.title} // Low Signal Network`;

  let index = 0;
  let scores = Object.fromEntries(quiz.categories.map(c => [c,0]));
  let character = "";

  root.innerHTML = `
    <div class="quiz-intro radio-panel">
      <div class="quiz-intro-meta"><span>QUIZ ${quiz.number}</span><span>${quiz.time}</span></div>
      <span class="eyebrow">PERSONALITY TRANSMISSION</span>
      <h1>${quiz.title}</h1>
      <h3>${quiz.question}</h3>
      <p>${quiz.description}</p>
      <label class="character-name-field">CHARACTER NAME<input data-quiz-name placeholder="who is taking this?"></label>
      <button class="radio-btn primary" data-start-quiz>START SCAN</button>
      <a class="text-link" href="quiz-board.html">← RETURN TO QUIZ BOARD</a>
    </div>
  `;

  root.querySelector("[data-start-quiz]").addEventListener("click", () => {
    character = root.querySelector("[data-quiz-name]").value.trim() || "UNKNOWN CALLER";
    index = 0;
    scores = Object.fromEntries(quiz.categories.map(c => [c,0]));
    renderQuestion();
  });

  function renderQuestion(){
    const item = quiz.questions[index];
    const pct = Math.round((index / quiz.questions.length) * 100);
    root.innerHTML = `
      <div class="quiz-progress"><span>QUIZ ${quiz.number} // ${character.toUpperCase()}</span><strong>${String(index+1).padStart(2,"0")} / ${String(quiz.questions.length).padStart(2,"0")}</strong></div>
      <div class="quiz-progress-track"><i style="width:${pct}%"></i></div>
      <div class="question-panel radio-panel">
        <span class="eyebrow">QUESTION ${String(index+1).padStart(2,"0")}</span>
        <h2>${item.q}</h2>
        <div class="answer-grid">
          ${item.a.map((a,i)=>`<button data-answer="${a[1]}"><span>${String.fromCharCode(65+i)}</span>${a[0]}</button>`).join("")}
        </div>
      </div>
    `;
    root.querySelectorAll("[data-answer]").forEach(btn => {
      btn.addEventListener("click", () => {
        scores[btn.dataset.answer] = (scores[btn.dataset.answer] || 0) + 1;
        index++;
        if(index >= quiz.questions.length) renderResult();
        else renderQuestion();
      });
    });
  }

  function renderResult(){
    const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    const result = quiz.results[top];
    if(window.LSN && result.badge) LSN.unlockBadge(result.badge);

    root.innerHTML = `
      <div class="result-layout">
        <div class="result-copy">
          <span class="eyebrow">TRANSMISSION COMPLETE // ${quiz.number}</span>
          <h1>${result.title}</h1>
          <div class="result-frequency">${result.freq} <small>FM</small></div>
          <p>${result.desc}</p>
          <div class="result-actions">
            <button class="radio-btn primary" data-download-result>DOWNLOAD RESULT CARD</button>
            <button class="radio-btn" data-retake>RETAKE QUIZ</button>
            <a class="radio-btn" href="quiz-board.html">QUIZ BOARD</a>
          </div>
        </div>
        <div class="result-card-preview" style="--result-color:${result.color}">
          <canvas width="1080" height="1350" data-result-canvas></canvas>
        </div>
      </div>
    `;
    const canvas = root.querySelector("[data-result-canvas]");
    drawResultCard(canvas, quiz, result, character);
    root.querySelector("[data-download-result]").addEventListener("click", ()=>{
      downloadCanvas(canvas, `low-signal-${quiz.id}-${result.code.toLowerCase()}.png`);
    });
    root.querySelector("[data-retake]").addEventListener("click", ()=>location.reload());
  }
}

function roundedRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
}

function drawResultCard(canvas, quiz, result, character){
  const ctx = canvas.getContext("2d"), w=canvas.width,h=canvas.height;
  ctx.fillStyle="#0A0A0A"; ctx.fillRect(0,0,w,h);

  const g=ctx.createRadialGradient(820,180,0,820,180,780);
  g.addColorStop(0,result.color+"45"); g.addColorStop(1,"#0A0A0A00");
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);

  ctx.strokeStyle="#242428"; ctx.lineWidth=3;
  roundedRect(ctx,54,54,w-108,h-108,42); ctx.stroke();

  ctx.fillStyle=result.color; ctx.fillRect(54,54,w-108,10);

  ctx.font="700 26px monospace"; ctx.fillStyle="#9498A0";
  ctx.fillText("LWSGNL // QUIZ "+quiz.number,90,135);
  ctx.textAlign="right"; ctx.fillText(result.freq+" FM",w-90,135); ctx.textAlign="left";

  ctx.font="700 160px Arial"; ctx.fillStyle=result.color;
  ctx.fillText(result.code,90,350);

  ctx.font="700 76px Arial"; ctx.fillStyle="#F0F1F2";
  const words=result.title.split(" "); let line="",y=520;
  for(const word of words){
    const test=line?line+" "+word:word;
    if(ctx.measureText(test).width>w-180){ctx.fillText(line,90,y);y+=88;line=word}else line=test;
  }
  ctx.fillText(line,90,y); y+=100;

  ctx.font="28px Arial"; ctx.fillStyle="#A4A7AD";
  const max=840, words2=result.desc.split(" "); line="";
  for(const word of words2){
    const test=line?line+" "+word:word;
    if(ctx.measureText(test).width>max){ctx.fillText(line,90,y);y+=43;line=word}else line=test;
  }
  ctx.fillText(line,90,y);

  ctx.strokeStyle="#242428"; ctx.beginPath(); ctx.moveTo(90,1085); ctx.lineTo(w-90,1085); ctx.stroke();
  ctx.font="700 23px monospace"; ctx.fillStyle="#9498A0"; ctx.fillText("BROADCASTING AS",90,1140);
  ctx.font="700 37px Arial"; ctx.fillStyle="#F0F1F2"; ctx.fillText(character.toUpperCase().slice(0,28),90,1190);

  ctx.font="22px monospace"; ctx.fillStyle=result.color;
  ctx.fillText("LOW SIGNAL NETWORK // RESULT VERIFIED LOCALLY",90,1260);
}

function downloadCanvas(canvas, filename){
  const a=document.createElement("a"); a.download=filename; a.href=canvas.toDataURL("image/png"); a.click();
}

document.addEventListener("DOMContentLoaded",()=>{ lsnQuizBoard(); lsnQuizApp(); });

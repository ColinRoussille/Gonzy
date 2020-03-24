const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var Long = require("long");

client.login([TOKEN]);

/* const getDefaultChannel = (guild) => {
if(user.guild.channels.has(guild.id))
        return user.guild.channels.get(guild.id)
    const generalChannel = user.guild.channels.find(channel => channel.name === "general");
    if(generalChannel)
        return generalChannel;
    return guild.channels
    .filter(c => c.type === "text" &&
        c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
    .sort((a, b) => a.position - b.position ||
        Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
    .first();
}; */


/* client.on("guildMemberAdd", user =>{
    channel.send("Bienvenue " + user + " sur le serveur **" + user.guild.name + "** !")
    let joinEmbed = new Discord.RichEmbed
        .setColor("#58df22")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(":wave: Bienvenue " + user + " sur le serveur " + user.guild.name + " ! Tapez **!intro** dans le fil de discussion pour avoir plus d'infos")
        .setFooter("La TL sur Discord | BotLittéraire")
    channel.send(joinEmbed)

}); */


client.on("guildMemberRemove", user =>{
    channel.send("Hmm... " + user.user.username + " est parti(e) du serveur !")
});

client.on("ready", () => {
    client.user.setStatus("online");
    client.user.setActivity("les élèves | AIDE", {type: "LISTENING"});
});

client.on("message", message =>{
    if(!message.guild) return


    if(message.content === prefix + "help"){
        const HelpEmbed = new Discord.MessageEmbed()
            .setColor("#1be1d2")
            .setAuthor(message.author.username + " a demandé les commandes ! N'oubliez pas le ! avant la commande")
            .setTitle("*__Liste des commandes accessibles__*")
            .addFields(
                {name: "Présentation", value: "introduction \n présentation"},
                {name: "Utilitaire", value: "bot \n code \n help \n liens \n notifications\n vocal"},
                {name: "Cours en ligne", value: "olcourse-allemand \n olcourse-anglais \n olcourse-espagnol \n olcourse-littérature \n olcourse-géo \n olcourse-histoire \n olcourse-maths\n olcourse-philo"},
                {name: "Questions traitées", value: "questionlittérature \n questionphilo"},
                {name: "Parcoursup (comptes à rebours)", value: "parcoursup-conf-cab \n parcoursup-fin-cab \n parcoursup-sadm-cab \n parcoursup-scompl-cab"},
                {name: "Discussion", value: "liste complète dans *!react* et certaines sont cachées"},
            )
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(HelpEmbed);
    return}


    if(message.content === prefix + "hello"){
        message.channel.send("Bonjour " + message.author.username + " !");
    return}


    if(message.content === prefix + "introduction"){
        const joinEmbed = new Discord.MessageEmbed()
            .setColor("#58df22")
            .setAuthor(message.author.username + " demande à ce que le serveur lui soit présenté")
            .setDescription(":wave: Bienvenue " + message.author.username + " sur le serveur ! Tapez **!présentation** dans le fil de discussion pour avoir plus d'infos")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(joinEmbed);
    return}


    if(message.content === prefix + "présentation"){
        const IntroEmbed = new Discord.MessageEmbed()
            .setColor("#2b7ea7")
            .setAuthor(message.author.username + " a besoin d'une petite présentation")
            .setTitle("*__Aide à la prise en main de Discord__*")
            .setDescription("**Discord** est un logiciel de communication qui organise les conversations sous forme de **salons**, accessibles selon des **rôles**. \n Vous êtes ici sur le serveur Discord *privé* de la Terminale L de Saint-Stanislas. \n Vous trouverez dans le menu à gauche tous les salons accessibles par un simple clic. Ces salons peuvent être textuels ou vocaux, donc selectionnez bien selon *votre* besoin de communication. \n Si vous souhaitez parler à une personne en particulier ou à un cours, identifier le avec le signe @ suivi du nom de la personne ou du groupe visé. Le @ suivi de *everyone* permet de notifier tout le monde.\n Pour __toute autre demande__, identifiez les responsables ( @administrteur @modérateur et @gérant ). Vous pouvez aussi accéder à la liste des commandes avec la commande **!help**. \n En plus des salons par matières, vous pouvez discuter sur #questions pour des questions en tous genres, sur #actualités pour parler du CoVid-19 et sur #général pour des discussions sur des sujets ne rentrant pa dans les autres salons.\n **Lisez bien le #reglement avant de continuer sur le serveur**")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(IntroEmbed);
    return}

    if(message.content === prefix + "bot"){
        message.channel.send("Je suis un robot, inutile de tenter de parler avec moi à travers autre chose que des commandes! \n *Pour être introduit au serveur, tapez !introduction*.");
    return}

    if(message.content === prefix + "liens"){
        const LinkEmbed = new Discord.MessageEmbed()
            .setColor("#e19d1b")
            .setAuthor(message.author.username + " demande les liens !")
            .setTitle("*__Liste de tous les liens utiles pour le bon travail__*")
            .addFields(
                {name: "ÉcoleDirecte", value: "https://www.ecoledirecte.com/login"},
                {name: "Parcoursup", value: "https://parcoursup.fr/"},
                {name: "ItsLearning", value: "https://elyco.itslearning.com/"},
                {name: "Saint-Stanislas", value: "https://www.saintstanislas.eu/"},
                {name: "Invitation Discord pérenne", value: "https://discord.gg/jkxXrf5"},
                {name: "Coordonées e-mail des Professeurs", value: "-Mr Cailloux : dcailloux@ststanislas.net \n -Mme Pinon : gpinon@ststanislas.net \n -Mr Ternon : lternon66@gmail.com \n -Mr Ferec : fferec@ststanislas.net \n -Mme Gauthier : missgauthierenglish@gmail.com \n -Mme Kerleo-Colin : fkerleo@ststanislas.net \n -Mme Gabet : gabetartsp@gmail.com \n -Mme Bardon : lauriane.bardon@hotmail.fr \n -Mr Drahonnet : ddrahonnet@ststanislas.net \n -Mme Hamon : sylviehamon4@gmail.com"},
            )
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/268px-The.Matrix.glmatrix.2.png")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(LinkEmbed);
    return}

    if(message.content === prefix + "olcourse-philo"){
        const OlcoursephiloEmbed = new Discord.MessageEmbed()
            .setColor("#ec018f")
            .setAuthor(message.author.username + " demande de l'aide de philosophie en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/philosophie")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcoursephiloEmbed);
    return}

    if(message.content === prefix + "olcourse-maths"){
        const OlcoursemathsEmbed = new Discord.MessageEmbed()
            .setColor("#ec6001")
            .setAuthor(message.author.username + " demande de l'aide de mathématiques en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/mathematiques")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcoursemathsEmbed);
    return}

    if(message.content === prefix + "olcourse-géo"){
        const OlcoursegeoEmbed = new Discord.MessageEmbed()
            .setColor("#a19bk2")
            .setAuthor(message.author.username + " demande de l'aide de géographie en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/geographie")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcoursegeoEmbed);
    return}

    if(message.content === prefix + "olcourse-histoire"){
        const OlcoursehistoireEmbed = new Discord.MessageEmbed()
            .setColor("#gh8462")
            .setAuthor(message.author.username + " demande de l'aide de histoire en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/histoire")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcoursehistoireEmbed);
    return}

    if(message.content === prefix + "olcourse-littérature"){
        const OlcourselitteratureEmbed = new Discord.MessageEmbed()
            .setColor("#16r5yf")
            .setAuthor(message.author.username + " demande de l'aide de littérature en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/francais")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcourselitteratureEmbed);
    return}

    if(message.content === prefix + "olcourse-anglais"){
        const OlcourseanglaisEmbed = new Discord.MessageEmbed()
            .setColor("#t945gh")
            .setAuthor(message.author.username + " demande de l'aide d'anglais en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/anglais")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcourseanglaisEmbed);
    return}

    if(message.content === prefix + "olcourse-espagnol"){
        const OlcourseespagnolEmbed = new Discord.MessageEmbed()
            .setColor("#k6av12")
            .setAuthor(message.author.username + " demande de l'aide d'espagnol en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/espagnol")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcourseespagnolEmbed);
    return}

    if(message.content === prefix + "olcourse-allemand"){
        const OlcourseallemandEmbed = new Discord.MessageEmbed()
            .setColor("#w81h57")
            .setAuthor(message.author.username + " demande de l'aide d'allemand en ligne !")
            .setTitle("**__Le cours demandé__**")
            .setURL("https://www.schoolmouv.fr/terminale-l/allemand")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcourseallemandEmbed);
    return}

    if(message.content === prefix + "notifications"){
        const OlcourseallemandEmbed = new Discord.MessageEmbed()
            .setColor("#16485i")
            .setAuthor(message.author.username + " demande de l'aide pour ses notifications !")
            .setTitle("**__La méthode__**")
            .setDescription("En bas à gauche de votre écran vous pouvez voir votre photo de profil. Ici, vous pouvez cliquer sur le petit rond à coté et paramettrer le statut de votre choix. \n **En ligne** envoie toutes les notifications et **Ne pas déranger** n'en envoie aucune, si vous ne voulez pas être dérangés. \n Vous pouvez accéder à une configuration plus personnalisée en allant dans les paramètres du serveur ou de l'utilisateur.")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(OlcourseallemandEmbed);
    return}
    
    if(message.content === prefix + "vocal"){
        const VocalEmbed = new Discord.MessageEmbed()
            .setColor("039f1t")
            .setAuthor(message.author.username + " demande de l'aide pour le vocal !")
            .setTitle("**__Le Vocal__**")
            .addFields(
                {name: "Echo", value: "Branchez des **écouteurs** pour éviter l'echo"},
                {name: "Push-to-talk", value: "Dans les paramètres utilisateurs, voix et vidéo \n Vous paramétrez un bouton nommé **push-to-talk** qui vous permet d'activer votre micro uniquement quand ce bouton est préssé. \n Pas d'inquiétudes, votre micro est bien éteint quand vous n'appuyez sur rien du tout, malgré le fait que vous ne soyez pas *mute*"},
                {name: "Salons vocaux", value: "Rejoignez un salon vocal en cliquant sur son nom à gauche, quittez le en cliquant sur le symbole raccrocher"},
                {name: "Cours", value: "Pour les cours, veillez à être en *push-to-talk* et à respeccter le temps de parole de chacun, en gardant à l'esprit que le professeur est prioritaire"},
            )
            .setFooter("La TL sur Discord | BotLittéraire | !help")
            .setThumbnail("https://images-eu.ssl-images-amazon.com/images/I/513ldgv3aVL.png")
        message.channel.send(VocalEmbed);
    return}

    if(message.content === prefix + "questionphilo"){
        const QuestionphiloEmbed = new Discord.MessageEmbed()
            .setColor("26498g")
            .setAuthor(message.author.username + " demande la question traitée !")
            .setTitle("**__Question__**")
            .setDescription("Pourquoi s’intéresser au passé ?")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(QuestionphiloEmbed);
    return}

    if(message.content === prefix + "questionlittérature"){
        const QuestionlitteratureEmbed = new Discord.MessageEmbed()
            .setColor("jd61t8")
            .setAuthor(message.author.username + " demande la question traitée !")
            .setTitle("**__Question__**")
            .setDescription("En quoi le personnage de Dona Sol est-il un personnage central dans la pièce? Pensez au sens du nom en espagnol")
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(QuestionlitteratureEmbed);
    return}

    if(message.content === prefix + "react"){
        const ReactEmbed = new Discord.MessageEmbed()
            .setColor("161049")
            .setAuthor(message.author.username + " demande à pouvoir réagir !")
            .setTitle("**__Les Réactions__**")
            .addFields(
                {name: "bot-vie", value: "Les robots aussi voient le temps passer"},
                {name: "react-censure", value: "Pour conserver la belle langue française"},
                {name: "react-choqué", value: "Quand vous êtes horrifiés"},
                {name: "react-choquédéçu", value: "Vous avez été choqué et déçus... (*vous croyez quoi?*)"},
                {name: "react-deep", value: "Quand une reflexion est vraiment profonde"},
                {name: "react-derien", value: "Quand vous êtes remmerciés"},
                {name: "react-gg", value: "Pour un très beau travail"},
                {name: "react-hello", value: "Salut !"},
                {name: "react-intellect", value: "Quand quelqu'un fait preuve de raison"},
                {name: "react-jeux", value: "Vous voulez jouer?"},
                {name: "react-jsp", value: "Quand vous n'en savez trop rien"},
                {name: "react-merci", value: "Pour remercier"},
                {name: "react-mindblown", value: "Pour un raisonnement pariculièrement complexe"},
                {name: "react-nope", value: "C'est *NON*!"},
                {name: "react-nope-smirk", value: "Un oui sarcastique"},
                {name: "react-np", value: "Pas de problème"},
                {name: "react-oof", value: "Aïe, ça a fait mal"},
                {name: "react-pascompris", value: "Euh, possible de réexpliquer?"},
                {name: "react-rire", value: "*Ahahaha*"},
                {name: "react-vrai", value: "Quand vous confirmez"},
                {name: "react-whynot", value: "Pourquoi pas ?"},
                {name: "react-wow", value: "Quand vous êtes impressionnés"},
                {name: "rps", value: "*+ votre choix* pour jouer ! *Le robot ne triche pas, son résultat est généré aléatoirement en même temps que le votre*"},
            )
            .setFooter("La TL sur Discord | BotLittéraire | !help")
        message.channel.send(ReactEmbed);
    return}

    if(message.content === prefix + "react-wow"){
        message.channel.send("Wow, Gonzague et " + message.author.username + " sont vraiment étonnés ! :open_mouth:");
    return}

    if(message.content === prefix + "react-intellect"){
        message.channel.send("Psst... " + message.author.username + " pense que tu es intelligent(e) mais exploite un robot pour le dire, ce qui n'est pas super ethique...");
    return}

    if(message.content === prefix + "react-mindblown"){
        message.channel.send("Oh, " + message.author.username + " a trouvé ton raisonnement juste IN-CROY-ABLE ! :exploding_head:");
    return}

    if(message.content === prefix + "react-pascompris"){
        message.channel.send("Euh... je crois que " + message.author.username + " pense que ça n'était pas clair");
    return}

    if(message.content === prefix + "react-gg"){
        message.channel.send("Bien joué, c'était pas si simple !");
    return}

    if(message.content === prefix + "react-deep"){
        message.channel.send("WOW ! C'était une pensée tellement profonde que " + message.author.username + " a fait une crise existencielle ! A l'aide !");
    return}

    if(message.content === prefix + "react-jsp"){
        message.channel.send("Honnêtement? " + message.author.username + " n'en a absolument **aucune** idée...");
    return}

    if(message.content === prefix + "react-merci"){
        message.channel.send("Oooh ! " + message.author.username + " te remercie chaleureusement ! :pray:");
    return}

    if(message.content === prefix + "react-derien"){
        message.channel.send("Aucun problème pour " + message.author.username + " qui te dis chaleureusement *de rien*! :thumbsup:");
    return}

    if(message.content === prefix + "react-nope"){
        message.channel.send("Oui, bon là, c'est un __gros__ **NON** (selon " + message.author.username + " en tout cas :shrug:)");
    return}

    if(message.content === prefix + "react-censure"){
        message.channel.send("Olalalala ! Comme il/elle est vulgaire aujourd'hui... Ces jeunes qui ne savent plus parler la langue de *Molière*... :no_entry_sign:");
    return}

    if(message.content === prefix + "react-choqué"){
        message.channel.send("Gonzague lui-même est choqué, vu son passé ça devait être *vraiment* traumatisant ce qui est arrivé !");
    return}

    if(message.content === prefix + "react-oof"){
        message.channel.send("Aïe... Coup dur pour Guillaume...");
    return}

    if(message.content === prefix + "react-rire"){
        message.channel.send("Hahaha, super drôle, j'ai failli griller un fusible :joy:");
    return}

    if(message.content === prefix + "react-np"){
        message.channel.send("Aucun problème, pas de pression ! :joy:");
    return}

    if(message.content === prefix + "react-vrai"){
        message.channel.send("C'est vrai ça, Gonzy confirme ! :robot:");
    return}

    if(message.content === prefix + "react-nope-smirk"){
        message.channel.send("Oui, oui, bien sur :smirk:");
    return}

    if(message.content === prefix + "react-whynot"){
        message.channel.send("Ben écoute, pourquoi pas si " + message.author.username + " ne vois aucun problème à ça... Moi j'ai pas trop d'avis personellement");
    return}

    if(message.content === prefix + "react-choquédéçu"){
        message.channel.send("Olala ! " + message.author.username + " n'a pas apprécié une telle déception qui était inattendue en plus ! Quelle disgrâce...");
    return}

    if(message.content === prefix + "react-jeux"){
        message.channel.send("C'est déjà le soir? Je viens juste de me lever moi ! En plus c'est même pas moi qui gère les jeux !");
    return}

    if(message.content === prefix + "code"){
        message.channel.send("J'ai été codé intégralement par Colin Roussille ! Vous pouvez accéder à mon code juste ici : https://github.com/ColinRoussille/Gonzy (code pur dans le fichier index.js)");
    return}

    if(message.content === "Gonzy !"){
        message.channel.send("Quoi ?! Qu'ai-je fait? Non ! Je suis innocent !");
    return}

    if(message.content === "ptdr t ki?"){
        message.channel.send("Aïe ! Ça tire à balles réelles... [Calme toi " + message.author.username + " !]");
    return}

    if(message.content.startsWith("oof") && message.author.username != "BotLittéraire"){
        message.channel.send("Aïe... Coup dur pour Guillaume...");
    return}

    const commande1 = "Salut "
    const commande2 = "salut "
    if((message.content.startsWith(commande1) || message.content.startsWith(commande2)) && message.author.username != "BotLittéraire"){
        var repcom = "Bonjour " + message.content.substring(commande1.length)
        message.channel.send(repcom);
    return}

    const commande3 = "Yo "
    const commande4 = "yo "
    if((message.content.startsWith(commande3) || message.content.startsWith(commande4)) && message.author.username != "BotLittéraire"){
        var repcom = "Yo " + message.content.substring(commande3.length) + " ! Ça va?"
        message.channel.send(repcom);
    return}

    var commande = "react-merci "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Oooh ! " + message.author.username + " remercie chaleureusement " + message.content.substring(commande.length) + " ! :pray:"
        message.channel.send(repcom);
    return}

    var commande = "react-gg "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Bien joué " + message.content.substring(commande.length) + " ! C'était pas si simple !"
        message.channel.send(repcom);
    return}

    var commande = "react-intellect "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Psst... " + message.author.username + " pense que " + message.content.substring(commande.length) + " es intelligent(e) mais exploite un robot pour le dire, ce qui n'est pas super ethique..."
        message.channel.send(repcom);
    return}

    var commande = "react-mindblown "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "On est bien d'accord que le raisonnement de " + message.content.substring(commande.length) + " était tout simplement exeptionnel?"
        message.channel.send(repcom);
    return}

    var commande = "react-np "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Aucun problème, " + message.content.substring(commande.length) + ", pas de pression :joy:"
        message.channel.send(repcom);
    return}

    var commande = "react-nope "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Bon, " + message.content.substring(commande.length) + ", là, c'est **NON**!"
        message.channel.send(repcom);
    return}

    var commande = "anniversaire "
    if(message.content.startsWith(prefix + commande) && (message.content.length - commande.length != 0) && message.author.username != "BotLittéraire"){
        var repcom = "Hey, " + message.content.substring(commande.length) + " ! Gonzy n'a pas oublié de te souhaiter un super anniversaire (malgré le confinement) ! " + message.author.username + " non plus d'ailleurs !"
        message.channel.send(repcom);
    return}
    
    if(message.content === prefix + "parcoursup-conf-cab"){
        function compte_a_rebours(){
            var date_actuelle = new Date();
            var date_evenement = new Date("Apr 2 23:59:59 2020");
            var total_secondes = (date_evenement - date_actuelle) / 1000;
            var prefixdate = "Les lettres de motivations et confirmations des voeux finissent dans ";
            if (total_secondes < 0){
                total_secondes = Math.abs(total_secondes);
                message.channel.send("Compte à rebours terminé il y a " + total_secondes);
            return}
            var jours = Math.floor(total_secondes / (60 * 60 * 24));
            var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
            var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
            var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        message.channel.send(prefixdate + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.');
        // var actualisation = setTimeout(compte_a_rebours(date_evenement), 1000);
        }
    compte_a_rebours();
    return}

    if(message.content === prefix + "parcoursup-sadm-cab"){
        function compte_a_rebours(){
            var date_actuelle = new Date();
            var date_evenement = new Date("May 19 23:59:59 2020");
            var total_secondes = (date_evenement - date_actuelle) / 1000;
            var prefixdate = "La phase d'admission commence dans ";
            if (total_secondes < 0){
                total_secondes = Math.abs(total_secondes);
                message.channel.send("Compte à rebours terminé il y a " + total_secondes);
            return}
            var jours = Math.floor(total_secondes / (60 * 60 * 24));
            var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
            var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
            var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        message.channel.send(prefixdate + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.');
        // var actualisation = setTimeout(compte_a_rebours(date_evenement), 1000);
        }
    compte_a_rebours();
    return}

    if(message.content === prefix + "parcoursup-scompl-cab"){
        function compte_a_rebours(){
            var date_actuelle = new Date();
            var date_evenement = new Date("Jun 25 23:59:59 2020");
            var total_secondes = (date_evenement - date_actuelle) / 1000;
            var prefixdate = "La phase complémentaire commence dans ";
            if (total_secondes < 0){
                total_secondes = Math.abs(total_secondes);
                message.channel.send("Compte à rebours terminé il y a " + total_secondes);
            return}
            var jours = Math.floor(total_secondes / (60 * 60 * 24));
            var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
            var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
            var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        message.channel.send(prefixdate + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.');
        // var actualisation = setTimeout(compte_a_rebours(date_evenement), 1000);
        }
    compte_a_rebours();
    return}

    if(message.content === prefix + "parcoursup-fin-cab"){
        function compte_a_rebours(){
            var date_actuelle = new Date();
            var date_evenement = new Date("Jul 17 23:59:59 2020");
            var total_secondes = (date_evenement - date_actuelle) / 1000;
            var prefixdate = "Parcoursup fermera dans ";
            if (total_secondes < 0){
                total_secondes = Math.abs(total_secondes);
                message.channel.send("Compte à rebours terminé il y a " + total_secondes);
            return}
            var jours = Math.floor(total_secondes / (60 * 60 * 24));
            var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
            var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
            var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        message.channel.send(prefixdate + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes.');
        // var actualisation = setTimeout(compte_a_rebours(date_evenement), 1000);
        }
    compte_a_rebours();
    return}

    if(message.content === prefix + "bot-vie"){
        function compte_a_rebours(){
            var date_actuelle = new Date();
            var date_evenement = new Date("Mar 13 22:30:00 2020");
            var total_secondes = -(date_evenement - date_actuelle) / 1000;
            var prefixdate = "Vous voulez savoir mon âge ? Il est d'environ ";
            if (total_secondes < 0){
                total_secondes = Math.abs(total_secondes);
                message.channel.send(prefixdate + total_secondes);
            return}
            var jours = Math.floor(total_secondes / (60 * 60 * 24));
            var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
            var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
            var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        message.channel.send(prefixdate + jours + ' jours ' + heures + ' heures ' + minutes + ' minutes et ' + secondes + ' secondes. Je suis vieux, ma mémoire flanche un peu');
        // var actualisation = setTimeout(compte_a_rebours(date_evenement), 1000);
        }
    compte_a_rebours();
    return}

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var commande = args.shift().toLowerCase();
    if (commande === 'rps') {
        let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Jouez avec une de ces réponses : \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Seulement ces réponses sont accéptées : \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            message.channel.send(replies[result]);
            return message.channel.send('Nous avons choisi la même chose !');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            message.channel.send(replies[result]);
            if (replies[result] === 'paper') return message.channel.send('J\'ai gagné !');
            else return message.channel.send('Tu as gagné !');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            message.channel.send(replies[result]);
            if (replies[result] === 'rock') return message.channel.send('J\'ai gagné !');
            else return message.channel.send('Tu as gagné !');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            message.channel.send(replies[result]);
            if (replies[result] === 'scissors') return message.channel.send('J\'ai gagné !');
            else return message.channel.send('Tu as gagné !');
        }
    return}

});
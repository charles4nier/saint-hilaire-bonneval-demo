# Chantier Payload — rendre le site contributable

Objectif : passer d'un contenu hydraté/en dur (le template actuel) à un site où le client (mairie) peut créer et gérer ses propres pages, via Payload CMS. Le dev (toi) fournit des **gabarits**, le client les remplit.

Vision produit : vendre au client une **architecture**, pas juste un site — une réflexion sur ce qu'est un site de mairie standardisé, pensée pour bien fonctionner à l'usage. Le classement du menu (L'essentiel / Votre mairie / Ma commune / Tourisme & découverte) est central à cette architecture et doit être conservé tel quel.

## Décisions actées

### 1. Gabarit et menu sont deux champs indépendants, pas une hiérarchie

Une page a deux décisions parallèles, pas imbriquées :

- **`gabarit`** — liste fermée définie par le dev (Annuaire, Éditorial, Documents filtrables, Page spéciale...). Détermine le composant qui rend la page et les champs que Payload expose à l'éditeur.
- **`menu`** — où la page vit dans la navigation.

Pourquoi séparé : le même gabarit sert déjà à plusieurs endroits différents du menu dans le code actuel (`AnnuaireLayout` → Commerces, Vie associative, Enfance & jeunesse, Sports & loisirs). Rien ne garantit qu'une future commune voudra la même correspondance gabarit ↔ section. Coupler les deux réintroduirait une contrainte qui n'existe pas structurellement.

### 2. Toute page doit être dans le menu

Pas de page orpheline (liée seulement depuis une card ou le footer) : `menu` est un champ **obligatoire**, pas optionnel.

### 3. Une page = une seule entrée de menu

Pas de page listée à deux endroits. Principe : la clarté prime sur la flexibilité ici. Un seul choix de section, pas une relation multiple.

### 4. N'importe quel gabarit dans n'importe quelle section

Aucune restriction gabarit ↔ section. C'est explicitement vu comme la force du système (flexibilité totale pour les communes futures), pas un risque.

### 5. Ordre dans un sous-menu : drag-and-drop, pas de champ `order` numérique

Réordonnancement par glisser-déposer dans l'admin Payload (pattern nativement supporté). Évite les conflits/incohérences de numéros d'ordre entre pages.

### 6. Le gabarit "Liste" est unique — la variation se fait par `carte`, pas par un nouveau gabarit

En étudiant les 18 pages existantes, plusieurs (Commerces, Vie associative, Enfance & jeunesse, Sports & loisirs, Mes démarches, Actualités, Documents & publications, Budget & projets, Agenda) partagent exactement le même squelette : Hero + 1 ou 2 filtres + collection d'items + CTA optionnel. Seul ce qui varie change réellement :

- les **champs** de chaque item (ex. adresse/tél pour un commerce, date/heure/lieu pour un événement, fichier à uploader pour un document)
- le **rendu** de l'item (fiche statique, accordéon expansible, pavé date...)
- le **comportement de la collection** qui va avec (tri "plus récent d'abord" vs tri chronologique, groupement, états calculés comme "passé/à venir")

Plutôt que multiplier les gabarits pour capturer ces différences, tout ça est porté par un champ **`carte`** — obligatoire, affiché dès qu'on choisit le gabarit "Liste" (pas une option secondaire découverte plus tard dans le formulaire). Une carte n'est donc pas qu'un template visuel d'item : elle embarque champs + rendu + stratégie de traitement de la collection entière.

**Cartes identifiées pour le gabarit Liste** : Annuaire, Démarches (accordéon), Actualités, Document, Budget/Projet, Agenda.

**Nombre de filtres** (1 ou 2) et **présence d'un CTA de fin** restent des réglages de configuration du gabarit Liste, indépendants du choix de carte.

### 7. Un gabarit démarre minimal et évolue avec le besoin réel

Ex. "Catalogue de lieux/prestations" démarre avec un seul bloc de contenu, "salles" (collection extensible — ajouter une salle = ajouter une entrée, pas toucher au code). D'autres blocs (ex. un encart "intro") pourront s'ajouter plus tard si le besoin se confirme, sans repartir de zéro. Principe général : ne pas sur-designer un gabarit pour des besoins hypothétiques, l'étoffer quand un cas réel se présente.

### 8. Aucune page hors gabarit — tout est contribuable, y compris Horaires et Carte interactive

Le client doit pouvoir contribuer partout, pas seulement là où c'est structurellement simple. Horaires et Carte interactive ont donc chacune un vrai gabarit, avec des champs structurés plutôt qu'un texte libre :

- **Horaires** : tableau de 7 lignes (jour, matin, après-midi) + liste de fermetures exceptionnelles + bloc de contacts pratiques
- **Carte interactive** : le rendu Leaflet reste du code, mais les POI et les sentiers deviennent une collection éditable (nom, catégorie, description, image, coordonnées) au lieu d'un fichier `data.ts` en dur

### 9. Gabarits multi-instances vs. gabarits singleton

Deux familles, toutes les deux contribuables :

- **Multi-instances** — Liste, Éditorial, Trombinoscope, Catalogue de lieux, Contact, Numéros utiles : le client peut en créer plusieurs pages (même s'il n'en existe qu'une aujourd'hui pour certains, ex. Trombinoscope pourrait aussi servir pour "Le personnel administratif")
- **Singleton contribuable** — Accueil, Horaires, Carte interactive : une seule instance possible par site, mais le contenu reste éditable par le client, pas codé en dur

### 10. L'éditeur mairie ne décide jamais rien de structurel ou visuel — seulement le contenu

Règle générale qui chapeaute plusieurs décisions précédentes, formulée explicitement pour ne laisser aucune ambiguïté :

- **Le type de carte est verrouillé par page**, fixé une fois à la création de la page (setup), jamais changeable en ajoutant un item. Une page "Commerces" utilise la carte "Annuaire" pour toujours.
- **Les catégories sont verrouillées par page, par défaut** — reprennent exactement ce qui existe déjà dans le code pour les pages connues aujourd'hui (Commerces, Vie associative, Enfance & jeunesse, Sports & loisirs, Actualités...). L'éditeur choisit parmi la liste fournie, n'en invente pas.
- **Icône + couleur suivent automatiquement la catégorie choisie** — jamais un choix direct de l'éditeur, sur aucun item, aucune page.
- **Seule exception : la liste de type "universelle"** (nouveau besoin non anticipé, créée plus tard) — sort de ce cadre verrouillé, pioche dans l'ensemble des catégories déjà définies sur le site. C'est l'échappatoire explicite, pas la norme.

Ce qui reste possible au quotidien pour l'éditeur mairie : ajouter/modifier/supprimer des items de contenu (un commerce, une démarche, un événement...) dans les listes existantes. Rien de structurel.

Ce qui est fixé **au setup du projet** (toi, avec l'utilisateur, à chaque nouvelle commune) : le choix de carte par page, la liste de catégories par page, et l'association catégorie ↔ icône ↔ couleur — les couleurs étant redéfinies selon la charte graphique du client à chaque onboarding.

**Action à faire** : lister exhaustivement toutes les catégories déjà utilisées sur le site (tous les types de carte confondus — Annuaire des 4 pages, Actualités, Documents, Budget/Projets, Démarches, Agenda...), comme base de départ pour le setup de chaque nouvelle page.

### 11. Aperçu visuel par défaut pour chaque `carte` et chaque `gabarit`

Quand l'éditeur déroule le menu de choix (carte ou gabarit), chaque option doit s'afficher avec une **image d'aperçu**, pas juste un nom en texte — pour que le choix soit immédiatement compréhensible sans avoir à connaître le rendu final par cœur. S'applique aux deux niveaux : le choix du `gabarit` d'une page, et le choix de la `carte` dans le gabarit Liste.

Implique côté Payload un composant de champ personnalisé (les select natifs n'affichent pas d'image par option) — pas un simple champ standard.

**Action à faire** : produire une capture/illustration par carte et par gabarit existants, à stocker comme assets fixes (pas modifiables par le client, ce sont les aperçus des gabarits eux-mêmes).

### 12. Ordre des items à l'intérieur d'une page Liste : chronologique par défaut, drag-and-drop en override

Même logique que la décision 5 (ordre des sous-menus), appliquée cette fois aux items d'une liste (une actualité, une démarche, un événement...) :

- **Par défaut**, les items s'affichent dans l'ordre chronologique (le sens exact — plus récent d'abord ou date à venir croissante — dépend de la carte, déjà couvert par la décision 6).
- **L'éditeur peut réordonnancer manuellement par drag-and-drop** dans l'admin Payload si besoin, sans passer par un champ `order` numérique explicite.

### 13. Création et suppression de page réservées au dev, jamais au client

Extension directe de la décision 10 : supprimer (ou créer) une page est un acte structurel, pas un acte de contenu — ça peut casser un lien référencé ailleurs (ex. un bloc Accueil) ou désorganiser le menu. Le client garde la main sur le contenu et les items à l'intérieur des pages existantes, jamais sur l'existence des pages elles-mêmes.

Côté Payload : rôle "éditeur mairie" limité à l'édition de contenu/items ; création/suppression de pages réservée au rôle admin (le dev).

### 14. Liens inter-pages via `relationship` Payload, jamais une URL en texte

Tout bloc qui pointe vers une autre page du site (ex. les tuiles "Accès rapides" ou les cards "Découvrir" de l'Accueil) référence la page par un champ `relationship` (ID du document), pas par une URL recopiée en dur. Le lien réel (slug actuel) est résolu au rendu.

Pourquoi : garantit que le lien reste correct même si une page est renommée (son slug change). Le risque de lien mort par suppression est déjà écarté par la décision 13 (seul le dev supprime), mais la relation reste la bonne pratique pour éviter un état dupliqué (URL recopiée qui pourrait diverger du vrai chemin).

Cas particulier identifié : les cards "Découvrir" de l'Accueil pointent vers la Carte interactive filtrée par catégorie (`?category=...`) — champ hybride nécessaire : une relation vers la page Carte interactive + un champ catégorie associé, pas une simple relation seule.

### 15. Les 4 sections de menu sont fixes, non modifiables côté client

Aucune section ne peut être renommée, supprimée, ni une 5e ajoutée par l'éditeur mairie. C'est explicitement le format de données éprouvé qui constitue le produit vendu (voir intro), pas un choix de configuration laissé à chaque commune.

### 16. Bloc "Actus" de l'Accueil : les 3 dernières par défaut, épinglage manuel possible

Par défaut, le bloc affiche les 3 actualités les plus récentes (calcul automatique). L'éditeur peut épingler une actu précise sur un emplacement à la place du calcul automatique — champ croisé optionnel (relation, voir décision 14) en plus du comportement par défaut.

### 17. Le "prochain événement" est intégré à la carte "L'essentiel en un clic" (QuickAccess), pas un bloc séparé

Plusieurs itérations avant de converger (remplacer la 3e actu → encart sous Actus → bloc autonome façon footer entre Actus et Contact) : la version retenue et implémentée sur le site en dur, c'est une **bande pleine largeur intégrée en bas de la carte QuickAccess** ("L'essentiel en un clic"), pas un bloc séparé plus loin sur la page.

- Le bloc Actus reste un vrai bloc Actus, intact, 3 actus (décision 16) — aucune logique d'agenda dedans.
- La tuile "Agenda du village" de QuickAccess faisait doublon avec cette bande — **retirée**, QuickAccess passe de 4 à 3 tuiles.
- La bande agenda occupe toute la largeur du bas de la carte QuickAccess (bleed jusqu'aux bords de la carte, sous les 3 tuiles), fond sombre façon footer (`$foreground`) pour se détacher visuellement du reste de la carte (claire) — signale immédiatement "ceci est un événement", pas une actu.
- Contenu : date unique mise en avant (jour + mois, gros format), titre de l'événement, lien vers `/agenda`. Calculé dynamiquement à chaque rendu (l'événement à venir le plus proche), jamais stocké — à jour chaque jour sans intervention.
- Pas redondant avec le lien "Agenda" du menu "L'essentiel" (le lien menu sert une recherche active, la bande home pousse l'info à un visiteur qui n'irait pas la chercher spontanément).
- **Agenda vide** : si aucun événement à venir n'est programmé, la bande ne s'affiche simplement pas (pas de fallback à gérer).

### 18. Ordre des blocs Accueil (état final)

Après plusieurs réagencements successifs, l'ordre retenu : **Hero → QuickAccess (avec bande agenda intégrée) → Actualités → Mot du maire → Découvrir (Tourisme & Patrimoine) → Contact**.

Raisonnement : les deux contenus "vivants" (accès rapides + prochain rendez-vous, puis actualités) se suivent en premier — c'est ce que le visiteur récurrent vient chercher. Le mot du maire (contenu statique, quasi jamais mis à jour) vient après, comme transition éditoriale vers le contenu découverte/tourisme, plutôt qu'en détour avant les actualités. Contact toujours en clôture.

Au passage, les fonds de section Actualités et Découvrir ont été inversés : c'est désormais **Découvrir** qui porte le fond teinté (`$secondary-40`), Actualités reste sur le fond neutre de la page.

## Catalogue des gabarits (état actuel)

| Gabarit | Type | Pages actuelles | Notes |
|---|---|---|---|
| **Liste** | Multi-instances | Commerces, Vie associative, Enfance & jeunesse, Sports & loisirs, Mes démarches, Actualités, Documents & publications, Budget & projets, Agenda | Hero + filtre(s) + collection + CTA optionnel ; varie par `carte` (voir ci-dessus) |
| **Éditorial** | Multi-instances | Histoire, La commune | Hero + suite de sections texte/image |
| **Trombinoscope** | Multi-instances | Le maire & les élus | Bloc intro + membres groupés par délégation + infos réunion |
| **Catalogue de lieux/prestations** | Multi-instances | Location de salles | N fiches détaillées (description, capacité, tarifs groupés par public) + CTA |
| **Contact** | Multi-instances | Contact | Fiches coordonnées + formulaire |
| **Numéros utiles** | Multi-instances | Numéros utiles | Bloc urgences + bloc contacts locaux |
| **Accueil** | Singleton | `/` | Composé de blocs fixes (Hero, Accès rapides, Découvrir, Mot du maire, Actus, CTA) |
| **Horaires** | Singleton | Horaires & informations | Tableau jours × créneaux + fermetures exceptionnelles + contacts pratiques |
| **Carte interactive** | Singleton | Carte interactive | Rendu Leaflet en code, POI/sentiers en collection éditable |

## Questions encore ouvertes

- Schéma exact des champs par carte (Annuaire, Démarches, Actualités, Document, Budget/Projet, Agenda)
- Schéma exact des champs des gabarits singleton (Accueil, Horaires, Carte interactive) — notamment la collection POI/sentiers de la carte
- Structure exacte des collections Payload (une collection `pages` avec `gabarit` + `carte` discriminants et groupes de champs conditionnels, vs. des collections séparées ?)
- Ce que le client peut éditer vs. ce qui reste verrouillé dev (ex. la liste des 4 sections de menu, la liste des gabarits et des cartes elles-mêmes restent des enums fermés côté dev)

## Idées non actées

- **Slideshow à la place du bloc "Mot du maire"** : plusieurs slides (image + texte + valeur/chiffre en encart), pouvant porter le mot du maire mais aussi d'autres contenus mis en avant (événement, projet...). Navigation manuelle uniquement (pas d'auto-rotation, pour rester conforme RGAA 13.3). Réserve posée : si un slide sert à mettre en avant un événement, ça recouperait la bande agenda déjà intégrée à QuickAccess (décision 17) — à trancher si l'idée est reprise. Pas décidé, proposé comme option possible pour le client.

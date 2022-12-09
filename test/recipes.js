const currentlyDisplayedRecipes = [
    {
      name: "Limonade de Coco",
      ingrédients: [
        { ingrédient: "Lait de coco", quantity: 400, unit: "ml" },
        { ingrédient: "Jus de citron", quantity: 2 },
        { ingrédient: "Crème de coco", quantity: 2, unit: " cuillères à soupe" },
        { ingrédient: "Sucre", quantity: 30, unit: " grammes" },
        { ingrédient: "Glaçons" },
      ],
      description:
        "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    },
    {
      name: "Poisson Cru à la tahitienne",
      ingrédients: [
        { ingrédient: "Thon Rouge (ou blanc)", quantity: 200, unit: "grammes" },
        { ingrédient: "Concombre", quantity: 1 },
        { ingrédient: "Tomate", quantity: 2 },
        { ingrédient: "Carotte", quantity: 1 },
        { ingrédient: "Citron Vert", quantity: 5 },
        { ingrédient: "Lait de Coco", quantity: 100, unit: "ml" },
      ],
      description:
        "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouvez ajouter 1 à 2 cuillères à soupe de Crème de coco",
    },
    {
      name: "Poulet coco réunionnais",
      ingrédients: [
        { ingrédient: "Poulet", quantity: 1 },
        { ingrédient: "Lait de coco", quantity: 400, unit: "ml" },
        { ingrédient: "Coulis de tomate", quantity: 25, unit: "cl" },
        { ingrédient: "Oignon", quantity: 1 },
        { ingrédient: "Poivron rouge", quantity: 1 },
        { ingrédient: "Huile d'olive", quantity: 1, unit: "cuillères à soupe" },
      ],
      description:
        "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    },
    {
      name: "Salade de riz",
      ingrédients: [
        { ingrédient: "Riz blanc", quantity: 500, unit: "grammes" },
        { ingrédient: "Thon en miettes", quantity: 200, unit: "grammes" },
        { ingrédient: "Tomate", quantity: 2 },
        { ingrédient: "Oeuf dur", quantity: 2 },
        { ingrédient: "Maïs", quantity: 300, unit: "grammes" },
        { ingrédient: "Vinaigrette", quantity: 5, unit: "cl" },
      ],
      description:
        "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
    },
    {
      name: "Tarte au thon",
      ingrédients: [
        { ingrédient: "Pâte feuilletée", quantity: 1 },
        { ingrédient: "Thon en miettes", quantity: 130, unit: "grammes" },
        { ingrédient: "Tomate", quantity: 2 },
        { ingrédient: "Crème fraîche", quantity: 2, unit: "cuillères à soupe" },
        { ingrédient: "gruyère râpé", quantity: 100, unit: "grammes" },
        {
          ingrédient: "Moutarde de Dijon",
          quantity: 1,
          unite: "cuillères à soupe",
        },
      ],
      description:
        "Étaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
    },
    {
      name: "Tarte aux pommes",
      ingrédients: [
        { ingrédient: "Pâte brisée", quantity: 1 },
        { ingrédient: "Pomme", quantity: 3 },
        { ingrédient: "Oeuf", quantity: "2" },
        { ingrédient: "Crème fraîche", quantity: 25, unit: "cl" },
        { ingrédient: "Sucre en Poudre", quantity: 100, unit: "grammes" },
        { ingrédient: "Sucre vanillé", quantity: 1, unit: "sachets" },
      ],
      description:
        "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finalement verser la préparation à base d'oeufs et de crème fraîche. Laisser cuire au four pendant 30 minutes",
    },
    {
      name: "Tartelettes au chocolat et aux fraises",
      ingrédients: [
        { ingrédient: "Pâte sablée", quantity: 1 },
        { ingrédient: "Chocolat au lait", quantity: 300, unit: "grammes" },
        { ingrédient: "Crème liquide", quantity: 80, unit: "cl" },
        { ingrédient: "Beurre", quantity: "30", unit: "grammes" },
        { ingrédient: "Fraise", quantity: 6 },
      ],
      description:
        "Étaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
    },
    {
      name: "Brownie",
      ingrédients: [
        { ingrédient: "Noix", quantity: "180", unit: "grammes" },
        { ingrédient: "Chocolat noir", quantity: 150, unit: "grammes" },
        { ingrédient: "Beurre", quantity: 120, unit: "grammes" },
        { ingrédient: "Oeuf", quantity: 2 },
        { ingrédient: "Sucre en Poudre", quantity: "110", unit: "grammes" },
        { ingrédient: "farine", quantity: 90, unit: "grammes" },
      ],
      description:
        "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
    },
    {
      name: "Salade Méditerannéene fraîche au chèvre",
      ingrédients: [
        { ingrédient: "Concombre", quantity: 1 },
        { ingrédient: "Olives" },
        { ingrédient: "Fromage de chèvre", quantity: 150, unit: "grammes" },
        { ingrédient: "Vinaigre Balsamic" },
        { ingrédient: "Huile d'olive" },
        { ingrédient: "Basilic" },
      ],
      description:
        "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
    },
    {
      name: "Tartiflette",
      ingrédients: [
        { ingrédient: "Reblochon", quantity: "1" },
        { ingrédient: "Pommes de terre", quantity: 4.5, unit: "kg" },
        { ingrédient: "Jambon fumé", quantity: 2, unit: "tranches" },
        { ingrédient: "Oignon", quantity: 300, unit: "grammes" },
        { ingrédient: "Vin blanc sec", quantity: 30, unit: "cl" },
      ],
      description:
        "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
    },
    {
      name: "Salade tomate, mozzarella et pommes",
      ingrédients: [
        { ingrédient: "Tomates cerises", quantity: 250, unit: "grammes" },
        { ingrédient: "Mozzarella", quantity: 150, unit: "grammes" },
        { ingrédient: "Jambon de parme", quantity: 4, unit: "tranches" },
        { ingrédient: "Pommes", quantity: 1 },
        { ingrédient: "Salade Verte", quantity: 1 },
        { ingrédient: "Vinaigrette", quantity: 5, unit: "cl" },
      ],
      description:
        "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
    },
    {
      name: "Compote pomme rhubarbe",
      ingrédients: [
        { ingrédient: "Rhubarbe", quantity: 160, unit: "grammes" },
        { ingrédient: "Pommes", quantity: 8 },
        { ingrédient: "Sucre vanillé", quantity: 6, unit: "sachets" },
        { ingrédient: "Eau", quantity: "0.5", unit: "tasses" },
      ],
      description:
        "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    },
    {
      name: "Salade mâchée de patates",
      ingrédients: [
        { ingrédient: "Mâche", quantity: 60, unit: "grammes" },
        { ingrédient: "Pommes de terre", quantity: 200, unit: "grammes" },
        { ingrédient: "Échalote", quantity: 2 },
        {
          ingrédient: "Vinaigre de cidre",
          quantity: 1,
          unit: "cuillère à soupe",
        },
        { ingrédient: "huile d'olive", quantity: 2, unit: "cuillère à soupe" },
      ],
      description:
        "Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
    },
    {
      name: "Galette Bretonne Saucisse et Fromage à raclette",
      ingrédients: [
        { ingrédient: "Saucisse bretonne ou de Toulouse", quantity: 2 },
        { ingrédient: "Farine de blé noir", quantity: 130, unit: "grammes" },
        { ingrédient: "Oeuf", quantity: 1 },
        { ingrédient: "Fromage à raclette", quantity: 300, unit: "grammes" },
        { ingrédient: "Oignon", quantity: 1 },
        { ingrédient: "Beurre", quantity: 75, unit: "grammes" },
      ],
      description:
        "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
    },
    {
      name: "Crêpes Chocolat Banane",
      ingrédients: [
        { ingrédient: "Oeuf", quantity: 3 },
        { ingrédient: "Farine", quantity: 250, unit: "grammes" },
        { ingrédient: "Lait", quantity: 600, unit: "ml" },
        { ingrédient: "Beurre salé", quantity: 30, unit: "grammes" },
        { ingrédient: "Chocolat au lait", quantity: 100, unit: "grammes" },
        { ingrédient: "Banane", quantity: 4 },
      ],
      description:
        "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
    },
    {
      name: "Gratin de pâtes à la tomate",
      ingrédients: [
        { ingrédient: "Tomate", quantity: 500, unit: "grammes" },
        { ingrédient: "Mozzarella", quantity: 250, unit: "grammes" },
        { ingrédient: "Pennes", quantity: 500, unit: "grammes" },
        { ingrédient: "Basilic", quantity: 1, unit: "tiges" },
        { ingrédient: "huile d'olives", quantity: 2, unit: "cuillère à soupe" },
      ],
      description:
        "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    },
    {
      name: "Smoothie à la fraise",
      ingrédients: [
        { ingrédient: "Fraise", quantity: 500, unit: "grammes" },
        { ingrédient: "Pastèque", quantity: 0.5 },
        { ingrédient: "Jus de citron", quantity: 1, unit: "cuillères à soupe" },
        { ingrédient: "Glaçons", quantity: 8 },
        { ingrédient: "Menthe" },
      ],
      description:
        "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillère à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques feuilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster.",
    },
    {
      name: "Smoothie ananas et vanille",
      ingrédients: [
        {
          ingrédient: "Ananas",
          quantity: 1,
        },
        { ingrédient: "Glace à la vanille", quantity: 500, unit: "ml" },
        { ingrédient: "Lait", quantity: 50, unit: "cl" },
      ],
      description:
        "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
    },
    {
      name: "Shake Banane Kiwi",
      ingrédients: [
        { ingrédient: "Kiwi", quantity: 4 },
        { ingrédient: "Citron", quantity: 1 },
        { ingrédient: "Lait", quantity: 1, unit: "litres" },
        { ingrédient: "Sucre glace", quantity: 30, unit: "grammes" },
        { ingrédient: "Banane", quantity: 1 },
      ],
      description:
        "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
    },
    {
      name: "Pates Carbonara",
      ingrédients: [
        { ingrédient: "Tagliatelles", quantity: 500, unit: "grammes" },
        { ingrédient: "Lardons", quantity: 150, unit: "grammes" },
        { ingrédient: "Crème fraîche", quantity: 200, unit: "grammes" },
        { ingrédient: "Parmesan", quantity: 100, unit: "grammes" },
        { ingrédient: "huile d'olive", quantity: 1, unit: "cuillères à soupe" },
      ],
      description:
        "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    },
    {
      name: "Spaghettis à la bolognaise",
      ingrédients: [
        { ingrédient: "Spaghettis", quantity: 400, unit: "grammes" },
        { ingrédient: "Oignon", quantity: 2 },
        { ingrédient: "Coulis de tomate", quantity: 300, unit: "grammes" },
        {
          ingrédient: "Viande hachée 1% de matière grasse",
          quantity: 400,
          unit: "grammes",
        },
        {
          ingrédient: "Vin rouge",
          quantity: 20,
          unit: "cl",
        },
        { ingrédient: "Crème fraîche", quantity: 1, unit: "cuillères à soupe" },
      ],
      description:
        "Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oignons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
    },
    {
      name: "Fondant au chocolat",
      ingrédients: [
        { ingrédient: "Beurre", quantity: 160, unit: "grammes" },
        { ingrédient: "Chocolat noir", quantity: 200, unit: "grammes" },
        { ingrédient: "Farine", quantity: 50, unit: "grammes" },
        { ingrédient: "Oeuf", quantity: 4 },
        { ingrédient: "Sucre", quantity: 150, unit: "grammes" },
      ],
      description:
        "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
    },
    {
      name: "Quiche lorraine",
      ingrédients: [
        { ingrédient: "Pâte brisée", quantity: 200, unit: "grammes" },
        { ingrédient: "Lardons", quantity: 200, unit: "grammes" },
        { ingrédient: "Beurre", quantity: 30, unit: "grammes" },
        { ingrédient: "Oeuf", quantity: 3 },
        { ingrédient: "Crème Fraîche", quantity: 20, unit: "cl" },
        { ingrédient: "Lait", quantity: 20, unit: "cl" },
      ],
      description:
        "Étaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    },
    {
      name: "Salade de pâtes",
      ingrédients: [
        { ingrédient: "Thon en miettes", quantity: 160, unit: "grammes" },
        { ingrédient: "Maïs", quantity: 60, unit: "grammes" },
        { ingrédient: "Tomate", quantity: 1 },
        { ingrédient: "Concombre", quantity: 0.5 },
        { ingrédient: "Macaronis", quantity: 300, unit: "grammes" },
        { ingrédient: "Mayonnaise", quantity: 2, unit: "cuillères à soupe" },
      ],
      description:
        "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
    },
    {
      name: "Cookies",
      ingrédients: [
        { ingrédient: "Sucre", quantity: 100, unit: "grammes" },
        { ingrédient: "Beurre", quantity: 100, unit: "grammes" },
        { ingrédient: "Farine", quantity: 100, unit: "grammes" },
        {
          ingrédient: "Chocolat noir en pépites",
          quantity: 100,
          unit: "grammes",
        },
        { ingrédient: "Oeuf", quantity: 1 },
      ],
      description:
        "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
    },
    {
      name: "Soupe de tomates",
      ingrédients: [
        { ingrédient: "Tomate", quantity: 6 },
        { ingrédient: "Pommes de terre", quantity: 1 },
        { ingrédient: "Huile d'olives" },
        { ingrédient: "Oignon", quantity: 1 },
        { ingrédient: "Ail", quantity: 1, unit: "gousses" },
      ],
      description:
        "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
    },
    {
      name: "Soupe à l'oseille",
      ingrédients: [
        { ingrédient: "Oseille", quantity: 2 },
        { ingrédient: "Oeuf", quantity: 1 },
        { ingrédient: "Crème fraîche", quantity: 4, unit: "cuillère à soupe" },
        { ingrédient: "Vermicelles", quantity: 1, unit: "verres" },
        { ingrédient: "Beurre salé", quantity: 50, unit: "grammes" },
      ],
      description:
        "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
    },
    {
      name: "Soupe de poireaux",
      ingrédients: [
        { ingrédient: "Poireau", quantity: 3 },
        { ingrédient: "Pommes de terre", quantity: 400, unit: "grammes" },
        { ingrédient: "Oseille", quantity: 75, unit: "grammes" },
        { ingrédient: "Beurre", quantity: 50, unit: "grammes" },
        { ingrédient: "Crème fraîche", quantity: 10, unit: "cl" },
      ],
      description:
        "Émincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
    },
    {
      name: "Houmous Express",
      ingrédients: [
        { ingrédient: "Pois chiches", quantity: 1, unit: "boites" },
        { ingrédient: "Ail", quantity: 1, unit: "gousses" },
        { ingrédient: "Citron", quantity: 2 },
        { ingrédient: "Huile d'olive" },
        { ingrédient: "Paprika" },
      ],
      description:
        "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
    },
    {
      name: "Purée de pois cassés",
      ingrédients: [
        { ingrédient: "Pois Cassé", quantity: 500, unit: "grammes" },
        { ingrédient: "Oignon", quantity: 1 },
        { ingrédient: "Ail", quantity: 2, unit: "gousses" },
      ],
      description:
        "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
    },
  ];
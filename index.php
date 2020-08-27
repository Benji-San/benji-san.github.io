<!DOCTYPE html>
<html lang="fr">
    <?php include'head.php'; ?>
    <body>
       <!-- ¤ MON CONTENU ¤ -->
        <main class="container-fluid">
           <!-- [ HEADER ] -->
            <?php include'header.php'; ?>
            <!-- * Section Présentation * -->
            <?php include'main/presentation.php'; ?>
            <!-- * apropos * -->    
            <?php include'main/apropos.php'; ?>
            <!-- * Séction Compteur * --> 
            <?php include'main/compteur.php'; ?>
            <!-- * Séction Compétences * --> 
            <?php include'main/competences.php'; ?>
            <!-- * Séction point fort * -->
            <?php include'main/pointfort.php'; ?>
            <!-- * Séction Dipômes * -->
            <?php include'main/diplomes.php'; ?>
            <!-- * Séction Expériences * -->
            <?php include'main/experiences.php'; ?>
            <!-- * Séction Map * -->
            <?php include'main/map.php'; ?>
            <!-- * Séction Contact*  -->
            <?php include'main/contact.php'; ?>
            <!-- * Séction Loisirs * -->
            <?php include'main/loisir.php'; ?>
            <!-- [ FOOTER ] -->
            <?php include'footer.php'; ?>
        </main>
        <?php include'script.php'; ?>
    </body>
</html>